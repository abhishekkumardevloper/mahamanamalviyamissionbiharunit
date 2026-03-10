// frontend/src/admin/PagesManager.jsx
import React, { useEffect, useState } from "react";
import { fetchPages, createPage, updatePage, deletePage } from "./api";

export default function PagesManager() {
  const [pages, setPages] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", slug: "", content: "", language: "en", published: false });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const p = await fetchPages();
    setPages(p);
  }

  function editPage(p) {
    setEditing(p._id);
    setForm({ title: p.title, slug: p.slug, content: p.content, language: p.language || "en", published: p.published || false });
  }

  async function save() {
    try {
      if (editing) {
        await updatePage(editing, form);
      } else {
        await createPage(form);
      }
      setEditing(null);
      setForm({ title: "", slug: "", content: "", language: "en", published: false });
      await load();
    } catch (err) {
      alert("Save failed");
      console.error(err);
    }
  }

  async function remove(id) {
    if (!confirm("Delete page?")) return;
    await deletePage(id);
    await load();
  }

  return (
    <div>
      <h3>Pages</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h4>{editing ? "Edit Page" : "Create Page"}</h4>
          <div>
            <label>Title</label>
            <input value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} style={{width:"100%"}}/>
          </div>
          <div>
            <label>Slug (e.g. about)</label>
            <input value={form.slug} onChange={(e)=>setForm({...form, slug: e.target.value})} style={{width:"100%"}}/>
          </div>
          <div>
            <label>Content (HTML allowed)</label>
            <textarea value={form.content} onChange={(e)=>setForm({...form, content: e.target.value})} style={{width:"100%", minHeight: 200}} />
          </div>
          <div style={{ marginTop: 8 }}>
            <label><input type="checkbox" checked={form.published} onChange={(e)=>setForm({...form, published: e.target.checked})} /> Published</label>
          </div>
          <div style={{ marginTop: 12 }}>
            <button onClick={save}>{editing ? "Update" : "Create"}</button>
            {editing && <button onClick={()=>{ setEditing(null); setForm({ title: "", slug: "", content: "", language: "en", published: false })}}>Cancel</button>}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h4>Existing Pages</h4>
          <ul>
            {pages.map(p => (
              <li key={p._id} style={{ marginBottom: 8 }}>
                <strong>{p.title}</strong> — <code>/{p.slug}</code>
                <div>
                  <button onClick={()=>editPage(p)}>Edit</button>
                  <button onClick={()=>remove(p._id)} style={{ marginLeft: 8 }}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}