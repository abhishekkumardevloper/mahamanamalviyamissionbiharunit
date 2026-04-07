import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminRegister } from "./api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await adminRegister({ name: form.name.trim(), email: form.email.trim(), password: form.password });
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white border rounded-xl p-6 shadow-sm space-y-4">
        <h1 className="text-2xl font-bold">Admin Register</h1>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full border rounded p-3" required />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" className="w-full border rounded p-3" required />
        <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" type="password" className="w-full border rounded p-3" required minLength={6} />
        <input value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} placeholder="Confirm password" type="password" className="w-full border rounded p-3" required minLength={6} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="w-full bg-black text-white rounded p-3 disabled:opacity-60">{loading ? "Registering..." : "Register"}</button>
        <p className="text-sm text-gray-600">Already have an account? <Link className="underline" to="/admin/login">Login</Link></p>
      </form>
    </div>
  );
}
