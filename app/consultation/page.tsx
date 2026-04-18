"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const PROPERTY_TYPES = [
  "Private residence",
  "Estate / compound",
  "Office / commercial",
  "Industrial / warehouse",
  "Developer project",
  "Other",
];

const CITIES = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Other"];

const INTERESTS = [
  { id: "access", icon: "⬡", label: "Biometric access control" },
  { id: "cctv", icon: "◎", label: "CCTV & surveillance" },
  { id: "gates", icon: "⊡", label: "Remote gate system" },
  { id: "smart", icon: "⌂", label: "Smart home automation" },
  { id: "intercom", icon: "☏", label: "Video intercom" },
  { id: "fencing", icon: "⊕", label: "Electric fencing" },
  { id: "solar", icon: "☀", label: "Solar power" },
  { id: "unsure", icon: "?", label: "Not sure yet" },
];

const WHAT_TO_EXPECT = [
  { icon: "🏠", title: "We come to you", desc: "Our engineer visits your property — Lagos or Abuja, same week appointments available." },
  { icon: "📋", title: "Full assessment", desc: "We walk every access point, camera angle, and perimeter. Nothing is missed." },
  { icon: "📄", title: "Written report", desc: "You receive a written site assessment within 24 hours — regardless of whether you proceed." },
  { icon: "💬", title: "No pressure", desc: "Zero obligation. We give you the information you need to make the right decision." },
];

export default function ConsultationPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    propertyType: "",
    city: "",
    address: "",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Consultation" }]} />

      {/* ── Hero ── */}
      <div className="bg-[#0d1117] px-8 pb-16 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Free Consultation</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Book your free<br />
              <span className="text-[#c9a84c]">site assessment</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              A certified Eshmart engineer visits your property, assesses your security needs, and delivers a written report — at no cost and with no obligation.
            </p>
          </div>

          {/* What to expect strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Multi-step form ── */}
      <div className="px-8 py-16">
        <div className="max-w-3xl mx-auto">

          {submitted ? (
            /* Success state */
            <div className="bg-white rounded-2xl border border-black/8 p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
              <h2 className="text-2xl font-bold mb-3">Consultation booked!</h2>
              <p className="text-black/50 text-base leading-relaxed max-w-md mx-auto mb-8">
                We&apos;ve received your request. Our team will call you within 4 business hours to confirm your appointment date and time.
              </p>
              <div className="bg-[#f5f5f0] rounded-2xl p-6 text-left max-w-sm mx-auto mb-8">
                <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase mb-3">What happens next</p>
                {["We call to confirm your appointment", "Engineer visits your property", "Written assessment within 24 hours", "Fixed-price proposal within 5 days"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 mb-2 last:mb-0">
                    <span className="w-5 h-5 rounded-full bg-[#c9a84c] text-black text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <p className="text-sm text-black/60">{s}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 justify-center">
                <Link href="/products" className="border border-black/15 text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                  BROWSE PRODUCTS
                </Link>
                <Link href="/how-it-works" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors">
                  HOW IT WORKS →
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-8">
                {([1, 2, 3] as const).map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step === s ? "bg-[#c9a84c] text-black" : step > s ? "bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/40" : "bg-black/8 text-black/30"}`}>
                      {step > s ? "✓" : s}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:block ${step === s ? "text-black" : "text-black/30"}`}>
                      {s === 1 ? "Your interests" : s === 2 ? "Your details" : "Confirm"}
                    </span>
                    {s < 3 && <div className={`flex-1 h-px w-8 ${step > s ? "bg-[#c9a84c]/40" : "bg-black/10"}`} />}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-black/8 overflow-hidden">

                {/* Step 1: Interests */}
                {step === 1 && (
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-2">What are you interested in?</h2>
                    <p className="text-black/50 text-sm mb-8">Select all that apply — our engineer will focus on these areas during the visit.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                      {INTERESTS.map((item) => {
                        const isSelected = selected.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleInterest(item.id)}
                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all duration-200 ${isSelected ? "border-[#c9a84c] bg-[#c9a84c]/8 text-black" : "border-black/8 bg-[#f5f5f0] text-black/50 hover:border-[#c9a84c]/40 hover:text-black"}`}
                          >
                            <span className={`text-2xl ${isSelected ? "opacity-100" : "opacity-50"}`}>{item.icon}</span>
                            <span className="text-xs font-semibold leading-tight">{item.label}</span>
                            {isSelected && <span className="w-4 h-4 rounded-full bg-[#c9a84c] text-black text-[10px] flex items-center justify-center font-bold">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-4 rounded-full hover:bg-[#b8963e] transition-colors"
                    >
                      CONTINUE →
                    </button>
                  </div>
                )}

                {/* Step 2: Details */}
                {step === 2 && (
                  <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="p-8">
                    <h2 className="text-2xl font-bold mb-2">Your details</h2>
                    <p className="text-black/50 text-sm mb-8">We&apos;ll use these to confirm your appointment and send your assessment report.</p>

                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { key: "firstName", label: "First name", placeholder: "Adebayo" },
                          { key: "lastName", label: "Last name", placeholder: "Okafor" },
                        ].map(({ key, label, placeholder }) => (
                          <div key={key} className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">{label}</label>
                            <input
                              required placeholder={placeholder}
                              value={form[key as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                              className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Phone / WhatsApp</label>
                          <input
                            required type="tel" placeholder="+234 800 000 0000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Email</label>
                          <input
                            type="email" placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Property type</label>
                          <select
                            required value={form.propertyType}
                            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                            className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none"
                          >
                            <option value="" disabled>Select type...</option>
                            {PROPERTY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">City</label>
                          <select
                            required value={form.city}
                            onChange={(e) => setForm({ ...form, city: e.target.value })}
                            className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none"
                          >
                            <option value="" disabled>Select city...</option>
                            {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Property address (optional)</label>
                        <input
                          placeholder="Street address or area"
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Preferred visit date (optional)</label>
                        <input
                          type="date"
                          value={form.preferredDate}
                          onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                          className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Additional notes (optional)</label>
                        <textarea
                          rows={3} placeholder="Anything else we should know before the visit..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="border border-black/10 rounded-xl px-3 py-2.5 text-sm bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button type="button" onClick={() => setStep(1)} className="flex-1 border border-black/15 text-black font-bold text-xs tracking-widest py-4 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                        ← BACK
                      </button>
                      <button type="submit" className="flex-1 bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-4 rounded-full hover:bg-[#b8963e] transition-colors">
                        REVIEW →
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="p-8">
                    <h2 className="text-2xl font-bold mb-2">Confirm your booking</h2>
                    <p className="text-black/50 text-sm mb-8">Review your details before submitting.</p>

                    <div className="bg-[#f5f5f0] rounded-2xl p-6 mb-6 space-y-4">
                      {/* Interests */}
                      {selected.length > 0 && (
                        <div>
                          <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase mb-2">Interested in</p>
                          <div className="flex flex-wrap gap-2">
                            {selected.map((id) => {
                              const item = INTERESTS.find((i) => i.id === id);
                              return item ? (
                                <span key={id} className="text-xs bg-[#c9a84c]/15 text-[#c9a84c] font-semibold px-3 py-1 rounded-full border border-[#c9a84c]/30">
                                  {item.icon} {item.label}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-black/8">
                        {[
                          { label: "Name", value: `${form.firstName} ${form.lastName}`.trim() },
                          { label: "Phone", value: form.phone },
                          { label: "Email", value: form.email || "—" },
                          { label: "Property type", value: form.propertyType },
                          { label: "City", value: form.city },
                          { label: "Preferred date", value: form.preferredDate || "Flexible" },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase mb-0.5">{label}</p>
                            <p className="text-sm font-semibold text-black">{value}</p>
                          </div>
                        ))}
                      </div>

                      {form.message && (
                        <div className="pt-2 border-t border-black/8">
                          <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase mb-1">Notes</p>
                          <p className="text-sm text-black/60">{form.message}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-[#0d1117] rounded-2xl p-5 mb-6 flex items-start gap-3">
                      <span className="text-[#c9a84c] text-lg shrink-0">ℹ</span>
                      <p className="text-white/60 text-xs leading-relaxed">
                        By submitting, you agree to be contacted by an Eshmart SmartTech engineer to confirm your appointment. This is a free, no-obligation service.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(2)} className="flex-1 border border-black/15 text-black font-bold text-xs tracking-widest py-4 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                        ← EDIT
                      </button>
                      <button type="submit" className="flex-1 bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-4 rounded-full hover:bg-[#b8963e] transition-colors">
                        CONFIRM BOOKING →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Why consult first ── */}
      {!submitted && (
        <div className="bg-[#0d1117] px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
              <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Why consult first?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              The right system starts with the right assessment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "🎯", title: "Avoid over-spending", desc: "Many clients come to us after paying for systems that don't fit their property. A site survey ensures you only pay for what you actually need." },
                { icon: "🔧", title: "Avoid under-specifying", desc: "Equally, a system that's too small leaves gaps. Our engineers identify every vulnerability so nothing is missed." },
                { icon: "📊", title: "Get a fixed price", desc: "Our proposals are fixed-price. No variations, no surprises. The survey is what makes that possible." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
