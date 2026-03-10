// frontend/src/admin/Login.jsx
import React, { useState } from "react";
import { adminLogin } from "./api";

export default function Login() {
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminLogin(token);
      setMsg("Logged in!");
      window.location.href = "/admin";
    } catch (err) {
      setMsg("Login failed");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <h3>Admin login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Admin token</label>
          <input value={token} onChange={(e) => setToken(e.target.value)} style={{ width: "100%" }} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Login</button>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}