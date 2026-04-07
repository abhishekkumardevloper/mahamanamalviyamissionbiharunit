from fastapi import FastAPI, HTTPException, Header, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from datetime import datetime
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# Supabase Credentials
SUPABASE_URL = os.environ.get("SUPABASE_URL", "your-supabase-url")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "your-supabase-anon-or-service-key")
ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "changeme")
CORS_ORIGINS = os.environ.get("CORS_ORIGINS", "*").split(",")

app = FastAPI(title="Mahamana Admin API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Supabase Client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ==========================================
# PYDANTIC MODELS
# ==========================================

class PageModel(BaseModel):
    title: str
    slug: str
    content: str
    language: Optional[str] = "en"
    published: Optional[bool] = False

class GalleryItemModel(BaseModel):
    url: str
    caption: Optional[str] = ""
    alt: Optional[str] = ""
    order: Optional[int] = 0

class MemberModel(BaseModel):
    name: str
    role: Optional[str] = ""
    photo_url: Optional[str] = ""
    bio: Optional[str] = ""

class NewsModel(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = ""
    published: Optional[bool] = True

class ActivityModel(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = ""
    date: Optional[str] = None

class EventModel(BaseModel):
    title: str
    year: int
    description: Optional[str] = ""
    images: Optional[List[str]] = []  # Supabase handles text[] arrays natively

class BlogModel(BaseModel):
    title: str
    slug: str
    content: str
    author: Optional[str] = "Admin"
    image_url: Optional[str] = ""
    published: Optional[bool] = True

class VideoModel(BaseModel):
    title: str
    video_url: str
    event_id: Optional[int] = None # Can be used to link to an Event's ID
    description: Optional[str] = ""

class StoreItemModel(BaseModel):
    product_name: str
    description: Optional[str] = ""
    price: float
    stock: Optional[int] = 0
    image_url: Optional[str] = ""

# Donations are typically created by users, but admin needs to view/manage them
class DonationModel(BaseModel):
    donor_name: str
    amount: float
    transaction_id: str
    status: Optional[str] = "completed"

# ==========================================
# DEPENDENCIES
# ==========================================

def check_admin_token(x_admin_token: Optional[str] = Header(None)):
    if x_admin_token is None or x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid admin token")

# ==========================================
# ROUTES
# ==========================================

@app.get("/healthz")
def health():
    return {"status": "ok", "database": "Supabase Connected"}

# ----- Admin Login -----
class LoginPayload(BaseModel):
    token: str

@app.post("/admin/login")
def admin_login(payload: LoginPayload):
    if not payload.token or payload.token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"token": ADMIN_TOKEN, "message": "Login successful"}

# Helper function to handle Supabase responses safely
def handle_db_response(response, single=False):
    if not response.data:
        if single:
            raise HTTPException(status_code=404, detail="Resource not found")
        return []
    return response.data[0] if single else response.data

# ----- Generic CRUD Generator for clean code -----
def create_crud_routes(path: str, table_name: str, model: BaseModel):
    
    @app.post(f"/admin/{path}", dependencies=[Depends(check_admin_token)])
    def create_item(payload: model):
        doc = payload.dict()
        doc["created_at"] = datetime.utcnow().isoformat()
        res = supabase.table(table_name).insert(doc).execute()
        return handle_db_response(res, single=True)

    @app.get(f"/{path}")
    def list_items():
        res = supabase.table(table_name).select("*").order("created_at", desc=True).execute()
        return handle_db_response(res)

    @app.get(f"/{path}/{{item_id}}")
    def get_item(item_id: int):
        res = supabase.table(table_name).select("*").eq("id", item_id).execute()
        return handle_db_response(res, single=True)

    @app.put(f"/admin/{path}/{{item_id}}", dependencies=[Depends(check_admin_token)])
    def update_item(item_id: int, payload: model):
        doc = payload.dict(exclude_unset=True)
        res = supabase.table(table_name).update(doc).eq("id", item_id).execute()
        return handle_db_response(res, single=True)

    @app.delete(f"/admin/{path}/{{item_id}}", dependencies=[Depends(check_admin_token)])
    def delete_item(item_id: int):
        res = supabase.table(table_name).delete().eq("id", item_id).execute()
        if not res.data:
            raise HTTPException(status_code=404, detail="Item not found")
        return {"deleted": True, "id": item_id}

# ==========================================
# REGISTER ALL MODULES (Magic CRUD builder)
# ==========================================

# 1. Existing Requirements
create_crud_routes("pages", "pages", PageModel)
create_crud_routes("gallery", "gallery", GalleryItemModel)
create_crud_routes("members", "members", MemberModel)

# 2. Latest News Management
create_crud_routes("news", "news", NewsModel)

# 3. Activities Management
create_crud_routes("activities", "activities", ActivityModel)

# 4. Year-wise Event Sections
create_crud_routes("events", "events", EventModel)

# 5. Blog Section Management
create_crud_routes("blogs", "blogs", BlogModel)

# 6. Video Tour Section
create_crud_routes("videos", "videos", VideoModel)

# 7. Store Option
create_crud_routes("store", "store", StoreItemModel)

# 8. Donate Now Details (Mostly read-only for admin, but CRUD provided for DB management)
create_crud_routes("donations", "donations", DonationModel)


# Special override for Pages lookup by slug (since existing code had it)
@app.get("/pages/slug/{slug}")
def get_page_by_slug(slug: str):
    res = supabase.table("pages").select("*").eq("slug", slug).execute()
    return handle_db_response(res, single=True)

@app.get("/blogs/slug/{slug}")
def get_blog_by_slug(slug: str):
    res = supabase.table("blogs").select("*").eq("slug", slug).execute()
    return handle_db_response(res, single=True)
