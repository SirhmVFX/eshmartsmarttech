"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"default" | "name" | "category">("default");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "category") list.sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [search, activeCategory, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const hasFilters = search || activeCategory !== "All";

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      {/* Hero */}
      <div className="bg-[#0d1117] px-8 pb-14 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Our Product Range</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Complete security &amp;<br />automation solutions
            </h1>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Every product professionally installed, warranted for two years, and supported by our annual maintenance programme.
            </p>
          </div>
        </div>
      </div>

      {/* Body: sidebar + grid */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex gap-8 items-start">

        {/* ── Sidebar ── */}
        {/* Mobile toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden fixed bottom-6 right-6 z-30 bg-[#c9a84c] text-black font-bold text-xs px-5 py-3 rounded-full shadow-lg"
        >
          {sidebarOpen ? "✕ Close" : "⚙ Filters"}
        </button>

        {/* Sidebar panel */}
        <aside
          className={`
            fixed inset-0 z-20 bg-black/50 md:static md:bg-transparent md:z-auto
            transition-opacity duration-300
            ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"}
          `}
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className={`
              absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 overflow-y-auto
              md:static md:w-64 md:h-auto md:shadow-none md:rounded-2xl md:border md:border-black/8 md:p-6
              transition-transform duration-300
              ${sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-base">Filters</h2>
              {hasFilters && (
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="text-xs text-[#c9a84c] font-semibold hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Search */}
            <div className="mb-6">
              <p className="text-[10px] font-bold tracking-widest text-black/40 uppercase mb-3">Search</p>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-sm border border-black/10 rounded-xl bg-[#f5f5f0] focus:outline-none focus:border-[#c9a84c] transition-colors"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-black/30 hover:text-black text-xs">✕</button>
                )}
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <p className="text-[10px] font-bold tracking-widest text-black/40 uppercase mb-3">Category</p>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[#c9a84c]/10 text-[#c9a84c] font-semibold"
                        : "text-black/60 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-xs rounded-full px-2 py-0.5 ${
                      activeCategory === cat ? "bg-[#c9a84c] text-black font-bold" : "bg-black/8 text-black/40"
                    }`}>
                      {categoryCounts[cat] ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="mb-6">
              <p className="text-[10px] font-bold tracking-widest text-black/40 uppercase mb-3">Sort by</p>
              <div className="space-y-1">
                {[
                  { value: "default", label: "Default order" },
                  { value: "name", label: "Name (A–Z)" },
                  { value: "category", label: "Category" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSortBy(opt.value as typeof sortBy)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                      sortBy === opt.value
                        ? "bg-[#c9a84c]/10 text-[#c9a84c] font-semibold"
                        : "text-black/60 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      sortBy === opt.value ? "border-[#c9a84c]" : "border-black/20"
                    }`}>
                      {sortBy === opt.value && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0d1117] rounded-2xl p-5 text-white">
              <p className="font-bold text-sm mb-1">Not sure what you need?</p>
              <p className="text-white/50 text-xs mb-4 leading-relaxed">Book a free site assessment and let our engineers recommend the right solution.</p>
              <a href="#" className="block text-center bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-4 py-3 rounded-full hover:bg-[#b8963e] transition-colors">
                FREE CONSULTATION →
              </a>
            </div>
          </div>
        </aside>

        {/* ── Product grid ── */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-black/40">
              <span className="font-semibold text-black">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && <span> in <span className="text-[#c9a84c] font-semibold">{activeCategory}</span></span>}
              {search && <span> matching &ldquo;<span className="text-[#c9a84c] font-semibold">{search}</span>&rdquo;</span>}
            </p>
            {hasFilters && (
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="text-xs text-[#c9a84c] font-semibold hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border border-black/8">
              <p className="text-4xl mb-4">🔍</p>
              <p className="font-bold text-lg mb-2">No products found</p>
              <p className="text-black/40 text-sm mb-6">Try a different search term or category</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#b8963e] transition-colors"
              >
                VIEW ALL PRODUCTS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white rounded-2xl border border-black/8 overflow-hidden hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-black/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.tag && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest bg-[#c9a84c] text-black px-2.5 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 text-[10px] font-semibold bg-black/50 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-sm mb-1.5 group-hover:text-[#c9a84c] transition-colors leading-snug">{product.name}</h3>
                    <p className="text-black/50 text-xs leading-relaxed mb-4">{product.shortDesc}</p>

                    <ul className="space-y-1.5 mb-4">
                      {product.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-black/45">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-black/6">
                      <div>
                        <p className="font-bold text-sm text-[#c9a84c]">{product.price}</p>
                        <p className="text-[10px] text-black/30 mt-0.5">Incl. installation</p>
                      </div>
                      <span className="text-xs font-bold text-black/35 group-hover:text-[#c9a84c] transition-colors">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
