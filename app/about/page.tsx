"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialsSection from "@/components/TestimonialsSection";

const VALUES = [
  { icon: "✦", title: "Technical excellence", desc: "Every system is designed and installed by EEE-qualified engineers. We don't cut corners on qualifications, products, or process." },
  { icon: "📄", title: "Radical transparency", desc: "Fixed prices, detailed scopes, full documentation. You always know exactly what you're getting and what it costs." },
  { icon: "🤝", title: "Long-term partnership", desc: "We're not interested in one-off jobs. We want to be your security partner for the life of your property." },
  { icon: "🛡", title: "Accountability", desc: "We back every installation with a signed 2-year warranty and a 24-hour emergency response SLA — in writing." },
  { icon: "🌍", title: "Nigerian-first design", desc: "Every system is specified for Nigerian conditions — power outages, climate, and infrastructure realities are built into every design." },
  { icon: "📊", title: "Continuous improvement", desc: "We invest in training, certifications, and technology so our clients always benefit from the latest and best solutions." },
];

const TEAM = [
  { name: "Emeka Okonkwo", role: "Founder & Lead Engineer", bio: "EEE-qualified electrical engineer with an MBA. 15+ years in security systems across Nigeria.", initials: "EO", color: "bg-amber-700" },
  { name: "Adaeze Nwosu", role: "Operations Director", bio: "Oversees project delivery, client relations, and our maintenance retainer programme.", initials: "AN", color: "bg-teal-700" },
  { name: "Chukwudi Eze", role: "Senior Installation Engineer", bio: "EEE-qualified with specialist expertise in biometric systems and solar integration.", initials: "CE", color: "bg-indigo-700" },
  { name: "Fatima Aliyu", role: "Business Development", bio: "Manages developer partnerships and estate specification projects across Lagos and Abuja.", initials: "FA", color: "bg-rose-700" },
  { name: "Tunde Adeyemi", role: "CCTV & Surveillance Lead", bio: "10+ years designing and installing HD surveillance systems for residential and commercial clients.", initials: "TA", color: "bg-purple-700" },
  { name: "Ngozi Obi", role: "Client Success Manager", bio: "Ensures every client receives full handover training and ongoing support after installation.", initials: "NO", color: "bg-cyan-700" },
];

const STATS = [
  { value: "500+", label: "Installations completed" },
  { value: "15+", label: "Years combined experience" },
  { value: "2", label: "Offices — Lagos & Abuja" },
  { value: "98%", label: "Client satisfaction rate" },
];

const FAQS = [
  { q: "Are you licensed and certified?", a: "Yes. Eshmart SmartTech is ISO 9001 certified, NCC licensed, and NIEEE registered. Our lead engineer holds an EEE qualification and an MBA." },
  { q: "How long have you been operating?", a: "We have been operating in Nigeria for over 10 years, with offices in Lagos and Abuja and a track record of 500+ successful installations." },
  { q: "Do you work with developers and estate managers?", a: "Yes. A significant portion of our work is developer specification — we work from design stage through to resident handover on residential developments." },
  { q: "What areas do you cover?", a: "Our primary operations are Lagos and Abuja. For large projects in other cities, we can mobilise a team — contact us to discuss." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

      {/* Hero */}
      <div className="relative bg-[#0d1117] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-linear-to-b from-[#0d1117]/60 to-[#0d1117]" />
        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl">
            Your trusted smart<br />
            <span className="text-[#c9a84c]">security partner</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mb-10">
            We are the only mid-market security installer in Nigeria led by an EEE-qualified engineer with an MBA — meaning every system we install is engineered correctly and every contract is governed professionally.
          </p>

          {/* Image collage */}
          <div className="grid grid-cols-3 gap-3 h-52">
            <div className="rounded-2xl overflow-hidden col-span-1">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Eshmart engineer" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-1">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Solar installation" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-1">
              <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="CCTV system" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
            {STATS.map((s) => (
              <div key={s.value}>
                <p className="text-[#c9a84c] text-3xl font-bold">{s.value}</p>
                <p className="text-white/40 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our story */}
      <div className="bg-[#f5f5f0] px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">
          <div className="w-full md:w-80 shrink-0 rounded-2xl overflow-hidden h-80">
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" alt="Eshmart story" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
              <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Built on a simple belief</h2>
            <div className="space-y-4 text-black/60 text-sm leading-relaxed">
              <p>Eshmart SmartTech was founded on a simple belief: that Nigerian homes, estates, and businesses deserve the same quality of smart security that is standard in developed markets — installed correctly, documented properly, and backed by real accountability.</p>
              <p>We saw too many properties with systems that were under-specified, poorly installed, and abandoned by vendors who disappeared after payment. We built Eshmart to be different.</p>
              <p>Every installation is led by an EEE-qualified engineer. Every job comes with as-built drawings, warranty certificates, and a maintenance log. Every client gets a signed 24-hour response SLA — not a promise, a contract.</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm">EO</div>
              <div>
                <p className="font-bold text-sm">Emeka Okonkwo</p>
                <p className="text-black/40 text-xs">Founder & Lead Engineer, Eshmart SmartTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white px-8 py-20 border-t border-black/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Our Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-[#f5f5f0] rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-lg mb-5 group-hover:bg-[#c9a84c]/20 transition-colors">{v.icon}</div>
                <h3 className="font-bold text-base mb-2">{v.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Our Team</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The amazing team<br />behind Eshmart</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm md:text-right">EEE-qualified engineers, experienced project managers, and dedicated client success specialists.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEAM.map((member) => (
              <div key={member.name} className="group text-center">
                <div className={`w-full aspect-square rounded-2xl ${member.color} flex items-center justify-center text-white font-bold text-2xl mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {member.initials}
                </div>
                <p className="font-bold text-white text-sm">{member.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-[#f5f5f0] px-8 py-16 border-t border-black/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">Delivering measurable impact</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {STATS.map((s) => (
              <div key={s.value} className="bg-white rounded-2xl border border-black/8 p-6 text-center">
                <p className="text-[#c9a84c] text-3xl font-bold">{s.value}</p>
                <p className="text-black/50 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Careers CTA */}
          <div className="relative rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80" alt="Join Eshmart" className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-[#0d1117]/70" />
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-10 py-8 gap-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-1">Looking to make a difference? Join us.</h3>
                <p className="text-white/60 text-sm">We&apos;re always looking for talented engineers and professionals.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href="mailto:careers@eshmartsmarttech.com" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors whitespace-nowrap">
                  VIEW OPENINGS →
                </a>
                <Link href="/contact" className="border border-white/30 text-white font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSection bg="light" />

      {/* FAQ */}
      <div className="bg-white px-8 py-20 border-t border-black/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold mb-10">Frequently asked questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-black/8 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-black/2 transition-colors">
                  <span className="text-sm font-medium pr-4">{faq.q}</span>
                  <span className={`text-[#c9a84c] text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-sm text-black/60 leading-relaxed border-t border-black/6 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#0d1117] px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to get started?<br /><span className="text-[#c9a84c]">Let&apos;s make it happen.</span></h2>
            <p className="text-white/50 text-sm">Free site assessment. Fixed-price proposal. EEE-qualified installation.</p>
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
