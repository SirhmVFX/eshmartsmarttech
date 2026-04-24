"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
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

const LS_CART = "eshmart_cart";
const LS_FAV  = "eshmart_favourites";

function loadLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveLocal(key: string, val: unknown) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(val));
  }
}

async function firestoreRead(uid: string): Promise<{ cart: CartItem[]; favourites: string[] } | null> {
  try {
    const snap = await getDoc(doc(db, "users", uid));
    if (snap.exists()) {
      return { cart: snap.data().cart || [], favourites: snap.data().favourites || [] };
    }
    return null;
  } catch {
    return null; // permission-denied or network — fail silently
  }
}

async function firestoreWrite(uid: string, cart: CartItem[], favourites: string[]) {
  try {
    await setDoc(doc(db, "users", uid), { cart, favourites }, { merge: true });
  } catch {
    // fail silently — localStorage is the source of truth
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);
  const prevUid = useRef<string | null>(null);

  // On auth change: load from Firestore if logged in, else localStorage
  useEffect(() => {
    if (authLoading) return; // wait for auth to resolve

    if (!user) {
      // Logged out — load from localStorage
      setCart(loadLocal(LS_CART, []));
      setFavourites(loadLocal(LS_FAV, []));
      prevUid.current = null;
      return;
    }

    if (prevUid.current === user.uid) return; // same user, no reload needed
    prevUid.current = user.uid;

    // Logged in — try Firestore, fall back to localStorage
    firestoreRead(user.uid).then((data) => {
      if (data) {
        setCart(data.cart);
        setFavourites(data.favourites);
        // Also sync to localStorage as offline cache
        saveLocal(LS_CART, data.cart);
        saveLocal(LS_FAV, data.favourites);
      } else {
        // Doc doesn't exist yet — use localStorage values
        setCart(loadLocal(LS_CART, []));
        setFavourites(loadLocal(LS_FAV, []));
      }
    });
  }, [user, authLoading]);

  const persist = (newCart: CartItem[], newFavs: string[]) => {
    // Always save to localStorage immediately (no async wait)
    saveLocal(LS_CART, newCart);
    saveLocal(LS_FAV, newFavs);
    // Fire-and-forget Firestore sync if logged in
    if (user) {
      firestoreWrite(user.uid, newCart, newFavs);
    }
  };

  const addToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.slug === item.slug);
      const next = existing
        ? prev.map((c) => c.slug === item.slug ? { ...c, qty: c.qty + 1 } : c)
        : [...prev, { ...item, qty: 1 }];
      persist(next, favourites);
      return next;
    });
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => {
      const next = prev.filter((c) => c.slug !== slug);
      persist(next, favourites);
      return next;
    });
  };

  const updateQty = (slug: string, qty: number) => {
    if (qty < 1) { removeFromCart(slug); return; }
    setCart((prev) => {
      const next = prev.map((c) => c.slug === slug ? { ...c, qty } : c);
      persist(next, favourites);
      return next;
    });
  };

  const clearCart = () => {
    setCart([]);
    persist([], favourites);
  };

  const toggleFavourite = (slug: string) => {
    setFavourites((prev) => {
      const next = prev.includes(slug) ? prev.filter((f) => f !== slug) : [...prev, slug];
      persist(cart, next);
      return next;
    });
  };

  const isFavourite = (slug: string) => favourites.includes(slug);

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

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
