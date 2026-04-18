"use client";

import { useState } from "react";
import Button from "./Button";
import { FormInput, FormSelect, FormTextarea } from "./Input";

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
        <div className="w-14 h-14 bg-(--color-primary-muted) border border-(--color-primary)/40 flex items-center justify-center text-2xl" style={{ borderRadius: "var(--radius-2xl)" }}>✓</div>
        <h3 className="font-bold text-lg text-brand">Request received</h3>
        <p className="text-white/50 text-sm">We&apos;ll confirm your appointment within 4 business hours.</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-bold text-base text-white mb-1">Book your free consultation</h3>
      <p className="text-white/40 text-xs mb-6">We will confirm your appointment within 4 business hours.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <FormInput label="First Name" placeholder="Kofoworade" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          <FormInput label="Last Name" placeholder="Surname" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        </div>
        <FormInput label="Phone / WhatsApp" type="tel" placeholder="+234 800 000 0000" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <FormSelect label="Property Type" required value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })}>
          <option value="" disabled className="bg-[#111827]">Select type</option>
          {PROPERTY_TYPES.map((t) => <option key={t} value={t} className="bg-[#111827]">{t}</option>)}
        </FormSelect>
        <FormSelect label="City" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}>
          <option value="" disabled className="bg-[#111827]">Select city</option>
          {CITIES.map((c) => <option key={c} value={c} className="bg-[#111827]">{c}</option>)}
        </FormSelect>
        <FormTextarea label="Brief Description" rows={3} placeholder="Describe what you need help with (optional)" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <Button type="submit" fullWidth className="mt-1">BOOK FREE CONSULTATION →</Button>
      </form>
    </>
  );
}
