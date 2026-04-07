import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminLoginEmail, adminLoginToken, isLoggedIn } from "./api";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("email");
  const [form, setForm] = useState({ email: "", password: "", token: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isLoggedIn()) navigate("/admin");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "email") {
        await adminLoginEmail(form.email.trim(), form.password);
      } else {
        await adminLoginToken(form.token.trim());
      }
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white border rounded-xl p-6 shadow-sm space-y-4">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <div className="flex gap-2 text-sm">
          <button type="button" className={`px-3 py-1 rounded ${mode === "email" ? "bg-black text-white" : "border"}`} onClick={() => setMode("email")}>Email</button>
          <button type="button" className={`px-3 py-1 rounded ${mode === "token" ? "bg-black text-white" : "border"}`} onClick={() => setMode("token")}>Token</button>
        </div>

        {mode === "email" ? (
          <>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full border rounded p-3" type="email" required />
            <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" className="w-full border rounded p-3" type="password" required />
          </>
        ) : (
          <input value={form.token} onChange={(e) => setForm({ ...form, token: e.target.value })} placeholder="Admin token" className="w-full border rounded p-3" required />
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="w-full bg-black text-white rounded p-3 disabled:opacity-60">{loading ? "Logging in..." : "Login"}</button>
        <p className="text-sm text-gray-600">Need an account? <Link className="underline" to="/admin/register">Register here</Link></p>
      </form>
    </div>
  );
}
