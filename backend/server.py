from fastapi import FastAPI, HTTPException, Header, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os
from dotenv import load_dotenv
from datetime import datetime
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "mahamana")
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

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]

# helpers for ObjectId
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid object id")
        return ObjectId(v)


# Models
class PageModel(BaseModel):
    title: str
    slug: str
    content: str
    language: Optional[str] = "en"
    published: Optional[bool] = False

class PageDB(PageModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class GalleryItemModel(BaseModel):
    url: str
    caption: Optional[str] = ""
    alt: Optional[str] = ""
    order: Optional[int] = 0

class GalleryItemDB(GalleryItemModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)


class MemberModel(BaseModel):
    name: str
    role: Optional[str] = ""
    photo_url: Optional[str] = ""
    bio: Optional[str] = ""

class MemberDB(MemberModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)


# Simple admin dependency: check x-admin-token header
async def check_admin_token(x_admin_token: Optional[str] = Header(None)):
    if x_admin_token is None or x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid admin token")


# Health
@app.get("/healthz")
async def health():
    return {"status": "ok", "database": DB_NAME}


# ----- Pages CRUD -----
@app.post("/admin/pages", dependencies=[Depends(check_admin_token)])
async def create_page(payload: PageModel):
    now = datetime.utcnow()
    doc = payload.dict()
    doc["created_at"] = now
    doc["updated_at"] = now
    res = await db.pages.insert_one(doc)
    return {"_id": str(res.inserted_id), **doc}

@app.get("/pages", response_model=List[dict])
async def list_pages():
    cursor = db.pages.find().sort("created_at", -1)
    pages = []
    async for p in cursor:
        p["_id"] = str(p["_id"])
        pages.append(p)
    return pages

@app.get("/pages/{slug}")
async def get_page(slug: str):
    p = await db.pages.find_one({"slug": slug})
    if not p:
        raise HTTPException(status_code=404, detail="Page not found")
    p["_id"] = str(p["_id"])
    return p

@app.put("/admin/pages/{page_id}", dependencies=[Depends(check_admin_token)])
async def update_page(page_id: str, payload: PageModel):
    from bson import ObjectId
    oid = ObjectId(page_id)
    data = payload.dict()
    data["updated_at"] = datetime.utcnow()
    res = await db.pages.update_one({"_id": oid}, {"$set": data})
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="Page not found")
    updated = await db.pages.find_one({"_id": oid})
    updated["_id"] = str(updated["_id"])
    return updated

@app.delete("/admin/pages/{page_id}", dependencies=[Depends(check_admin_token)])
async def delete_page(page_id: str):
    from bson import ObjectId
    oid = ObjectId(page_id)
    res = await db.pages.delete_one({"_id": oid})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Page not found")
    return {"deleted": True}


# ----- Gallery CRUD -----
@app.post("/admin/gallery", dependencies=[Depends(check_admin_token)])
async def create_gallery(item: GalleryItemModel):
    doc = item.dict()
    doc["created_at"] = datetime.utcnow()
    res = await db.gallery.insert_one(doc)
    return {"_id": str(res.inserted_id), **doc}

@app.get("/gallery")
async def list_gallery():
    cursor = db.gallery.find().sort("order", 1)
    items = []
    async for it in cursor:
        it["_id"] = str(it["_id"])
        items.append(it)
    return items

@app.put("/admin/gallery/{item_id}", dependencies=[Depends(check_admin_token)])
async def update_gallery(item_id: str, payload: GalleryItemModel):
    from bson import ObjectId
    oid = ObjectId(item_id)
    data = payload.dict()
    res = await db.gallery.update_one({"_id": oid}, {"$set": data})
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="Gallery item not found")
    updated = await db.gallery.find_one({"_id": oid})
    updated["_id"] = str(updated["_id"])
    return updated

@app.delete("/admin/gallery/{item_id}", dependencies=[Depends(check_admin_token)])
async def delete_gallery(item_id: str):
    from bson import ObjectId
    oid = ObjectId(item_id)
    res = await db.gallery.delete_one({"_id": oid})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Gallery item not found")
    return {"deleted": True}


# ----- Members CRUD -----
@app.post("/admin/members", dependencies=[Depends(check_admin_token)])
async def create_member(member: MemberModel):
    doc = member.dict()
    doc["created_at"] = datetime.utcnow()
    res = await db.members.insert_one(doc)
    return {"_id": str(res.inserted_id), **doc}

@app.get("/members")
async def list_members():
    cursor = db.members.find().sort("created_at", -1)
    members = []
    async for m in cursor:
        m["_id"] = str(m["_id"])
        members.append(m)
    return members

@app.put("/admin/members/{member_id}", dependencies=[Depends(check_admin_token)])
async def update_member(member_id: str, payload: MemberModel):
    from bson import ObjectId
    oid = ObjectId(member_id)
    data = payload.dict()
    res = await db.members.update_one({"_id": oid}, {"$set": data})
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="Member not found")
    updated = await db.members.find_one({"_id": oid})
    updated["_id"] = str(updated["_id"])
    return updated

@app.delete("/admin/members/{member_id}", dependencies=[Depends(check_admin_token)])
async def delete_member(member_id: str):
    from bson import ObjectId
    oid = ObjectId(member_id)
    res = await db.members.delete_one({"_id": oid})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Member not found")
    return {"deleted": True}


# ----- Simple admin login endpoint that returns token if password matches env -----
@app.post("/admin/login")
async def admin_login(payload: dict):
    # payload: {"token": "<admin-token>"}
    token = payload.get("token")
    if not token or token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"token": ADMIN_TOKEN}


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
