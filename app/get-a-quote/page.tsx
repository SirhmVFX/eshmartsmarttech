"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const SERVICES = [
  "Biometric access control",
  "CCTV & surveillance",
  "Remote gate system",
  "Smart home automation",
  "Video intercom",
  "Electric fencing",
  "Solar power system",
  "Full estate package",
  "Not sure — need advice",
];

const BUDGETS = [
  "Under ₦500,000",
  "₦500K – ₦1M",
  "₦1M – ₦3M",
  "₦3M – ₦10M",
  "₦10M+",
  "Prefer not to say",
];

const PROPERTY_TYPES = [
  "Private residence",
  "Estate / compound",
  "Office / commercial",
  "Industrial / warehouse",
  "Developer project",
  "Other",
];

const CITIES = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Other"];

const FAQS = [
  {
    q: "Is the site survey really free?",
    a: "Yes — completely. Our engineer visits your property, assesses your needs, and provides a written report at no cost and with no obligation to proceed.",
  },
  {
    q: "How quickly will I receive my quote?",
    a: "We deliver a fixed-price proposal within 5 business days of the site survey. For simple single-product installations, we can often turn it around faster.",
  },
  {
    q: "What's included in the quote?",
    a: "Everything — equipment, cabling, installation labour, commissioning, and a 2-year warranty. No hidden costs, no variations.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer flexible payment structures: a deposit on acceptance, a progress payment at installation start, and the balance on completion.",
  },
  {
    q: "Can I get a quote for multiple products?",
    a: "Absolutely. Most of our clients install multiple systems together — we'll scope everything in a single proposal and identify any integration savings.",
  },
];

export default function GetAQuotePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    propertyType: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]} />

      {/* ── Hero: two-column ── */}
      <div className="bg-[#0d1117] px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

          {/* Left copy */}
          <div className="flex-1 pt-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
              <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Start a project!
            </h1>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">
              Let&apos;s discuss how we can provide the best smart security solution for your home or business.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="tel:+2348010000001" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c]/20 transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-0.5">Call / WhatsApp</p>
                  <p className="text-white text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">+234 (0) 801 000 0001</p>
                </div>
              </a>
              <a href="mailto:info@eshmartsmarttech.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c]/20 transition-colors">
                  ✉
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-0.5">Email</p>
                  <p className="text-white text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">info@eshmartsmarttech.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                  📍
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-0.5">Offices</p>
                  <p className="text-white text-sm font-semibold">Lagos & Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              {[
                { stat: "500+", label: "Installations" },
                { stat: "2 yr", label: "Warranty" },
                { stat: "24 hr", label: "Response SLA" },
              ].map((s) => (
                <div key={s.stat}>
                  <p className="text-[#c9a84c] text-2xl font-bold">{s.stat}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="w-full lg:w-[500px] shrink-0 bg-[#111827] border border-white/10 rounded-2xl p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-3xl">✓</div>
                <h3 className="font-bold text-xl text-[#c9a84c]">Quote request received!</h3>
                <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                  Our team will review your requirements and get back to you within 4 business hours to schedule your free site survey.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-xs text-white/30 hover:text-white/60 transition-colors mt-2">
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-white text-lg mb-1">Get your free quote</h2>
                <p className="text-white/40 text-xs mb-6">We&apos;ll respond within 4 business hours.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: "firstName", label: "First name", placeholder: "Adebayo" },
                      { key: "lastName", label: "Last name", placeholder: "Okafor" },
                    ].map(({ key, label, placeholder }) => (
                      <div key={key} className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">{label}</label>
                        <input
                          required
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Email</label>
                      <input
                        required type="email" placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Phone</label>
                      <input
                        required type="tel" placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Service required</label>
                    <select
                      required value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-[#111827]">Select a service...</option>
                      {SERVICES.map((s) => <option key={s} value={s} className="bg-[#111827]">{s}</option>)}
                    </select>
                  </div>

                  {/* Budget + Property type row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Budget range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-[#111827]">Select...</option>
                        {BUDGETS.map((b) => <option key={b} value={b} className="bg-[#111827]">{b}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Property type</label>
                      <select
                        required value={form.propertyType}
                        onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-[#111827]">Select...</option>
                        {PROPERTY_TYPES.map((t) => <option key={t} value={t} className="bg-[#111827]">{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">City</label>
                    <select
                      required value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-[#111827]">Select city...</option>
                      {CITIES.map((c) => <option key={c} value={c} className="bg-[#111827]">{c}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us more about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a84c]/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 w-full bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-4 rounded-full hover:bg-[#b8963e] transition-colors"
                  >
                    SUBMIT REQUEST →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Social proof strip ── */}
      <div className="bg-[#f5f5f0] px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">

          {/* Testimonial card */}
          <div className="flex-1 bg-[#1a1a2e] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-xs font-bold text-white">AD</div>
                <div>
                  <p className="text-white font-bold text-sm">Alhaji Danjuma</p>
                  <p className="text-white/40 text-xs">Chairman, Pinnock Gardens</p>
                </div>
              </div>
              <span className="text-5xl font-serif text-[#c9a84c]/30 leading-none block mb-3">&ldquo;</span>
              <p className="text-white/80 text-sm leading-relaxed italic">
                Eshmart SmartTech transformed the security of our 80-unit estate. The installation was professional, the documentation thorough, and the maintenance team actually shows up within hours — not days.
              </p>
            </div>
            <div className="flex gap-0.5 mt-6">
              {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#c9a84c]">★</span>)}
            </div>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-5 justify-center md:w-72 shrink-0">
            {[
              { stat: "20+", label: "Years combined experience, delivering trusted and efficient security solutions." },
              { stat: "98%", label: "Customer satisfaction, proving our commitment to quality and service." },
              { stat: "500+", label: "Installations completed across Lagos & Abuja." },
            ].map((s) => (
              <div key={s.stat} className="flex items-start gap-4 bg-white rounded-2xl border border-black/8 p-5">
                <span className="text-3xl font-bold text-[#c9a84c] shrink-0 leading-none">{s.stat}</span>
                <p className="text-black/50 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="bg-white px-8 py-16 border-t border-black/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently asked questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-black/8 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-black/2 transition-colors"
                >
                  <span className="text-sm font-medium pr-4">{faq.q}</span>
                  <span className={`text-[#c9a84c] text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-black/60 leading-relaxed border-t border-black/6 pt-4 bg-black/1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom FAQ CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f5f5f0] rounded-2xl p-6">
            <div>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors"
              >
                BOOK FREE CONSULTATION →
              </Link>
            </div>
            <p className="text-black/40 text-sm text-center sm:text-right">
              Still have questions? We&apos;re here to help. Whether you&apos;re curious about installation, costs, or how our work, our team is ready to guide.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
