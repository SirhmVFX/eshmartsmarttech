"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import { FormInput, FormSelect, FormTextarea } from "@/components/Input";

const SERVICES = ["Biometric access control","CCTV & surveillance","Remote gate system","Smart home automation","Video intercom","Electric fencing","Solar power system","Full estate package","Not sure — need advice"];
const BUDGETS = ["Under ₦500,000","₦500K – ₦1M","₦1M – ₦3M","₦3M – ₦10M","₦10M+","Prefer not to say"];
const PROPERTY_TYPES = ["Private residence","Estate / compound","Office / commercial","Industrial / warehouse","Developer project","Other"];
const CITIES = ["Lagos","Abuja","Port Harcourt","Ibadan","Other"];

const FAQS = [
  { q: "Is the site survey really free?", a: "Yes — completely. Our engineer visits your property, assesses your needs, and provides a written report at no cost and with no obligation to proceed." },
  { q: "How quickly will I receive my quote?", a: "We deliver a fixed-price proposal within 5 business days of the site survey. For simple single-product installations, we can often turn it around faster." },
  { q: "What's included in the quote?", a: "Everything — equipment, cabling, installation labour, commissioning, and a 2-year warranty. No hidden costs, no variations." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment structures: a deposit on acceptance, a progress payment at installation start, and the balance on completion." },
  { q: "Can I get a quote for multiple products?", a: "Absolutely. Most of our clients install multiple systems together — we'll scope everything in a single proposal and identify any integration savings." },
];

export default function GetAQuotePage() {
  const [form, setForm] = useState({ firstName:"",lastName:"",email:"",phone:"",service:"",budget:"",propertyType:"",city:"",message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="min-h-screen bg-light font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]} />

      {/* Hero */}
      <div className="bg-dark px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1 pt-4">
            <div className="section-badge">
              <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Start a project!</h1>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">Let&apos;s discuss how we can provide the best smart security solution for your home or business.</p>

            <div className="space-y-5">
              {[
                { icon: "📞", label: "Call / WhatsApp", value: "+234 (0) 801 000 0001", href: "tel:+2348010000001" },
                { icon: "✉", label: "Email", value: "info@eshmartsmarttech.com", href: "mailto:info@eshmartsmarttech.com" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-(--color-primary-muted) border border-(--color-primary)/20 flex items-center justify-center text-brand group-hover:bg-(--color-primary)/20 transition-colors" style={{ borderRadius: "var(--radius)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-0.5">{c.label}</p>
                    <p className="text-white text-sm font-semibold group-hover:text-brand transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-(--color-primary-muted) border border-(--color-primary)/20 flex items-center justify-center text-brand" style={{ borderRadius: "var(--radius)" }}>📍</div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-0.5">Offices</p>
                  <p className="text-white text-sm font-semibold">Lagos &amp; Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              {[{ stat: "500+", label: "Installations" },{ stat: "2 yr", label: "Warranty" },{ stat: "24 hr", label: "Response SLA" }].map((s) => (
                <div key={s.stat}>
                  <p className="text-brand text-2xl font-bold">{s.stat}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-[500px] shrink-0 card-dark p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div className="w-16 h-16 bg-(--color-primary-muted) border border-(--color-primary)/40 flex items-center justify-center text-3xl" style={{ borderRadius: "var(--radius-2xl)" }}>✓</div>
                <h3 className="font-bold text-xl text-brand">Quote request received!</h3>
                <p className="text-white/50 text-sm max-w-xs leading-relaxed">Our team will review your requirements and get back to you within 4 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs text-white/30 hover:text-white/60 transition-colors mt-2">Submit another request</button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-white text-lg mb-1">Get your free quote</h2>
                <p className="text-white/40 text-xs mb-6">We&apos;ll respond within 4 business hours.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <FormInput label="First name" placeholder="Adebayo" required value={form.firstName} onChange={set("firstName")} />
                    <FormInput label="Last name" placeholder="Okafor" required value={form.lastName} onChange={set("lastName")} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <FormInput label="Email" type="email" placeholder="you@example.com" required value={form.email} onChange={set("email")} />
                    <FormInput label="Phone" type="tel" placeholder="+234 800 000 0000" required value={form.phone} onChange={set("phone")} />
                  </div>
                  <FormSelect label="Service required" required value={form.service} onChange={set("service")}>
                    <option value="" disabled className="bg-[#111827]">Select a service...</option>
                    {SERVICES.map((s) => <option key={s} value={s} className="bg-[#111827]">{s}</option>)}
                  </FormSelect>
                  <div className="grid grid-cols-2 gap-3">
                    <FormSelect label="Budget range" value={form.budget} onChange={set("budget")}>
                      <option value="" disabled className="bg-[#111827]">Select...</option>
                      {BUDGETS.map((b) => <option key={b} value={b} className="bg-[#111827]">{b}</option>)}
                    </FormSelect>
                    <FormSelect label="Property type" required value={form.propertyType} onChange={set("propertyType")}>
                      <option value="" disabled className="bg-[#111827]">Select...</option>
                      {PROPERTY_TYPES.map((t) => <option key={t} value={t} className="bg-[#111827]">{t}</option>)}
                    </FormSelect>
                  </div>
                  <FormSelect label="City" required value={form.city} onChange={set("city")}>
                    <option value="" disabled className="bg-[#111827]">Select city...</option>
                    {CITIES.map((c) => <option key={c} value={c} className="bg-[#111827]">{c}</option>)}
                  </FormSelect>
                  <FormTextarea label="Message" rows={3} placeholder="Tell us more about your project..." value={form.message} onChange={set("message")} />
                  <Button type="submit" fullWidth className="mt-1">SUBMIT REQUEST →</Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Social proof */}
      <div className="bg-light px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-deep p-8 flex flex-col justify-between" style={{ borderRadius: "var(--radius-2xl)" }}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-700 flex items-center justify-center text-xs font-bold text-white" style={{ borderRadius: "var(--radius-full)" }}>AD</div>
                <div><p className="text-white font-bold text-sm">Alhaji Danjuma</p><p className="text-white/40 text-xs">Chairman, Pinnock Gardens</p></div>
              </div>
              <span className="text-5xl font-serif text-(--color-primary)/30 leading-none block mb-3">&ldquo;</span>
              <p className="text-white/80 text-sm leading-relaxed italic">Eshmart SmartTech transformed the security of our 80-unit estate. The installation was professional, the documentation thorough, and the maintenance team actually shows up within hours — not days.</p>
            </div>
            <div className="flex gap-0.5 mt-6">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-brand">★</span>)}</div>
          </div>
          <div className="flex flex-col gap-5 justify-center md:w-72 shrink-0">
            {[{ stat: "20+", label: "Years combined experience, delivering trusted and efficient security solutions." },{ stat: "98%", label: "Customer satisfaction, proving our commitment to quality and service." },{ stat: "500+", label: "Installations completed across Lagos & Abuja." }].map((s) => (
              <div key={s.stat} className="card-light flex items-start gap-4 p-5">
                <span className="text-3xl font-bold text-brand shrink-0 leading-none">{s.stat}</span>
                <p className="text-black/50 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white px-8 py-16 border-t border-black/6">
        <div className="max-w-3xl mx-auto">
          <div className="section-badge"><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">FAQ</span></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently asked questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-black/8 overflow-hidden" style={{ borderRadius: "var(--radius-2xl)" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-black/2 transition-colors">
                  <span className="text-sm font-medium pr-4">{faq.q}</span>
                  <span className={`text-brand text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-sm text-black/60 leading-relaxed border-t border-black/6 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-light p-6" style={{ borderRadius: "var(--radius-2xl)" }}>
            <Button href="/consultation">BOOK FREE CONSULTATION →</Button>
            <p className="text-black/40 text-sm text-center sm:text-right">Still have questions? We&apos;re here to help. Our team is ready to guide.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
