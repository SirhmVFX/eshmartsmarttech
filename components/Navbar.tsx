"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Solar", href: "/solar" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Consultation", href: "/consultation" },
  { label: "About", href: "/about" },
];

type Props = {
  /** transparent = used inside hero sections with bg image behind */
  variant?: "solid" | "transparent";
};

export default function Navbar({ variant = "solid" }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const base =
    variant === "transparent"
      ? "relative z-10"
      : "bg-[#0d1117]";

  return (
    <nav className={`${base} px-8 py-5`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-md bg-[#c9a84c] flex items-center justify-center text-black font-bold text-sm">
            E
          </span>
          <div className="leading-tight">
            <span className="block text-white font-semibold text-sm">Eshmart</span>
            <span className="block text-[#c9a84c] font-semibold text-sm">SmartTech</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  active
                    ? "text-[#c9a84c] font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/get-a-quote"
          className="hidden md:flex items-center gap-2 bg-[#c9a84c] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b8963e] transition-colors"
        >
          Get a Quote →
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/10 mt-4 rounded-2xl mx-0 overflow-hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-4 text-sm border-b border-white/5 last:border-0 transition-colors ${
                  active ? "text-[#c9a84c] font-semibold bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="px-6 py-4">
            <Link
              href="/get-a-quote"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-5 py-3 rounded-full hover:bg-[#b8963e] transition-colors"
            >
              GET A FREE QUOTE →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
