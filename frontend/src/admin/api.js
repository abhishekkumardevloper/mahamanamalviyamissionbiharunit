// frontend/src/admin/api.js
const API_BASE = import.meta.env.VITE_ADMIN_API_URL || "http://localhost:8001";

function getToken() {
  return localStorage.getItem("admin_token");
}

function headers(json = true) {
  const h = {};
  if (json) h["Content-Type"] = "application/json";
  const token = getToken();
  if (token) h["x-admin-token"] = token;
  return h;
}

export async function adminLogin(token) {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  localStorage.setItem("admin_token", data.token);
  return data;
}

// Pages
export async function fetchPages() {
  const res = await fetch(`${API_BASE}/pages`);
  if (!res.ok) throw new Error("Failed to load pages");
  return res.json();
}

export async function createPage(page) {
  const res = await fetch(`${API_BASE}/admin/pages`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(page),
  });
  if (!res.ok) throw new Error("Create page failed");
  return res.json();
}

export async function updatePage(id, page) {
  const res = await fetch(`${API_BASE}/admin/pages/${id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(page),
  });
  if (!res.ok) throw new Error("Update page failed");
  return res.json();
}

export async function deletePage(id) {
  const res = await fetch(`${API_BASE}/admin/pages/${id}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error("Delete page failed");
  return res.json();
}

// Gallery
export async function fetchGallery() {
  const res = await fetch(`${API_BASE}/gallery`);
  if (!res.ok) throw new Error("Failed to load gallery");
  return res.json();
}
export async function createGallery(item) {
  const res = await fetch(`${API_BASE}/admin/gallery`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Create gallery failed");
  return res.json();
}
export async function updateGallery(id, item) {
  const res = await fetch(`${API_BASE}/admin/gallery/${id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Update gallery failed");
  return res.json();
}
export async function deleteGallery(id) {
  const res = await fetch(`${API_BASE}/admin/gallery/${id}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error("Delete gallery failed");
  return res.json();
}

// Members
export async function fetchMembers() {
  const res = await fetch(`${API_BASE}/members`);
  if (!res.ok) throw new Error("Failed to load members");
  return res.json();
}
export async function createMember(m) {
  const res = await fetch(`${API_BASE}/admin/members`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(m),
  });
  if (!res.ok) throw new Error("Create member failed");
  return res.json();
}
export async function updateMember(id, m) {
  const res = await fetch(`${API_BASE}/admin/members/${id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(m),
  });
  if (!res.ok) throw new Error("Update member failed");
  return res.json();
}
export async function deleteMember(id) {
  const res = await fetch(`${API_BASE}/admin/members/${id}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error("Delete member failed");
  return res.json();
}