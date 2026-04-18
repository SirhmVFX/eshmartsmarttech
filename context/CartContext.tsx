"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";

export type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  category: string;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  favourites: string[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  toggleFavourite: (slug: string) => void;
  isFavourite: (slug: string) => boolean;
  cartCount: number;
  cartTotal: string;
};

const CartContext = createContext<CartContextType | null>(null);

// Local storage helpers for guests
const LS_CART = "eshmart_cart";
const LS_FAV = "eshmart_favourites";

function loadLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(localStorage.getItem(key) || "") ?? fallback; }
  catch { return fallback; }
}

function saveLocal(key: string, val: unknown) {
  if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(val));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);

  // Sync from Firestore when logged in, else localStorage
  useEffect(() => {
    if (!user) {
      setCart(loadLocal(LS_CART, []));
      setFavourites(loadLocal(LS_FAV, []));
      return;
    }
    const ref = doc(db, "users", user.uid);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setCart(snap.data().cart || []);
        setFavourites(snap.data().favourites || []);
      }
    });
    return unsub;
  }, [user]);

  const persist = async (newCart: CartItem[], newFavs: string[]) => {
    if (user) {
      await updateDoc(doc(db, "users", user.uid), { cart: newCart, favourites: newFavs });
    } else {
      saveLocal(LS_CART, newCart);
      saveLocal(LS_FAV, newFavs);
    }
  };

  const addToCart = (item: Omit<CartItem, "qty">) => {
    const existing = cart.find((c) => c.slug === item.slug);
    const newCart = existing
      ? cart.map((c) => c.slug === item.slug ? { ...c, qty: c.qty + 1 } : c)
      : [...cart, { ...item, qty: 1 }];
    setCart(newCart);
    persist(newCart, favourites);
  };

  const removeFromCart = (slug: string) => {
    const newCart = cart.filter((c) => c.slug !== slug);
    setCart(newCart);
    persist(newCart, favourites);
  };

  const updateQty = (slug: string, qty: number) => {
    if (qty < 1) return removeFromCart(slug);
    const newCart = cart.map((c) => c.slug === slug ? { ...c, qty } : c);
    setCart(newCart);
    persist(newCart, favourites);
  };

  const clearCart = () => {
    setCart([]);
    persist([], favourites);
  };

  const toggleFavourite = (slug: string) => {
    const newFavs = favourites.includes(slug)
      ? favourites.filter((f) => f !== slug)
      : [...favourites, slug];
    setFavourites(newFavs);
    persist(cart, newFavs);
  };

  const isFavourite = (slug: string) => favourites.includes(slug);

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  // Parse price strings like "From ₦350,000" → number
  const cartTotal = (() => {
    const total = cart.reduce((sum, c) => {
      const num = parseInt(c.price.replace(/[^\d]/g, ""), 10) || 0;
      return sum + num * c.qty;
    }, 0);
    return `₦${total.toLocaleString()}`;
  })();

  return (
    <CartContext.Provider value={{ cart, favourites, addToCart, removeFromCart, updateQty, clearCart, toggleFavourite, isFavourite, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
