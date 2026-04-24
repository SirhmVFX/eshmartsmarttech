import { collection, doc, getDocs, getDoc, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

// ── Generic helpers ────────────────────────────────────────────────────────

async function getAll<T>(col: string): Promise<T[]> {
  const snap = await getDocs(collection(db, col));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as T));
}

async function getOne<T>(col: string, id: string): Promise<T | null> {
  const snap = await getDoc(doc(db, col, id));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as T) : null;
}

// ── Types (mirrors admin types) ────────────────────────────────────────────

export interface HeroSlide {
  id?: string;
  headline: string;
  subheadline: string;
  description: string;
  backgroundImage: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  badge: string;
  stats: { value: string; label: string }[];
  order: number;
  isActive: boolean;
}

export interface FirestoreProduct {
  id?: string;
  slug: string;
  name: string;
  category: string;
  tag?: string;
  shortDesc: string;
  longDesc: string;
  price: string;
  priceNote: string;
  image: string;
  gallery: string[];
  features: string[];
  specs: { label: string; value: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  inStock: boolean;
  isVisible: boolean;
  order: number;
}

export interface FirestoreTestimonial {
  id?: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
  initials: string;
  color: string;
  isVisible: boolean;
  order: number;
}

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  authorImage?: string;
  readTime: number;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt?: string;
}

export interface ThemeSettings {
  primaryColor: string;
  primaryHover: string;
  bgDark: string;
  bgLight: string;
  bgCard: string;
  fontFamily: string;
  borderRadius: string;
  activeTemplate: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  email: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  promoBarText: string;
  promoBarEnabled: boolean;
}

export interface SiteSection {
  key: string;
  data: Record<string, unknown>;
}

// ── APIs ───────────────────────────────────────────────────────────────────

export const heroSlidesApi = {
  getActive: async (): Promise<HeroSlide[]> => {
    const all = await getAll<HeroSlide>('heroSlides');
    return all.filter(s => s.isActive).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  },
};

export const productsApi = {
  getAll: async (): Promise<FirestoreProduct[]> => {
    const all = await getAll<FirestoreProduct>('products');
    return all.filter(p => p.isVisible).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  },
  getBySlug: async (slug: string): Promise<FirestoreProduct | null> => {
    const all = await getAll<FirestoreProduct>('products');
    return all.find(p => p.slug === slug) ?? null;
  },
};

export const testimonialsApi = {
  getVisible: async (): Promise<FirestoreTestimonial[]> => {
    const all = await getAll<FirestoreTestimonial>('testimonials');
    return all.filter(t => t.isVisible).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  },
};

export const blogApi = {
  getPublished: async (): Promise<BlogPost[]> => {
    const all = await getAll<BlogPost>('blog');
    return all.filter(p => p.isPublished).sort((a, b) => {
      const ad = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bd = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bd - ad;
    });
  },
  getBySlug: async (slug: string): Promise<BlogPost | null> => {
    const all = await getAll<BlogPost>('blog');
    return all.find(p => p.slug === slug && p.isPublished) ?? null;
  },
  getFeatured: async (count = 3): Promise<BlogPost[]> => {
    const all = await getAll<BlogPost>('blog');
    return all.filter(p => p.isPublished && p.isFeatured).slice(0, count);
  },
};

export const themeApi = {
  get: () => getOne<ThemeSettings>('config', 'theme'),
};

export const siteSettingsApi = {
  get: () => getOne<SiteSettings>('config', 'siteSettings'),
};

export const sectionsApi = {
  get: (key: string) => getOne<SiteSection>('sections', key),
};
