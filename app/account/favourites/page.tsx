"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/products";

export default function FavouritesPage() {
  const { favourites, toggleFavourite, addToCart } = useCart();
  const favProducts = PRODUCTS.filter((p) => favourites.includes(p.slug));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Favourites</h1>
      {favProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-black/8 p-16 text-center">
          <p className="text-5xl mb-4">♡</p>
          <h2 className="font-bold text-xl mb-2">No favourites yet</h2>
          <p className="text-black/40 text-sm mb-8">Save products you&apos;re interested in for easy access later.</p>
          <Link href="/products" className="bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">
            BROWSE PRODUCTS →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {favProducts.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl border border-black/8 overflow-hidden group">
              <div className="relative h-40 overflow-hidden bg-black/5">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button onClick={() => toggleFavourite(p.slug)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-red-400 hover:bg-white transition-colors text-sm">
                  ♥
                </button>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-semibold tracking-widest text-[#c9a84c] uppercase mb-1">{p.category}</p>
                <h3 className="font-bold text-sm mb-1">{p.name}</h3>
                <p className="text-[#c9a84c] font-bold text-sm mb-4">{p.price}</p>
                <div className="flex gap-2">
                  <Link href={`/products/${p.slug}`}
                    className="flex-1 text-center border border-black/15 text-black font-bold text-xs tracking-widest py-2.5 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                    VIEW
                  </Link>
                  <button onClick={() => addToCart({ slug: p.slug, name: p.name, price: p.price, image: p.image, category: p.category })}
                    className="flex-1 bg-[#c9a84c] text-black font-bold text-xs tracking-widest py-2.5 rounded-full hover:bg-[#b8963e] transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
