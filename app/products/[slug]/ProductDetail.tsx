"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

type Props = { product: Product; related: Product[] };

export default function ProductDetail({ product, related }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "faqs">("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { addToCart, toggleFavourite, isFavourite } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({ slug: product.slug, name: product.name, price: product.price, image: product.image, category: product.category });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Top: gallery + info */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Gallery */}
          <div className="w-full lg:w-[520px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden bg-black/5 aspect-video mb-3">
              <img
                src={product.gallery[imgIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest bg-[#c9a84c] text-black px-3 py-1.5 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`flex-1 rounded-xl overflow-hidden aspect-video border-2 transition-all duration-200 ${
                    i === imgIndex ? "border-[#c9a84c]" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#c9a84c] uppercase mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{product.name}</h1>
            <p className="text-black/60 text-base leading-relaxed mb-6">{product.longDesc}</p>

            {/* Price card */}
            <div className="bg-white rounded-2xl border border-black/8 p-5 mb-6">
              <p className="text-2xl font-bold text-[#c9a84c] mb-1">{product.price}</p>
              <p className="text-xs text-black/40 mb-4">{product.priceNote}</p>
              <div className="flex gap-3">
                <a href="#" className="flex-1 bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-3.5 rounded-full text-center hover:bg-[#b8963e] transition-colors">
                  GET A QUOTE →
                </a>
                <a href="#" className="flex-1 border border-black/15 text-black font-bold text-xs tracking-widest py-3.5 rounded-full text-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                  BOOK SITE SURVEY
                </a>
              </div>
              <div className="flex gap-3 mt-3">
                <button onClick={handleAddToCart}
                  className={`flex-1 font-bold text-xs tracking-widest py-3 rounded-full border transition-colors ${addedToCart ? "bg-green-500 border-green-500 text-white" : "border-black/15 text-black hover:border-[#c9a84c] hover:text-[#c9a84c]"}`}>
                  {addedToCart ? "✓ ADDED TO CART" : "ADD TO CART"}
                </button>
                <button onClick={() => toggleFavourite(product.slug)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg transition-colors ${isFavourite(product.slug) ? "bg-red-50 border-red-300 text-red-400" : "border-black/15 text-black/40 hover:border-red-300 hover:text-red-400"}`}>
                  {isFavourite(product.slug) ? "♥" : "♡"}
                </button>
              </div>            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: "✦", label: "EEE-qualified engineers" },
                { icon: "🛡", label: "2-year warranty" },
                { icon: "⚡", label: "24hr response SLA" },
              ].map((b) => (
                <div key={b.label} className="bg-white rounded-xl border border-black/8 p-3 text-center">
                  <span className="text-lg block mb-1">{b.icon}</span>
                  <p className="text-[10px] font-semibold text-black/50 leading-tight">{b.label}</p>
                </div>
              ))}
            </div>

            {/* Use cases */}
            <div>
              <p className="text-[10px] font-bold tracking-widest text-black/30 uppercase mb-3">Ideal for</p>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((u) => (
                  <span key={u} className="text-xs border border-black/10 text-black/50 px-3 py-1.5 rounded-full">
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-1 border-b border-black/10 mb-8">
            {(["overview", "specs", "faqs"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-bold capitalize transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-[#c9a84c] text-[#c9a84c]"
                    : "border-transparent text-black/40 hover:text-black"
                }`}
              >
                {tab === "faqs" ? "FAQs" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-5">What&apos;s included</h3>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-black/70">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0d1117] rounded-2xl p-8 text-white">
                <h3 className="font-bold text-lg mb-2">Our installation process</h3>
                <p className="text-white/50 text-sm mb-6">Every Eshmart installation follows a structured 4-step process.</p>
                {[
                  { n: "01", title: "Free site survey", desc: "We assess your property and document requirements at no cost." },
                  { n: "02", title: "Custom proposal", desc: "Detailed scope, pricing, and timeline within 5 business days." },
                  { n: "03", title: "Professional installation", desc: "EEE-qualified engineers install, commission, and test." },
                  { n: "04", title: "Handover & support", desc: "Full documentation, training, and 24hr SLA maintenance." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 mb-5 last:mb-0">
                    <span className="text-[#c9a84c] font-bold text-sm w-6 shrink-0">{step.n}</span>
                    <div>
                      <p className="font-bold text-sm">{step.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="max-w-2xl">
              <h3 className="font-bold text-lg mb-6">Technical specifications</h3>
              <div className="bg-white rounded-2xl border border-black/8 overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i !== product.specs.length - 1 ? "border-b border-black/6" : ""
                    }`}
                  >
                    <span className="text-sm text-black/50 font-medium">{spec.label}</span>
                    <span className="text-sm font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-black/35 mt-4">* Specifications may vary by model. Final spec confirmed at site survey.</p>
            </div>
          )}

          {activeTab === "faqs" && (
            <div className="max-w-2xl">
              <h3 className="font-bold text-lg mb-6">Frequently asked questions</h3>
              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-black/8 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="font-semibold text-sm pr-4">{faq.q}</span>
                      <span className={`text-[#c9a84c] text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                        +
                      </span>
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
          )}
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-2xl">Often installed together</h3>
              <Link href="/products" className="text-sm font-bold text-black/40 hover:text-[#c9a84c] transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className="group bg-white rounded-2xl border border-black/8 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden bg-black/5">
                    <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-semibold tracking-widest text-[#c9a84c] uppercase mb-1">{rp.category}</p>
                    <h4 className="font-bold text-sm mb-1 group-hover:text-[#c9a84c] transition-colors">{rp.name}</h4>
                    <p className="text-xs text-black/40">{rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#0d1117] rounded-2xl px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Ready to get started?</p>
              <h3 className="text-white text-2xl font-bold">Get a free quote for {product.name}</h3>
              <p className="text-white/50 text-sm mt-2">Our engineers will survey your property and provide a fixed-price proposal within 5 business days.</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a href="#" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[#b8963e] transition-colors text-center whitespace-nowrap">
                GET A FREE QUOTE →
              </a>
              <a href="tel:+2348010000001" className="border border-white/20 text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-center whitespace-nowrap">
                CALL +234 801 000 0001
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
