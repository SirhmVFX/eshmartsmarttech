"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

export default function Home() {
  return (
    <main className="bg-[#0d1117] text-white font-sans">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SolarSection />
      <HowItWorksSection />
      <ConsultationSection />
      <TestimonialsSection />
      <WhyUsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }} />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-[#0d1117]" />
      <Navbar variant="transparent" />
      <div className="relative z-10 flex flex-1 items-end">
        <div className="w-full px-8 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" />
              <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">Nigeria&apos;s Certified Smart Security Specialists</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
              Protect what<br />matters with{" "}
              <em className="not-italic text-[#c9a84c] italic font-bold">intelligent</em>
              <br />technology
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Professional installation of smart home automation, biometric access control, remote gate systems, CCTV, and solar power — backed by a signed 24-hour response SLA.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/consultation" className="flex items-center gap-2 bg-[#c9a84c] text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors">GET A FREE QUOTE →</Link>
              <Link href="/how-it-works" className="text-sm font-semibold text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">HOW IT WORKS</Link>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-amber-400", "bg-amber-600", "bg-yellow-300"].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0d1117] ${c}`} />
                ))}
              </div>
              <span className="text-white/50 text-sm">Trusted by 500+ homes across Lagos &amp; Abuja</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 min-w-[260px]">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />EEE-qualified technical team
            </div>
            {[
              { stat: "500+", desc: "Installations completed across Lagos & Abuja" },
              { stat: "24 hr", desc: "Guaranteed response SLA on all maintenance contracts" },
              { stat: "2 yr", desc: "Installation warranty — industry's strongest guarantee" },
            ].map(({ stat, desc }) => (
              <div key={stat} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-5 py-4">
                <p className="text-[#c9a84c] text-2xl font-bold mb-1">{stat}</p>
                <p className="text-white/60 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs text-white/40 tracking-widest uppercase">
          <span>• ISO 9001 Certified</span><span>• NCC Licensed Dealer</span>
          <span>• NIEEE Registered</span><span>• An Eshmart Group Holdings Company</span>
          <span>• Lagos &amp; Abuja Operations</span>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="bg-[#f5f5f0] text-black py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 h-[420px]">
          <div className="bg-[#1a1a2e] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-[#c9a84c] flex items-center justify-center text-black font-bold text-xs">E</span>
                <span className="text-[#c9a84c] font-semibold text-sm">Eshmart</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">&ldquo;<span className="text-[#c9a84c]">Eshmart</span> transformed our office security — zero incidents since installation.&rdquo;</p>
            </div>
            <button className="mt-4 self-start text-xs font-semibold border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Read Testimonials</button>
          </div>
          <div className="rounded-2xl overflow-hidden row-span-1">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Eshmart technician" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Smart home installation" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">Smart Security for<br />Homes &amp; Businesses</h2>
          <p className="text-black/60 text-base leading-relaxed mb-10 max-w-md">Our mission is simple — to help you protect what matters most with intelligent technology. From biometric access control to CCTV and solar power, we deliver certified installations backed by a signed 24-hour response SLA.</p>
          <Link href="/consultation" className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors">GET A FREE QUOTE →</Link>
        </div>
      </div>
    </section>
  );
}

// ─── Products preview ─────────────────────────────────────────────────────────
const HOME_PRODUCTS = [
  { id: "biometric", icon: "⬡", tag: "MOST POPULAR", name: "Biometric Access Control", href: "/products/biometric-access-control", desc: "Fingerprint, facial recognition, and card-based access systems for estates, offices, and residences.", features: ["Fingerprint & face recognition", "Smart card / fob integration", "Visitor management log", "Remote access management"] },
  { id: "gates", icon: "⊡", name: "Remote Swing & Slide Gates", href: "/products/remote-gate-system", desc: "Motorised gate automation with GSM remote control, allowing you to open your gate from anywhere.", features: ["GSM phone-call activation", "App-based remote control", "Battery backup on power outage", "Intercom integration"] },
  { id: "cctv", icon: "◎", name: "CCTV & Surveillance Systems", href: "/products/cctv-surveillance", desc: "HD and 4K camera systems with night vision, motion detection, and remote live-view from any device.", features: ["HD / 4K resolution cameras", "Night vision infrared", "Cloud & NVR storage options", "Mobile live-view app"] },
  { id: "smarthome", icon: "⌂", name: "Smart Home Automation", href: "/products/smart-home-automation", desc: "Full home automation integrating lighting, climate, entertainment, and security into one platform.", features: ["Centralised app control", "Smart lighting & climate", "Voice assistant integration", "Custom scene programming"] },
  { id: "intercom", icon: "☏", name: "Intercom & Video Door Systems", href: "/products/video-intercom", desc: "Video intercom systems allowing you to see and speak with visitors before granting access.", features: ["HD video door stations", "Multi-apartment support", "Mobile call forwarding", "Access log & recording"] },
  { id: "fencing", icon: "⊕", name: "Electric Fencing & Perimeter", href: "/products/electric-fencing", desc: "High-voltage deterrent perimeter systems with alarm integration and zoned monitoring.", features: ["10,000V deterrent fence", "Zoned alarm integration", "Live monitoring dashboard", "SABS-compliant installation"] },
];

function ProductsSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="bg-[#f5f5f0] text-black py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Our Product Range</span></div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">Complete security &amp;<br />automation solutions</h2>
          <div className="flex flex-col items-end gap-3">
            <p className="text-black/50 text-sm leading-relaxed max-w-xs md:text-right">Every product professionally installed, warranted for two years, and supported by our annual maintenance programme.</p>
            <Link href="/products" className="text-sm font-bold text-[#c9a84c] hover:underline">View all products →</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HOME_PRODUCTS.map((p) => {
            const highlight = active === p.id || hovered === p.id;
            return (
              <div key={p.id} onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)} onClick={() => setActive(active === p.id ? null : p.id)}
                className={`relative rounded-2xl border p-6 cursor-pointer transition-all duration-300 overflow-hidden ${highlight ? "bg-[#1a1a2e] border-[#c9a84c] text-white shadow-xl shadow-[#c9a84c]/10 -translate-y-1" : "bg-white border-black/8 text-black hover:border-[#c9a84c]/40"}`}>
                {p.tag && <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest bg-[#c9a84c] text-black px-2.5 py-1 rounded-full">{p.tag}</span>}
                <div className={`absolute inset-0 bg-linear-to-br from-[#c9a84c]/5 to-transparent rounded-2xl transition-opacity duration-300 ${highlight ? "opacity-100" : "opacity-0"}`} />
                <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 transition-colors duration-300 ${highlight ? "bg-[#c9a84c]/20 text-[#c9a84c]" : "bg-black/5 text-black/40"}`}>{p.icon}</div>
                <h3 className={`relative font-bold text-base mb-2 transition-colors duration-300 ${highlight ? "text-white" : "text-black"}`}>{p.name}</h3>
                <p className={`relative text-sm leading-relaxed mb-4 transition-colors duration-300 ${highlight ? "text-white/60" : "text-black/50"}`}>{p.desc}</p>
                <ul className={`relative space-y-1.5 mb-5 overflow-hidden transition-all duration-300 ${highlight ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  {p.features.map((f) => <li key={f} className="flex items-center gap-2 text-xs text-white/70"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />{f}</li>)}
                </ul>
                <Link href={p.href} onClick={(e) => e.stopPropagation()}
                  className={`relative inline-flex items-center gap-2 text-xs font-bold tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 ${highlight ? "bg-[#c9a84c] border-[#c9a84c] text-black hover:bg-[#b8963e]" : "border-black/20 text-black/60 hover:border-[#c9a84c] hover:text-[#c9a84c]"}`}>
                  GET A QUOTE →
                </Link>
              </div>
            );
          })}
        </div>
        <p className="text-center text-black/40 text-xs mt-10 tracking-wide">Hover or tap a product to explore features</p>
      </div>
    </section>
  );
}

// ─── Solar ────────────────────────────────────────────────────────────────────
const SYSTEM_SIZES = [3, 5, 8, 12, 20] as const;
type SystemSize = (typeof SYSTEM_SIZES)[number];
const SYSTEM_DATA: Record<SystemSize, { backup: number; saving: number; panels: number }> = {
  3: { backup: 6, saving: 90000, panels: 6 },
  5: { backup: 12, saving: 180000, panels: 10 },
  8: { backup: 18, saving: 270000, panels: 16 },
  12: { backup: 24, saving: 390000, panels: 24 },
  20: { backup: 36, saving: 600000, panels: 40 },
};
const SOLAR_FEATURES = [
  { icon: "☀", title: "Solar panels & inverter systems", desc: "Tier 1 monocrystalline panels paired with hybrid inverters. Grid-tied, off-grid, and hybrid configurations available." },
  { icon: "⚡", title: "Battery storage solutions", desc: "Lithium-iron phosphate battery banks ensuring your security systems, lighting, and essential loads stay powered through the night." },
  { icon: "🛡", title: "Security system solar priority", desc: "Dedicated solar circuits that prioritise power to your gate motors, CCTV, and access control systems — always the last to go offline." },
  { icon: "📡", title: "Remote monitoring & management", desc: "Real-time solar generation, battery state, and consumption visible from the Eshmart SmartTech app." },
];
function SolarSection() {
  const [size, setSize] = useState<SystemSize>(5);
  const data = useMemo(() => SYSTEM_DATA[size], [size]);
  return (
    <section className="bg-[#0d1117] text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Solar Power Solutions</span></div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Never lose power to your<br />security systems</h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm md:text-right">Keep every access point, camera, and gate fully operational — even during extended grid outages.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-[420px] shrink-0 bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-5">System Capacity Simulator</p>
            <div className="grid grid-cols-8 gap-1.5 mb-6">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className={`aspect-square rounded-sm transition-all duration-500 ${i < data.panels ? "bg-[#4a7c59] shadow-[0_0_6px_rgba(74,124,89,0.6)]" : "bg-white/5"}`} />
              ))}
            </div>
            <div className="flex items-end gap-6 mb-6 border-t border-white/10 pt-5">
              <div><p className="text-[#c9a84c] text-2xl font-bold">{size} kW</p><p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">System Capacity</p></div>
              <div><p className="text-[#c9a84c] text-2xl font-bold">{data.backup}</p><p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">hrs Backup</p></div>
              <div><p className="text-[#c9a84c] text-2xl font-bold">₦{(data.saving / 1000).toFixed(0)}K</p><p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">Est. Annual Saving</p></div>
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">System Size</p>
              <div className="flex items-center justify-between gap-2">
                {SYSTEM_SIZES.map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${size === s ? "bg-[#c9a84c] text-black" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70"}`}>{s} kW</button>
                ))}
              </div>
              <div className="relative mt-3 h-1 bg-white/10 rounded-full">
                <div className="absolute top-0 h-1 bg-[#c9a84c] rounded-full transition-all duration-300" style={{ width: `${(SYSTEM_SIZES.indexOf(size) / (SYSTEM_SIZES.length - 1)) * 100}%` }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c9a84c] rounded-full border-2 border-[#0d1117] transition-all duration-300" style={{ left: `calc(${(SYSTEM_SIZES.indexOf(size) / (SYSTEM_SIZES.length - 1)) * 100}% - 6px)` }} />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-7 justify-center">
            {SOLAR_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:bg-[#c9a84c]/10 group-hover:border-[#c9a84c]/30 transition-colors duration-300">{f.icon}</div>
                <div><h4 className="font-bold text-sm mb-1 group-hover:text-[#c9a84c] transition-colors duration-300">{f.title}</h4><p className="text-white/50 text-sm leading-relaxed">{f.desc}</p></div>
              </div>
            ))}
            <Link href="/products/solar-power-system" className="mt-4 self-start inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors">GET A SOLAR QUOTE →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works (homepage preview) ─────────────────────────────────────────
const STEPS = [
  { n: 1, title: "Free consultation", desc: "Book a 45-minute site visit. We assess your property, understand your needs, and document any existing system gaps — at no cost." },
  { n: 2, title: "Custom proposal", desc: "We deliver a detailed scope of work, product specifications, pricing, and installation timeline within 5 business days." },
  { n: 3, title: "Professional installation", desc: "Our EEE-qualified team installs to international standards. Every job is commissioned, tested, and documented before handover." },
  { n: 4, title: "Ongoing support", desc: "Sign a maintenance retainer for 24-hour emergency response, quarterly preventive visits, and parts coverage for complete peace of mind." },
];
function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section className="bg-[#f5f5f0] text-black py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">How It Works</span></div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2">From enquiry to installation in 4 steps</h2>
            <p className="text-black/50 text-base">A clear, professional process — no guesswork, no surprises.</p>
          </div>
          <Link href="/how-it-works" className="self-start md:self-end text-sm font-bold text-[#c9a84c] hover:underline shrink-0">See full process →</Link>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-[#c9a84c]/30" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map((step) => {
              const isActive = activeStep === step.n;
              return (
                <div key={step.n} className="flex flex-col items-center text-center cursor-pointer group" onClick={() => setActiveStep(isActive ? null : step.n)}>
                  <div className={`relative z-10 w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-bold mb-5 transition-all duration-300 ${isActive ? "bg-[#c9a84c] border-[#c9a84c] text-black scale-110 shadow-lg shadow-[#c9a84c]/30" : "bg-[#f5f5f0] border-[#c9a84c] text-[#c9a84c] group-hover:bg-[#c9a84c]/10"}`}>{step.n}</div>
                  <h3 className={`font-bold text-sm mb-2 transition-colors duration-300 ${isActive ? "text-[#c9a84c]" : "text-black"}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? "text-black/70 max-h-40" : "text-black/40 max-h-40 md:max-h-0 md:overflow-hidden md:opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:text-black/60"}`}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <Link href="/consultation" className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">BOOK FREE CONSULTATION →</Link>
        </div>
      </div>
    </section>
  );
}

// ─── Consultation ─────────────────────────────────────────────────────────────
function ConsultationSection() {
  return (
    <section id="consultation" className="bg-[#0d1117] text-white py-24 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Free Consultation</span></div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Speak with a certified<br />security engineer</h2>
          <ul className="space-y-4">
            {["45-minute on-site security assessment at no charge","Written gap analysis of your current systems","No-obligation product recommendations","Available in Lagos and Abuja — same week appointments","Conducted by EEE-qualified technical lead"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                <span className="mt-1 w-4 h-4 rounded-full border border-[#c9a84c]/50 flex items-center justify-center shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-[440px] bg-[#111827] border border-white/10 rounded-2xl p-7">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { id: "ad", initials: "AD", color: "bg-amber-700", name: "Alhaji Danjuma", role: "Chairman, Pinnock Gardens Residents Association, Lagos", quote: "Eshmart SmartTech transformed the security of our 80-unit estate. The installation was professional, the documentation thorough, and the maintenance team actually shows up within hours — not days.", stars: 5 },
  { id: "co", initials: "CO", color: "bg-teal-700", name: "Chisom Okonkwo", role: "Project Director, LandWey Investment, Lagos", quote: "As a developer, we specified Eshmart SmartTech across our latest 120-unit development in Lekki. Their project coordination and technical quality set a new standard for what we expect from vendors.", stars: 5 },
  { id: "fk", initials: "FK", color: "bg-indigo-700", name: "Folake Kassim", role: "Private residence, Maitama, Abuja", quote: "The solar integration with our gate and CCTV system means we never lose security during power cuts. The remote monitoring app is exceptional — I can see everything from London.", stars: 5 },
  { id: "bb", initials: "BB", color: "bg-rose-700", name: "Babatunde Bello", role: "Commercial Client, Victoria Island, Lagos", quote: "Our commercial installation was seamless. The team delivered on time, answered all our questions, and the security savings are real. Eshmart knows what they're doing.", stars: 5 },
];
function Stars({ count }: { count: number }) {
  return <div className="flex gap-0.5">{Array.from({ length: count }).map((_, i) => <span key={i} className="text-[#c9a84c] text-sm">★</span>)}</div>;
}
function TestimonialsSection() {
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);
  return (
    <section className="bg-[#f5f5f0] text-black py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Testimonials</span></div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Reviews from our clients</h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/5"><span className="text-[#00b67a] font-bold text-sm">★</span><div><p className="text-xs font-bold leading-none">Trustpilot</p><p className="text-[10px] text-black/40 mt-0.5">4.8 RATING</p></div></div>
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/5"><span className="text-lg">G</span><div><p className="text-[10px] text-black/40 leading-none">Google Rating</p><div className="flex gap-0.5 mt-0.5">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={`text-xs ${i < 4 ? "text-[#fbbc04]" : "text-[#fbbc04]/50"}`}>★</span>)}</div></div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1].map((idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-black/6 p-6 flex flex-col justify-between">
              <div><span className="text-4xl font-serif text-black/15 leading-none block mb-3">&ldquo;</span><p className="text-sm leading-relaxed text-black/70 mb-4">{TESTIMONIALS[idx].quote}</p><Stars count={TESTIMONIALS[idx].stars} /></div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${TESTIMONIALS[idx].color}`}>{TESTIMONIALS[idx].initials}</div>
                <div><p className="text-sm font-bold">{TESTIMONIALS[idx].name}</p><p className="text-xs text-black/40">{TESTIMONIALS[idx].role}</p></div>
              </div>
            </div>
          ))}
          <div className="relative rounded-2xl overflow-hidden row-span-2 min-h-64 cursor-pointer group" onClick={() => setVideoPlaying(videoPlaying === "v1" ? null : "v1")}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Video testimonial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4"><Stars count={5} /><p className="text-white font-bold text-sm mt-1">Kemi Adeyemi</p><p className="text-white/60 text-xs">Estate Manager, Lekki</p></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors"><span className="text-white text-lg ml-0.5">▶</span></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-56 cursor-pointer group" onClick={() => setVideoPlaying(videoPlaying === "v2" ? null : "v2")}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Video testimonial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4"><Stars count={5} /><p className="text-white font-bold text-sm mt-1">Emeka Obi</p><p className="text-white/60 text-xs">Industrial Client</p></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors"><span className="text-white text-lg ml-0.5">▶</span></div>
          </div>
          {[2, 3].map((idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-black/6 p-6 flex flex-col justify-between">
              <div><span className="text-4xl font-serif text-black/15 leading-none block mb-3">&ldquo;</span><p className="text-sm leading-relaxed text-black/70 mb-4">{TESTIMONIALS[idx].quote}</p><Stars count={TESTIMONIALS[idx].stars} /></div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${TESTIMONIALS[idx].color}`}>{TESTIMONIALS[idx].initials}</div>
                <div><p className="text-sm font-bold">{TESTIMONIALS[idx].name}</p><p className="text-xs text-black/40">{TESTIMONIALS[idx].role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
const WHY_US = [
  { icon: "✦", title: "EEE-qualified engineers", desc: "Every installation is designed and overseen by a certified electrical engineer — not just a technician." },
  { icon: "⚙", title: "Premium technology", desc: "We partner with leading manufacturers to bring you the best access control, CCTV, solar, and automation systems." },
  { icon: "🛡", title: "Long-term protection", desc: "Our systems are designed to deter, detect, and respond — with a 2-year installation warranty on every job." },
  { icon: "◎", title: "End-to-end service", desc: "From consultation to installation and maintenance, we provide full-service solutions tailored to your property." },
  { icon: "₦", title: "Transparent pricing", desc: "Detailed scopes of work, fixed quotes, and flexible payment plans — no hidden costs, ever." },
  { icon: "📊", title: "Proven track record", desc: "500+ successful installations across Lagos and Abuja, serving residential estates, commercial offices, and developers." },
];
function WhyUsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative bg-[#0d1117] text-white py-24 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }} />
      <div className="absolute inset-0 bg-linear-to-b from-[#0d1117]/80 to-[#0d1117]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Why Us</span></div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why choose Eshmart<br />SmartTech?</h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm md:text-right">We take pride in delivering high-quality, future-proof smart security and automation solutions. With years of experience and a team of certified engineers, we set the standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_US.map((item, i) => (
            <div key={item.title} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              className={`rounded-2xl border p-7 transition-all duration-300 cursor-default ${hovered === i ? "bg-white text-black border-white shadow-xl shadow-white/5 -translate-y-1" : "bg-white/5 border-white/10 text-white"}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-6 transition-colors duration-300 ${hovered === i ? "bg-[#c9a84c]/15 text-[#c9a84c]" : "bg-white/10 text-white/50"}`}>{item.icon}</div>
              <h3 className={`font-bold text-base mb-2 transition-colors duration-300 ${hovered === i ? "text-black" : "text-white"}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${hovered === i ? "text-black/60" : "text-white/50"}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: "pinnock", name: "Pinnock Gardens Estate", desc: "Full-estate security overhaul for an 80-unit gated community in Lekki — biometric access, CCTV, electric fencing, and solar backup integrated into a single managed platform.", tags: ["Biometric access", "CCTV", "Electric fencing", "Solar backup"], stats: [{ label: "Units secured", value: "80" }, { label: "Cameras installed", value: "64" }, { label: "Solar capacity", value: "20 kW" }, { label: "Response SLA", value: "24 hr" }, { label: "Warranty", value: "2 years" }, { label: "Completion", value: "18 days" }], images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
  { id: "landwey", name: "LandWey 120-Unit Development", desc: "Developer specification project across a 120-unit residential development in Lekki Phase 1 — remote gate systems, video intercom, and centralised smart home automation.", tags: ["Remote gates", "Video intercom", "Smart home", "CCTV"], stats: [{ label: "Units covered", value: "120" }, { label: "Gate systems", value: "6" }, { label: "Intercom stations", value: "120" }, { label: "Response SLA", value: "24 hr" }, { label: "Warranty", value: "2 years" }, { label: "Completion", value: "32 days" }], images: ["https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"] },
  { id: "maitama", name: "Maitama Private Residence", desc: "High-spec smart home installation for a private residence in Maitama, Abuja — full solar integration, biometric entry, CCTV with remote monitoring, and voice-controlled automation.", tags: ["Solar power", "Biometric access", "Smart home", "Remote monitoring"], stats: [{ label: "Solar capacity", value: "8 kW" }, { label: "Backup duration", value: "18 hr" }, { label: "Cameras", value: "12" }, { label: "Annual saving", value: "₦270K" }, { label: "Warranty", value: "2 years" }, { label: "Completion", value: "10 days" }], images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
];
function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="bg-white rounded-2xl border border-black/8 overflow-hidden flex flex-col md:flex-row">
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-black/50 text-sm leading-relaxed mb-5">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-7">{project.tags.map((tag) => <span key={tag} className="flex items-center gap-1.5 text-xs text-black/50 border border-black/10 rounded-full px-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />{tag}</span>)}</div>
          <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase mb-3">Result</p>
          <div className="grid grid-cols-3 gap-px bg-black/8 rounded-xl overflow-hidden border border-black/8">
            {project.stats.map((s) => <div key={s.label} className="bg-white px-4 py-3"><p className="text-[10px] text-black/35 uppercase tracking-widest mb-0.5">{s.label}</p><p className="font-bold text-sm">{s.value}</p></div>)}
          </div>
        </div>
        <a href="#" className="mt-7 self-start inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors">VIEW PROJECT →</a>
      </div>
      <div className="relative w-full md:w-[420px] shrink-0 min-h-64 bg-black/5">
        <img src={project.images[imgIndex]} alt={project.name} className="w-full h-full object-cover" />
        <button onClick={() => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors text-xs">‹</button>
        <button onClick={() => setImgIndex((i) => (i + 1) % project.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors text-xs">›</button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {project.images.map((_, i) => <button key={i} onClick={() => setImgIndex(i)} className={`rounded-full transition-all duration-200 ${i === imgIndex ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />)}
        </div>
      </div>
    </div>
  );
}
function ProjectsSection() {
  return (
    <section className="bg-[#f5f5f0] text-black py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4"><span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" /><span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Projects</span></div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">We secure every type<br />of property</h2>
          </div>
          <a href="#" className="self-start md:self-end text-sm font-bold text-black/50 hover:text-[#c9a84c] transition-colors">VIEW ALL PROJECTS →</a>
        </div>
        <div className="flex flex-col gap-6">{PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
      </div>
    </section>
  );
}
