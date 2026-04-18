"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Solar", href: "/solar" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Consultation", href: "/consultation" },
  { label: "About", href: "/about" },
];

type Props = { variant?: "solid" | "transparent" };

export default function Navbar({ variant = "solid" }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logOut } = useAuth();
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const base = variant === "transparent" ? "relative z-10" : "bg-dark";

  const handleLogOut = async () => {
    await logOut();
    setUserMenuOpen(false);
    router.push("/");
  };

  return (
    <nav className={`${base} px-8 py-5`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 bg-brand flex items-center justify-center text-black font-bold text-sm" style={{ borderRadius: "var(--radius)" }}>E</span>
          <div className="leading-tight">
            <span className="block text-white font-semibold text-sm">Eshmart</span>
            <span className="block text-brand font-semibold text-sm">SmartTech</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link key={link.href} href={link.href}
                className={`transition-colors whitespace-nowrap ${active ? "text-brand font-semibold" : "text-white/70 hover:text-white"}`}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Cart */}
          <Link href="/cart" className="relative p-2 text-white/70 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand text-black text-[10px] font-bold flex items-center justify-center" style={{ borderRadius: "var(--radius-full)" }}>
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          {/* Auth */}
          {user ? (
            <div className="relative">
              <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-(--color-primary-muted) border border-(--color-primary)/40 flex items-center justify-center text-brand font-bold text-xs" style={{ borderRadius: "var(--radius-full)" }}>
                  {(user.displayName || user.email || "U")[0].toUpperCase()}
                </div>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-darker border border-white/10 overflow-hidden shadow-xl z-50" style={{ borderRadius: "var(--radius-2xl)" }}>
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-white text-xs font-semibold truncate">{user.displayName || "Account"}</p>
                    <p className="text-white/40 text-[10px] truncate">{user.email}</p>
                  </div>
                  {[
                    { label: "My Profile", href: "/account/profile" },
                    { label: "My Orders", href: "/account/orders" },
                    { label: "Favourites", href: "/account/favourites" },
                    { label: "Settings", href: "/account/settings" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                  <button onClick={handleLogOut} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-white/5 transition-colors border-t border-white/10">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/sign-in" className="text-sm text-white/70 hover:text-white transition-colors font-medium">Sign in</Link>
          )}

          <Link href="/get-a-quote"
            className="btn btn-primary px-5 py-2.5 text-sm">
            Get a Quote →
          </Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/cart" className="relative p-1 text-white/70">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand text-black text-[10px] font-bold flex items-center justify-center" style={{ borderRadius: "var(--radius-full)" }}>{cartCount}</span>
            )}
          </Link>
          <button className="text-white p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-darker border-t border-white/10 mt-4 overflow-hidden" style={{ borderRadius: "var(--radius-2xl)" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block px-6 py-4 text-sm border-b border-white/5 last:border-0 transition-colors ${pathname === link.href ? "text-brand font-semibold bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4 flex flex-col gap-3">
            {user ? (
              <>
                <Link href="/account/profile" onClick={() => setMobileOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors">My Account</Link>
                <button onClick={() => { handleLogOut(); setMobileOpen(false); }} className="text-sm text-red-400 text-left">Sign out</button>
              </>
            ) : (
              <Link href="/auth/sign-in" onClick={() => setMobileOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors">Sign in</Link>
            )}
            <Link href="/get-a-quote" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full text-center">
              GET A FREE QUOTE →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
