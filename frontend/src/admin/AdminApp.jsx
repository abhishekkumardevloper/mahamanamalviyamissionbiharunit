// frontend/src/admin/AdminApp.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PagesManager from "./PagesManager";
import GalleryManager from "./GalleryManager";
import MembersManager from "./MembersManager";

export default function AdminApp() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Poppins, sans-serif", padding: 20 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Admin Panel</h2>
          <nav>
            <Link to="/admin" style={{ marginRight: 12 }}>Dashboard</Link>
            <Link to="/admin/pages" style={{ marginRight: 12 }}>Pages</Link>
            <Link to="/admin/gallery" style={{ marginRight: 12 }}>Gallery</Link>
            <Link to="/admin/members" style={{ marginRight: 12 }}>Members</Link>
            <a href="/" style={{ marginLeft: 12 }}>Public site</a>
          </nav>
        </header>
        <main style={{ marginTop: 20 }}>
          <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/pages" element={<PagesManager />} />
            <Route path="/admin/gallery" element={<GalleryManager />} />
            <Route path="/admin/members" element={<MembersManager />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}