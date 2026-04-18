"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

const ACCOUNT_LINKS = [
  { label: "Profile", href: "/account/profile", icon: "👤" },
  { label: "Orders", href: "/account/orders", icon: "📦" },
  { label: "Favourites", href: "/account/favourites", icon: "♡" },
  { label: "Settings", href: "/account/settings", icon: "⚙" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) router.push("/auth/sign-in");
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar */}
        <aside className="w-full md:w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-black/8 overflow-hidden">
            <div className="p-5 border-b border-black/8">
              <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] font-bold text-lg mb-3">
                {(user.displayName || user.email || "U")[0].toUpperCase()}
              </div>
              <p className="font-bold text-sm truncate">{user.displayName || "Account"}</p>
              <p className="text-black/40 text-xs truncate">{user.email}</p>
            </div>
            {ACCOUNT_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className={`flex items-center gap-3 px-5 py-3.5 text-sm border-b border-black/5 last:border-0 transition-colors ${pathname === link.href ? "bg-[#c9a84c]/8 text-[#c9a84c] font-semibold" : "text-black/60 hover:text-black hover:bg-black/3"}`}>
                <span>{link.icon}</span>{link.label}
              </Link>
            ))}
          </div>
        </aside>
        {/* Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
