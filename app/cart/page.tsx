"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart, cartTotal, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your cart</h1>
            <p className="text-black/50 text-sm mt-1">{cartCount} item{cartCount !== 1 ? "s" : ""}</p>
          </div>
          {cart.length > 0 && (
            <button onClick={clearCart} className="text-xs text-red-400 font-semibold hover:underline">Clear cart</button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl border border-black/8 p-16 text-center">
            <p className="text-5xl mb-4">🛒</p>
            <h2 className="font-bold text-xl mb-2">Your cart is empty</h2>
            <p className="text-black/40 text-sm mb-8">Browse our products and add items to get started.</p>
            <Link href="/products" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">
              BROWSE PRODUCTS →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Items */}
            <div className="flex-1 flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.slug} className="bg-white rounded-2xl border border-black/8 p-5 flex gap-5 items-start">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-black/5 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold tracking-widest text-[#c9a84c] uppercase mb-0.5">{item.category}</p>
                    <h3 className="font-bold text-sm mb-1 leading-snug">{item.name}</h3>
                    <p className="text-[#c9a84c] font-bold text-sm">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <button onClick={() => removeFromCart(item.slug)} className="text-black/30 hover:text-red-400 transition-colors text-lg leading-none">×</button>
                    <div className="flex items-center gap-2 border border-black/10 rounded-xl overflow-hidden">
                      <button onClick={() => updateQty(item.slug, item.qty - 1)} className="w-8 h-8 flex items-center justify-center text-black/50 hover:bg-black/5 transition-colors font-bold">−</button>
                      <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                      <button onClick={() => updateQty(item.slug, item.qty + 1)} className="w-8 h-8 flex items-center justify-center text-black/50 hover:bg-black/5 transition-colors font-bold">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-white rounded-2xl border border-black/8 p-6 sticky top-24">
                <h3 className="font-bold text-base mb-5">Order summary</h3>
                <div className="space-y-3 mb-5">
                  {cart.map((item) => (
                    <div key={item.slug} className="flex items-center justify-between text-sm">
                      <span className="text-black/60 truncate pr-2">{item.name} ×{item.qty}</span>
                      <span className="font-semibold shrink-0">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-black/8 pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Estimated total</span>
                    <span className="font-bold text-[#c9a84c] text-lg">{cartTotal}</span>
                  </div>
                  <p className="text-black/40 text-xs mt-1">Final price confirmed after free site survey</p>
                </div>
                <Link href="/get-a-quote"
                  className="block text-center bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-4 rounded-full hover:bg-[#b8963e] transition-colors mb-3">
                  GET A QUOTE FOR THESE →
                </Link>
                <Link href="/consultation"
                  className="block text-center border border-black/15 text-black font-bold text-xs tracking-widest py-4 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                  BOOK FREE CONSULTATION
                </Link>
                <div className="mt-5 pt-5 border-t border-black/8 space-y-2">
                  {["EEE-qualified installation included", "2-year warranty on all products", "24hr response SLA available"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-black/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
