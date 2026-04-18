"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "installation",
    icon: "⚙",
    tag: "Core service",
    title: "Supply & Installation",
    desc: "End-to-end supply and installation of all security and automation systems. Every job is led by an EEE-qualified engineer, commissioned on-site, and documented before handover.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    features: [
      "EEE-qualified lead engineer on every job",
      "All cabling concealed and neatly routed",
      "Full system commissioning and testing",
      "As-built drawings and documentation",
      "2-year installation warranty",
    ],
    cta: { label: "Get a quote", href: "/get-a-quote" },
  },
  {
    id: "maintenance",
    icon: "🔧",
    tag: "Ongoing",
    title: "Maintenance & Support",
    desc: "Signed maintenance retainers with a 24-hour emergency response SLA. Quarterly preventive visits, parts coverage, and priority scheduling — so your systems never fail when it matters.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    features: [
      "24-hour emergency response SLA",
      "Quarterly preventive maintenance visits",
      "Parts and labour coverage",
      "Priority scheduling over non-retainer clients",
      "Annual system health report",
    ],
    cta: { label: "Learn more", href: "/consultation" },
  },
  {
    id: "consultation",
    icon: "📋",
    tag: "Free",
    title: "Security Consultation",
    desc: "A free 45-minute on-site assessment by a certified engineer. We document your property, identify vulnerabilities, and deliver a written report — with no obligation to proceed.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    features: [
      "Full property walkthrough",
      "Gap analysis of existing systems",
      "Written assessment report within 24 hours",
      "No-obligation product recommendations",
      "Same-week appointments in Lagos & Abuja",
    ],
    cta: { label: "Book now — it's free", href: "/consultation" },
  },
  {
    id: "solar",
    icon: "☀",
    tag: "Specialist",
    title: "Solar Power Systems",
    desc: "Design, supply, and installation of complete solar systems — sized to keep your security infrastructure running 24/7, even during extended grid outages.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    features: [
      "Free energy audit and system sizing",
      "Tier 1 monocrystalline panels",
      "LiFePO4 battery storage",
      "Security system solar priority circuit",
      "Remote monitoring via Eshmart app",
    ],
    cta: { label: "Get a solar quote", href: "/get-a-quote" },
  },
  {
    id: "estate",
    icon: "🏘",
    tag: "Developer",
    title: "Estate & Developer Packages",
    desc: "Turnkey security specification for residential developments, gated estates, and commercial campuses. We work directly with developers from design stage through to resident handover.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    features: [
      "Design-stage security specification",
      "Full-estate CCTV, access, and gate systems",
      "Resident app and management portal",
      "Phased installation to match build programme",
      "Residents' association retainer available",
    ],
    cta: { label: "Discuss your project", href: "/consultation" },
  },
  {
    id: "upgrade",
    icon: "⬆",
    tag: "Existing systems",
    title: "System Upgrades & Integration",
    desc: "Already have security systems that aren't performing? We assess, upgrade, and integrate existing infrastructure — bringing legacy systems up to modern standards without full replacement.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    features: [
      "Compatibility assessment of existing systems",
      "Firmware and software upgrades",
      "Integration into unified platform",
      "Camera and sensor additions",
      "Migration to cloud or hybrid storage",
    ],
    cta: { label: "Book an assessment", href: "/consultation" },
  },
];

const STATS = [
  { value: "500+", label: "Installations completed" },
  { value: "24 hr", label: "Emergency response SLA" },
  { value: "2 yr", label: "Installation warranty" },
  { value: "98%", label: "Client satisfaction rate" },
];

const TESTIMONIALS = [
  { initials: "AD", color: "bg-amber-700", name: "Alhaji Danjuma", role: "Pinnock Gardens Estate, Lagos", quote: "Eshmart SmartTech transformed the security of our 80-unit estate. The maintenance team actually shows up within hours — not days." },
  { initials: "CO", color: "bg-teal-700", name: "Chisom Okonkwo", role: "LandWey Investment, Lagos", quote: "Their project coordination and technical quality set a new standard for what we expect from vendors. Specified across 120 units." },
  { initials: "FK", color: "bg-indigo-700", name: "Folake Kassim", role: "Private residence, Maitama, Abuja", quote: "The solar integration means we never lose security during power cuts. I can see everything from London on the app." },
];

const FAQS = [
  { q: "Do you service systems you didn't install?", a: "Yes. We can take over maintenance of existing systems after a compatibility assessment. We'll tell you upfront if anything needs upgrading." },
  { q: "What's included in a maintenance retainer?", a: "24-hour emergency response, quarterly preventive visits, parts and labour coverage, and an annual system health report. Pricing is based on the number and type of systems covered." },
  { q: "How quickly can you respond to an emergency?", a: "Retainer clients have a signed 24-hour SLA. In practice, most Lagos and Abuja callouts are resolved same-day." },
  { q: "Do you work on large commercial projects?", a: "Yes. We have experience on projects ranging from single residences to 200-unit estates and multi-floor commercial buildings. Contact us to discuss your scope." },
  { q: "Can you integrate with third-party systems?", a: "In most cases yes — we assess compatibility during the free consultation and will advise on any limitations before you commit." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      {/* ── Hero ── */}
      <div className="relative bg-[#0d1117] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1117] via-[#0d1117]/90 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
                <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                Providing world‑class<br />
                <span className="text-[#c9a84c]">security solutions</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                From a single door to a 200-unit estate — we design, install, and maintain smart security and automation systems that protect what matters most.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/get-a-quote" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">
                  GET A FREE QUOTE →
                </Link>
                <Link href="/consultation" className="border border-white/30 text-white font-bold text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                  BOOK CONSULTATION
                </Link>
              </div>
            </div>

            {/* Right: image collage */}
            <div className="w-full lg:w-[420px] shrink-0 grid grid-cols-2 gap-3 h-72">
              <div className="rounded-2xl overflow-hidden row-span-2">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Eshmart engineer" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Solar installation" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="CCTV system" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
            {STATS.map((s) => (
              <div key={s.value}>
                <p className="text-[#c9a84c] text-3xl font-bold">{s.value}</p>
                <p className="text-white/40 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services list ── */}
      <div className="bg-[#f5f5f0] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">What we do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We bring smart security<br />to every space
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-sm md:text-right">
              Six core services — each delivered to the same EEE-qualified standard, with the same 2-year warranty and 24-hour SLA.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {SERVICES.map((service, i) => {
              const isOpen = activeService === service.id;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl border border-black/8 overflow-hidden transition-all duration-300 ${isOpen ? "shadow-xl shadow-black/8" : "hover:shadow-md"}`}
                >
                  <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Image */}
                    <div className="relative w-full md:w-80 shrink-0 h-56 md:h-auto overflow-hidden bg-black/5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest bg-[#c9a84c] text-black px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-lg">
                            {service.icon}
                          </div>
                          <h3 className="font-bold text-xl">{service.title}</h3>
                        </div>
                        <p className="text-black/60 text-sm leading-relaxed mb-5">{service.desc}</p>

                        {/* Feature list — always visible */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-sm text-black/60">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-4">
                        <Link
                          href={service.cta.href}
                          className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors"
                        >
                          {service.cta.label.toUpperCase()} →
                        </Link>
                        <button
                          onClick={() => setActiveService(isOpen ? null : service.id)}
                          className="text-xs font-semibold text-black/40 hover:text-[#c9a84c] transition-colors"
                        >
                          {isOpen ? "Show less ↑" : "Learn more ↓"}
                        </button>
                      </div>

                      {/* Expanded detail */}
                      {isOpen && (
                        <div className="mt-6 pt-6 border-t border-black/8">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              { icon: "✦", label: "EEE-qualified engineers", desc: "Every job led by a certified electrical engineer." },
                              { icon: "🛡", label: "2-year warranty", desc: "Full parts and labour warranty on all installations." },
                              { icon: "⚡", label: "24hr SLA", desc: "Emergency response within 24 hours for retainer clients." },
                            ].map((b) => (
                              <div key={b.label} className="bg-[#f5f5f0] rounded-xl p-4">
                                <span className="text-lg block mb-2">{b.icon}</span>
                                <p className="font-bold text-xs mb-1">{b.label}</p>
                                <p className="text-black/40 text-xs">{b.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Why choose Eshmart ── */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Why choose us</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The Eshmart difference
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm md:text-right">
              We are the only mid-market security installer in Nigeria led by an EEE-qualified engineer with an MBA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🎓", title: "EEE-qualified leadership", desc: "Our lead engineer holds an EEE qualification and an MBA — every system is engineered correctly and every contract is governed professionally." },
              { icon: "📐", title: "Design before installation", desc: "We produce detailed installation drawings before a single cable is run. No surprises, no rework." },
              { icon: "🔒", title: "Tier 1 products only", desc: "We don't cut corners on hardware. Every product carries genuine manufacturer warranties and proven Nigerian-climate performance." },
              { icon: "📄", title: "Full documentation", desc: "As-built drawings, equipment schedules, warranty certificates, and maintenance logs — you own the documentation." },
              { icon: "⚡", title: "24-hour SLA commitment", desc: "Signed, not just promised. Retainer clients get a contractual 24-hour emergency response guarantee." },
              { icon: "🤝", title: "Long-term partnerships", desc: "Most of our clients have been with us for years. We're your security partner for the life of your property." },
            ].map((item) => (
              <div key={item.title} className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black hover:border-white hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#c9a84c]/15 flex items-center justify-center text-lg mb-5 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-2 text-white group-hover:text-black transition-colors">{item.title}</h3>
                <p className="text-white/50 group-hover:text-black/60 text-sm leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="bg-[#f5f5f0] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
                <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Reviews from our clients</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">What our clients say</h2>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/5">
                <span className="text-[#00b67a] font-bold">★</span>
                <div>
                  <p className="text-xs font-bold leading-none">Trustpilot</p>
                  <p className="text-[10px] text-black/40 mt-0.5">4.8 RATING</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/5">
                <span className="font-bold text-sm">G</span>
                <div>
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#fbbc04] text-xs">★</span>)}</div>
                  <p className="text-[10px] text-black/40">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.initials} className="bg-white rounded-2xl border border-black/8 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-serif text-black/10 leading-none block mb-3">&ldquo;</span>
                <p className="text-sm leading-relaxed text-black/70 mb-6">{t.quote}</p>
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#c9a84c] text-sm">★</span>)}
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-black/6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${t.color}`}>{t.initials}</div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-black/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="bg-white px-8 py-20 border-t border-black/6">
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
                  <div className="px-6 pb-5 text-sm text-black/60 leading-relaxed border-t border-black/6 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
              <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Ready to get started?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Let&apos;s make it happen
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Book a free site assessment or get a quote today. Our engineers are available in Lagos and Abuja — same week appointments.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/get-a-quote" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[#b8963e] transition-colors text-center whitespace-nowrap">
              GET A FREE QUOTE →
            </Link>
            <Link href="/consultation" className="border border-white/20 text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-center whitespace-nowrap">
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
