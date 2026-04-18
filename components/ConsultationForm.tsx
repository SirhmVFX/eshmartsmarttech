"use client";

import { useState } from "react";

const PROPERTY_TYPES = ["Residential home", "Estate / compound", "Office / commercial", "Industrial", "Other"];
const CITIES = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Other"];

export default function ConsultationForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", propertyType: "", city: "", description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-2xl">✓</div>
        <h3 className="font-bold text-lg text-[#c9a84c]">Request received</h3>
        <p className="text-white/50 text-sm">We&apos;ll confirm your appointment within 4 business hours.</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-bold text-base mb-1">Book your free consultation</h3>
      <p className="text-white/40 text-xs mb-6">We will confirm your appointment within 4 business hours.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: "firstName", label: "First Name", placeholder: "Kofoworade" },
            { key: "lastName", label: "Last Name", placeholder: "Surname" },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">{label}</label>
              <input
                required
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Phone / WhatsApp</label>
          <input
            required type="tel" placeholder="+234 800 000 0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Property Type</label>
          <select
            required value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none"
          >
            <option value="" disabled className="bg-[#111827]">Select type</option>
            {PROPERTY_TYPES.map((t) => <option key={t} value={t} className="bg-[#111827]">{t}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">City</label>
          <select
            required value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none"
          >
            <option value="" disabled className="bg-[#111827]">Select city</option>
            {CITIES.map((c) => <option key={c} value={c} className="bg-[#111827]">{c}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Brief Description</label>
          <textarea
            rows={3} placeholder="Describe what you need help with (optional)"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors resize-none"
          />
        </div>

        <button type="submit" className="mt-1 w-full bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">
          BOOK FREE CONSULTATION →
        </button>
      </form>
    </>
  );
}
