import React, { useState } from "react";
import { submitDonation } from "../admin/api";

export default function Donation() {
  const [form, setForm] = useState({ donor_name: "", email: "", phone: "", amount: "", transaction_id: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await submitDonation({ ...form, amount: Number(form.amount), status: "submitted" });
      setMessage("Donation details submitted successfully.");
      setForm({ donor_name: "", email: "", phone: "", amount: "", transaction_id: "", message: "" });
    } catch (err) {
      setMessage(err.message || "Failed to submit donation details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Donate Now</h1>
      <p className="text-gray-600 mb-6">Use UPI ID <b>7209329329m@pnb</b> or bank transfer, then submit details below for receipt.</p>
      <form className="space-y-3 bg-white border rounded-xl p-6" onSubmit={onSubmit}>
        {Object.entries({ donor_name: "Donor Name", email: "Email", phone: "Phone", amount: "Amount (₹)", transaction_id: "Transaction ID" }).map(([k, label]) => (
          <label key={k} className="block">
            <span className="text-sm">{label}</span>
            <input className="w-full border rounded p-2" type={k === "amount" ? "number" : k === "email" ? "email" : "text"} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} required={k !== "phone"} />
          </label>
        ))}
        <label className="block">
          <span className="text-sm">Message (optional)</span>
          <textarea className="w-full border rounded p-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </label>
        <button className="bg-black text-white rounded px-4 py-2 disabled:opacity-50" disabled={loading}>{loading ? "Submitting..." : "Submit Donation Details"}</button>
        {message && <p className="text-sm">{message}</p>}
      </form>
    </section>
  );
}
