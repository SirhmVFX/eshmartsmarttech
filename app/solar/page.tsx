"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialsSection from "@/components/TestimonialsSection";

const SYSTEM_SIZES = [3, 5, 8, 12, 20] as const;
type SystemSize = (typeof SYSTEM_SIZES)[number];
const SYSTEM_DATA: Record<SystemSize, { backup: number; saving: number; panels: number; price: string }> = {
  3:  { backup: 6,  saving: 90000,  panels: 6,  price: "From ₦900,000" },
  5:  { backup: 12, saving: 180000, panels: 10, price: "From ₦1,400,000" },
  8:  { backup: 18, saving: 270000, panels: 16, price: "From ₦2,100,000" },
  12: { backup: 24, saving: 390000, panels: 24, price: "From ₦3,000,000" },
  20: { backup: 36, saving: 600000, panels: 40, price: "From ₦4,800,000" },
};

const PACKAGES = [
  { name: "Security Essentials", size: "3 kW", desc: "Keeps your gate, CCTV, and access control running through any outage.", features: ["Gate motor priority circuit", "CCTV & NVR backup", "Access control backup", "6-hour battery duration"], price: "From ₦900,000", tag: "" },
  { name: "Home & Security", size: "5 kW", desc: "Full home backup — security, lighting, fans, and essential appliances.", features: ["All security systems", "Lighting & fans", "Fridge & TV", "12-hour battery duration"], price: "From ₦1,400,000", tag: "Most Popular" },
  { name: "Estate Package", size: "12 kW", desc: "Designed for gated estates and commercial properties with high security loads.", features: ["Full estate security systems", "Common area lighting", "Management office power", "24-hour battery duration"], price: "From ₦3,000,000", tag: "Best Value" },
];

const FAQS = [
  { q: "How long will the battery last at night?", a: "It depends on your load. Our free energy audit calculates exactly how many hours of backup you'll get based on your consumption." },
  { q: "Can I add more panels later?", a: "Yes. All our systems are designed to be expandable — you can add panels, batteries, or a second inverter as your needs grow." },
  { q: "What is the payback period?", a: "Most residential customers see full payback within 3–5 years based on current NEPA tariffs and diesel generator costs." },
  { q: "Do you handle AEDC/IKEDC grid connection paperwork?", a: "Yes. For grid-tied systems, we handle all the distribution company paperwork and net metering applications." },
  { q: "What battery chemistry do you use?", a: "We use Lithium-Iron Phosphate (LiFePO4) batteries — the safest, longest-lasting chemistry available, with 3,000+ charge cycles." },
];

export default function SolarPage() {
  const [size, setSize] = useState<SystemSize>(5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const data = useMemo(() => SYSTEM_DATA[size], [size]);

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Solar" }]} />

      {/* Hero */}
      <div className="relative bg-[#0d1117] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-linear-to-b from-[#0d1117]/50 to-[#0d1117]" />
        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Solar Power Solutions</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                Never lose power to<br />
                <span className="text-[#c9a84c]">your security systems</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                Keep every access point, camera, and gate fully operational — even during extended grid outages. We design, supply, and install complete solar systems for homes and estates.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/get-a-quote" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">GET A SOLAR QUOTE →</Link>
                <Link href="/consultation" className="border border-white/30 text-white font-bold text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">FREE ENERGY AUDIT</Link>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-72 shrink-0">
              {[
                { v: "Tier 1", l: "Monocrystalline panels" },
                { v: "LiFePO4", l: "Battery chemistry" },
                { v: "3,000+", l: "Charge cycles" },
                { v: "2 yr", l: "Installation warranty" },
              ].map((s) => (
                <div key={s.v} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-[#c9a84c] text-xl font-bold">{s.v}</p>
                  <p className="text-white/40 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simulator */}
      <div className="bg-[#0d1117] px-8 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
          {/* Simulator card */}
          <div className="w-full lg:w-[420px] shrink-0 bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-5">System Capacity Simulator</p>
            <div className="grid grid-cols-8 gap-1.5 mb-6">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className={`aspect-square rounded-sm transition-all duration-500 ${i < data.panels ? "bg-[#4a7c59] shadow-[0_0_6px_rgba(74,124,89,0.6)]" : "bg-white/5"}`} />
              ))}
            </div>
            <div className="flex items-end gap-6 mb-6 border-t border-white/10 pt-5">
              <div><p className="text-[#c9a84c] text-2xl font-bold">{size} kW</p><p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">Capacity</p></div>
              <div><p className="text-[#c9a84c] text-2xl font-bold">{data.backup} hr</p><p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">Backup</p></div>
              <div><p className="text-[#c9a84c] text-2xl font-bold">₦{(data.saving / 1000).toFixed(0)}K</p><p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">Annual saving</p></div>
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">System Size</p>
              <div className="flex gap-2">
                {SYSTEM_SIZES.map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${size === s ? "bg-[#c9a84c] text-black" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70"}`}>{s}kW</button>
                ))}
              </div>
              <div className="relative mt-3 h-1 bg-white/10 rounded-full">
                <div className="absolute top-0 h-1 bg-[#c9a84c] rounded-full transition-all duration-300" style={{ width: `${(SYSTEM_SIZES.indexOf(size) / (SYSTEM_SIZES.length - 1)) * 100}%` }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c9a84c] rounded-full border-2 border-[#0d1117] transition-all duration-300" style={{ left: `calc(${(SYSTEM_SIZES.indexOf(size) / (SYSTEM_SIZES.length - 1)) * 100}% - 6px)` }} />
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-white font-bold text-sm">{data.price}</p>
              <p className="text-white/40 text-xs mt-0.5 mb-4">Inclusive of installation. Final price after energy audit.</p>
              <Link href="/get-a-quote" className="block text-center bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-3 rounded-full hover:bg-[#b8963e] transition-colors">GET A QUOTE →</Link>
            </div>
          </div>

          {/* Features */}
          <div className="flex-1 flex flex-col gap-7 justify-center pt-4">
            {[
              { icon: "☀", title: "Solar panels & inverter systems", desc: "Tier 1 monocrystalline panels paired with hybrid inverters. Grid-tied, off-grid, and hybrid configurations available." },
              { icon: "⚡", title: "Battery storage solutions", desc: "Lithium-iron phosphate battery banks ensuring your security systems, lighting, and essential loads stay powered through the night." },
              { icon: "🛡", title: "Security system solar priority", desc: "Dedicated solar circuits that prioritise power to your gate motors, CCTV, and access control systems — always the last to go offline." },
              { icon: "📡", title: "Remote monitoring & management", desc: "Real-time solar generation, battery state, and consumption visible from the Eshmart SmartTech app." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:bg-[#c9a84c]/10 group-hover:border-[#c9a84c]/30 transition-colors">{f.icon}</div>
                <div><h4 className="font-bold text-sm text-white mb-1 group-hover:text-[#c9a84c] transition-colors">{f.title}</h4><p className="text-white/50 text-sm leading-relaxed">{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="bg-[#f5f5f0] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm" /><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Packages</span></div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-4xl font-bold">Solar packages for every need</h2>
            <p className="text-black/50 text-sm max-w-sm md:text-right">All packages include free energy audit, installation, commissioning, and 2-year warranty.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`bg-white rounded-2xl border p-7 relative ${pkg.tag ? "border-[#c9a84c]/40 shadow-lg shadow-[#c9a84c]/10" : "border-black/8"}`}>
                {pkg.tag && <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest bg-[#c9a84c] text-black px-2.5 py-1 rounded-full">{pkg.tag}</span>}
                <p className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase mb-2">{pkg.size}</p>
                <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                <p className="text-black/50 text-sm leading-relaxed mb-5">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-black/60"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />{f}</li>)}
                </ul>
                <p className="font-bold text-[#c9a84c] text-lg mb-4">{pkg.price}</p>
                <Link href="/get-a-quote" className="block text-center bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-3 rounded-full hover:bg-[#b8963e] transition-colors">GET A QUOTE →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSection bg="dark" />

      {/* FAQ */}
      <div className="bg-white px-8 py-20 border-t border-black/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm" /><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">FAQ</span></div>
          <h2 className="text-3xl font-bold mb-10">Solar questions answered</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-black/8 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-black/2 transition-colors">
                  <span className="text-sm font-medium pr-4">{faq.q}</span>
                  <span className={`text-[#c9a84c] text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-sm text-black/60 leading-relaxed border-t border-black/6 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to go solar?<br /><span className="text-[#c9a84c]">Let&apos;s make it happen.</span></h2>
            <p className="text-white/50 text-sm">Free energy audit. Fixed-price proposal. EEE-qualified installation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/get-a-quote" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[#b8963e] transition-colors text-center whitespace-nowrap">GET A SOLAR QUOTE →</Link>
            <Link href="/consultation" className="border border-white/20 text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-center whitespace-nowrap">FREE ENERGY AUDIT</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
