"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ConsultationForm from "@/components/ConsultationForm";

const STEPS = [
  {
    n: "01",
    title: "Free site consultation",
    duration: "45 minutes",
    icon: "🏠",
    desc: "A certified Eshmart engineer visits your property at no cost. We walk every access point, camera angle, and perimeter — documenting your current setup and identifying gaps.",
    details: [
      "Full property walkthrough with our EEE-qualified engineer",
      "Assessment of existing security systems and infrastructure",
      "Identification of vulnerabilities and coverage gaps",
      "Discussion of your priorities, budget, and timeline",
      "No obligation — you receive a written summary regardless",
    ],
    outcome: "Written site assessment report delivered within 24 hours",
  },
  {
    n: "02",
    title: "Custom proposal",
    duration: "5 business days",
    icon: "📋",
    desc: "We prepare a detailed, fixed-price proposal covering every product, cable run, and installation task. No vague estimates — you know exactly what you're getting and what it costs.",
    details: [
      "Itemised bill of materials with brand and model specifications",
      "Detailed installation scope and methodology",
      "Fixed price — no hidden costs or variations",
      "Phased options if you want to start with priority areas",
      "Payment plan options available",
    ],
    outcome: "Fixed-price proposal with full scope of works",
  },
  {
    n: "03",
    title: "Professional installation",
    duration: "1–5 days depending on scope",
    icon: "⚙",
    desc: "Our EEE-qualified installation team arrives on the agreed date. Every cable is concealed, every device is tested, and every system is commissioned before we leave.",
    details: [
      "EEE-qualified lead engineer on every job",
      "All cabling concealed and neatly routed",
      "Full system commissioning and testing",
      "Integration of all devices into a single platform",
      "Site left clean — no mess, no damage",
    ],
    outcome: "Fully operational system, tested and commissioned",
  },
  {
    n: "04",
    title: "Handover & training",
    duration: "2–3 hours",
    icon: "🎓",
    desc: "We don't just install and leave. Every client receives a full handover session — we walk you through every system, every app, and every feature until you're confident.",
    details: [
      "On-site training for you and your team",
      "App setup on all your devices",
      "Full documentation package (as-built drawings, manuals, warranties)",
      "Emergency contact card for your maintenance team",
      "30-day post-installation support included",
    ],
    outcome: "Full documentation package + trained users",
  },
];

const HOW_WE_WORK = [
  {
    icon: "✦",
    title: "We only use EEE-qualified engineers",
    desc: "Every Eshmart installation is led by a certified electrical engineer. Not a technician, not a subcontractor — a qualified professional who takes responsibility for the work.",
  },
  {
    icon: "📐",
    title: "We design before we install",
    desc: "We produce detailed installation drawings before a single cable is run. This means no surprises, no rework, and a system that performs exactly as specified.",
  },
  {
    icon: "🔒",
    title: "We use Tier 1 products only",
    desc: "We don't cut corners on hardware. Every product we install is from a manufacturer we trust — with genuine warranties, local support, and proven performance in Nigerian conditions.",
  },
  {
    icon: "📄",
    title: "We document everything",
    desc: "Every installation comes with as-built drawings, equipment schedules, warranty certificates, and a maintenance log. You own the documentation — not us.",
  },
  {
    icon: "⚡",
    title: "We back it with a 24-hour SLA",
    desc: "Our maintenance retainer clients get a signed 24-hour emergency response commitment. If something fails, we're there — not in 3 days, not next week.",
  },
  {
    icon: "🤝",
    title: "We build long-term relationships",
    desc: "Most of our clients have been with us for years. We're not interested in one-off jobs — we want to be your security partner for the life of your property.",
  },
];

const FAQS = [
  { q: "How long does a typical installation take?", a: "It depends on the scope. A single-door access control installation takes 4–6 hours. A full estate with CCTV, gates, fencing, and solar typically takes 3–5 days. We'll give you a precise timeline in your proposal." },
  { q: "Do you work outside Lagos and Abuja?", a: "Our primary operations are in Lagos and Abuja. For large projects in other cities, we can mobilise a team — contact us to discuss." },
  { q: "What happens if something breaks after installation?", a: "All installations come with a 2-year warranty. Maintenance retainer clients also get a 24-hour emergency response SLA. We'll diagnose and resolve the issue — parts and labour included for warranty claims." },
  { q: "Can I get a quote without a site visit?", a: "For simple single-product installations, we can provide a ballpark figure remotely. For anything more complex, a site visit is essential — and it's free, so there's no reason not to." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment structures for larger projects. Typically a deposit on proposal acceptance, a progress payment at installation start, and the balance on completion." },
  { q: "Are your products compatible with what I already have?", a: "In most cases, yes. We assess compatibility during the free site survey and will tell you upfront if anything needs to be replaced or upgraded." },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />

      {/* Hero */}
      <div className="bg-[#0d1117] px-8 pb-16 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">How It Works</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
              From enquiry to installation —<br />
              <span className="text-[#c9a84c]">a process you can trust</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              No guesswork, no surprises. Every Eshmart project follows the same rigorous 4-step process — designed to deliver the right system, installed correctly, the first time.
            </p>
          </div>

          {/* Step indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {STEPS.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActiveStep(i)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${activeStep === i ? "bg-[#c9a84c]/10 border-[#c9a84c]/50" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
              >
                <span className={`text-xs font-bold tracking-widest ${activeStep === i ? "text-[#c9a84c]" : "text-white/30"}`}>{step.n}</span>
                <p className={`font-bold text-sm mt-1 ${activeStep === i ? "text-white" : "text-white/60"}`}>{step.title}</p>
                <p className={`text-xs mt-0.5 ${activeStep === i ? "text-white/50" : "text-white/30"}`}>{step.duration}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active step detail */}
      <div className="bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{STEPS[activeStep].icon}</span>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase">Step {STEPS[activeStep].n}</span>
                  <h2 className="text-2xl font-bold">{STEPS[activeStep].title}</h2>
                </div>
              </div>
              <p className="text-black/60 text-base leading-relaxed mb-8">{STEPS[activeStep].desc}</p>
              <ul className="space-y-3 mb-8">
                {STEPS[activeStep].details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-black/70">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-[#0d1117] rounded-2xl p-6 text-white">
                <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-3">Outcome</p>
                <p className="text-[#c9a84c] font-bold text-sm leading-relaxed mb-6">{STEPS[activeStep].outcome}</p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-white/40 text-xs mb-4">Ready to start your project?</p>
                  <Link href="/consultation" className="block text-center bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-5 py-3 rounded-full hover:bg-[#b8963e] transition-colors">
                    BOOK FREE CONSULTATION →
                  </Link>
                </div>
              </div>
              {/* Step nav */}
              <div className="flex gap-2 mt-4">
                <button onClick={() => setActiveStep((s) => Math.max(0, s - 1))} disabled={activeStep === 0} className="flex-1 py-2.5 rounded-xl border border-black/10 text-sm font-bold text-black/40 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">← Prev</button>
                <button onClick={() => setActiveStep((s) => Math.min(STEPS.length - 1, s + 1))} disabled={activeStep === STEPS.length - 1} className="flex-1 py-2.5 rounded-xl border border-black/10 text-sm font-bold text-black/40 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">Next →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="bg-[#f5f5f0] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">How We Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">The Eshmart standard</h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-sm md:text-right">
              Six principles that govern every project we take on — from a single door to a 200-unit estate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOW_WE_WORK.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-black/8 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-lg mb-5 group-hover:bg-[#c9a84c]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-2 group-hover:text-[#c9a84c] transition-colors">{item.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline visual */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Typical Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">From first call to live system</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#c9a84c]/20" />
            <div className="space-y-8">
              {[
                { day: "Day 1", event: "You contact us — we schedule your free site visit within 48 hours" },
                { day: "Day 2–3", event: "Free site consultation — our engineer visits, assesses, and documents" },
                { day: "Day 5–7", event: "You receive your fixed-price proposal with full scope of works" },
                { day: "Day 8", event: "Proposal accepted — installation date confirmed, materials ordered" },
                { day: "Day 10–14", event: "Installation begins — typically 1–5 days depending on scope" },
                { day: "Day 15+", event: "Handover, training, and documentation — your system is live" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center z-10 relative">
                      <span className="text-[#c9a84c] font-bold text-xs">{i + 1}</span>
                    </div>
                  </div>
                  <div className="pt-2.5">
                    <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-1">{item.day}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#f5f5f0] px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Common questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-black/8 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <span className={`text-[#c9a84c] text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-black/60 leading-relaxed border-t border-black/6 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
              <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Start Your Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Ready to take the<br />first step?
            </h2>
            <ul className="space-y-4">
              {["Free 45-minute on-site assessment", "Written proposal within 5 business days", "Fixed price — no hidden costs", "EEE-qualified engineers on every job", "2-year installation warranty"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-1 w-4 h-4 rounded-full border border-[#c9a84c]/50 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-[440px] bg-[#111827] border border-white/10 rounded-2xl p-7">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
