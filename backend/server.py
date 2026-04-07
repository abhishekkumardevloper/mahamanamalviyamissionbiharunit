from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, Header, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from supabase import Client, create_client
import os

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

SUPABASE_URL = os.environ.get("SUPABASE_URL", "your-supabase-url")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "your-supabase-anon-or-service-key")
ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "changeme")
CORS_ORIGINS = [o.strip() for o in os.environ.get("CORS_ORIGINS", "*").split(",") if o.strip()]

app = FastAPI(title="Mahamana Admin API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS or ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


class LoginPayload(BaseModel):
    token: str = Field(min_length=1)


class PageModel(BaseModel):
    title: str = Field(min_length=2)
    slug: str = Field(min_length=2)
    content: str = ""
    language: str = "en"
    published: bool = False


class GalleryItemModel(BaseModel):
    url: str = Field(min_length=5)
    caption: str = ""
    alt: str = ""
    order: int = 0


class MemberModel(BaseModel):
    name: str = Field(min_length=2)
    role: str = ""
    photo_url: str = ""
    bio: str = ""


class NewsModel(BaseModel):
    title: str = Field(min_length=3)
    description: str = Field(min_length=5)
    image_url: str = ""
    date: Optional[str] = None
    status: str = "draft"
    published: bool = False


class ActivityModel(BaseModel):
    title: str = Field(min_length=3)
    description: str = Field(min_length=5)
    image_url: str = ""
    gallery: List[str] = []
    date: Optional[str] = None
    category: str = "General"
    status: str = "draft"
    published: bool = False


class EventModel(BaseModel):
    year: int = Field(ge=1900, le=2200)
    title: str = Field(min_length=3)
    slug: str = Field(min_length=2)
    description: str = ""
    images: List[str] = []
    video_links: List[str] = []
    status: str = "draft"
    published: bool = False


class BlogModel(BaseModel):
    title: str = Field(min_length=3)
    slug: str = Field(min_length=2)
    content: str = Field(min_length=5)
    author: str = "Admin"
    image_url: str = ""
    date: Optional[str] = None
    status: str = "draft"
    published: bool = False


class VideoModel(BaseModel):
    title: str = Field(min_length=3)
    video_url: str = Field(min_length=8)
    thumbnail_url: str = ""
    event_id: Optional[int] = None
    event_year: Optional[int] = None
    status: str = "draft"
    published: bool = False


class StoreItemModel(BaseModel):
    product_name: str = Field(min_length=2)
    category: str = "General"
    description: str = ""
    price: float = Field(ge=0)
    stock: int = Field(ge=0, default=0)
    image_url: str = ""
    status: str = "active"
    published: bool = True


class DonationModel(BaseModel):
    donor_name: str = Field(min_length=2)
    email: Optional[str] = None
    phone: Optional[str] = None
    amount: float = Field(ge=1)
    transaction_id: str = Field(min_length=3)
    message: str = ""
    status: str = "submitted"


def check_admin_token(x_admin_token: Optional[str] = Header(None)):
    if x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid admin token")


def with_timestamps(payload: Dict) -> Dict:
    now = datetime.utcnow().isoformat()
    payload.setdefault("created_at", now)
    payload["updated_at"] = now
    return payload


def handle_db_response(response, single: bool = False):
    if not response.data:
        if single:
            raise HTTPException(status_code=404, detail="Resource not found")
        return []
    return response.data[0] if single else response.data


@app.get("/healthz")
def health():
    return {"status": "ok", "database": "Supabase Connected"}


@app.post("/admin/login")
def admin_login(payload: LoginPayload):
    if payload.token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"token": ADMIN_TOKEN, "message": "Login successful"}


def create_crud_routes(path: str, table_name: str, model: BaseModel, include_public_filter: bool = False):
    @app.post(f"/admin/{path}", dependencies=[Depends(check_admin_token)])
    def create_item(payload: model):
        doc = with_timestamps(payload.model_dump())
        res = supabase.table(table_name).insert(doc).execute()
        return handle_db_response(res, single=True)

    @app.get(f"/{path}")
    def list_items(include_unpublished: bool = Query(False)):
        query = supabase.table(table_name).select("*")
        if include_public_filter and not include_unpublished:
            query = query.eq("published", True)
        res = query.order("created_at", desc=True).execute()
        return handle_db_response(res)

    @app.get(f"/admin/{path}", dependencies=[Depends(check_admin_token)])
    def admin_list_items():
        res = supabase.table(table_name).select("*").order("created_at", desc=True).execute()
        return handle_db_response(res)

    @app.get(f"/{path}/{{item_id}}")
    def get_item(item_id: int):
        res = supabase.table(table_name).select("*").eq("id", item_id).execute()
        return handle_db_response(res, single=True)

    @app.put(f"/admin/{path}/{{item_id}}", dependencies=[Depends(check_admin_token)])
    def update_item(item_id: int, payload: model):
        doc = payload.model_dump(exclude_unset=True)
        doc["updated_at"] = datetime.utcnow().isoformat()
        res = supabase.table(table_name).update(doc).eq("id", item_id).execute()
        return handle_db_response(res, single=True)

    @app.delete(f"/admin/{path}/{{item_id}}", dependencies=[Depends(check_admin_token)])
    def delete_item(item_id: int):
        res = supabase.table(table_name).delete().eq("id", item_id).execute()
        if not res.data:
            raise HTTPException(status_code=404, detail="Item not found")
        return {"deleted": True, "id": item_id}


create_crud_routes("pages", "pages", PageModel)
create_crud_routes("gallery", "gallery", GalleryItemModel)
create_crud_routes("members", "members", MemberModel)
create_crud_routes("news", "news", NewsModel, include_public_filter=True)
create_crud_routes("activities", "activities", ActivityModel, include_public_filter=True)
create_crud_routes("events", "events", EventModel, include_public_filter=True)
create_crud_routes("blogs", "blogs", BlogModel, include_public_filter=True)
create_crud_routes("videos", "videos", VideoModel, include_public_filter=True)
create_crud_routes("store", "store", StoreItemModel, include_public_filter=True)
create_crud_routes("donations", "donations", DonationModel)


@app.get("/pages/slug/{slug}")
def get_page_by_slug(slug: str):
    res = supabase.table("pages").select("*").eq("slug", slug).execute()
    return handle_db_response(res, single=True)


@app.get("/blogs/slug/{slug}")
def get_blog_by_slug(slug: str):
    res = supabase.table("blogs").select("*").eq("slug", slug).eq("published", True).execute()
    return handle_db_response(res, single=True)


@app.get("/events/year/{year}")
def get_events_by_year(year: int):
    res = supabase.table("events").select("*").eq("year", year).eq("published", True).order("created_at", desc=True).execute()
    return handle_db_response(res)


@app.post("/donations/request")
def create_donation_request(payload: DonationModel):
    doc = with_timestamps(payload.model_dump())
    res = supabase.table("donations").insert(doc).execute()
    return handle_db_response(res, single=True)
