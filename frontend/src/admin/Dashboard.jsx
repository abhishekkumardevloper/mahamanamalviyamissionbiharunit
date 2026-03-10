// frontend/src/admin/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>Use the left/nav links to manage pages, gallery and members.</p>
      <ul>
        <li>Pages — create/edit the site pages (title, slug, content).</li>
        <li>Gallery — add image URLs to the site gallery.</li>
        <li>Members — manage team / people list.</li>
      </ul>
    </div>
  );
}
