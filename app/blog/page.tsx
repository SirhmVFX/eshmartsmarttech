"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogApi, BlogPost } from "@/lib/firestore";

const CATEGORIES = ["All", "Security", "Solar Energy", "Smart Home", "Access Control", "CCTV", "Gate Automation", "Industry News", "Tips & Guides"];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    blogApi.getPublished().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const featured = posts.find(p => p.isFeatured);
  const rest = filtered.filter(p => p.id !== featured?.id);

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0d1117] px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#c9a84c] rounded-sm" />
            <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Insights &amp; updates</h1>
          <p className="text-white/50 text-base max-w-xl">Expert guides, industry news, and practical advice on smart security, solar power, and home automation.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-sm border transition-all ${activeCategory === cat ? 'bg-[#c9a84c] border-[#c9a84c] text-black' : 'bg-white border-black/10 text-black/60 hover:border-[#c9a84c] hover:text-[#c9a84c]'}`}>
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-sm border border-black/8 overflow-hidden animate-pulse">
                <div className="h-52 bg-black/5" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-black/5 rounded w-1/3" />
                  <div className="h-6 bg-black/5 rounded" />
                  <div className="h-4 bg-black/5 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-black/40">
            <p className="text-lg font-semibold mb-2">No posts yet</p>
            <p className="text-sm">Check back soon for insights and updates.</p>
          </div>
        ) : (
          <>
            {/* Featured post (large) */}
            {featured && activeCategory === "All" && (
              <Link href={`/blog/${featured.slug}`} className="block mb-10 group" style={{ textDecoration: 'none' }}>
                <article className="bg-white rounded-sm border border-black/8 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full md:w-[480px] shrink-0 h-64 md:h-auto bg-black/5">
                    {featured.coverImage ? (
                      <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#c9a84c]/20 to-[#0d1117]/20" />
                    )}
                    <span className="absolute top-4 left-4 bg-[#c9a84c] text-black text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm">FEATURED</span>
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm">{featured.category}</span>
                        <span className="text-xs text-black/40">{featured.readTime} mins read</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-[#c9a84c] transition-colors">{featured.title}</h2>
                      <p className="text-black/50 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {featured.authorImage ? (
                        <img src={featured.authorImage} alt={featured.author} className="w-9 h-9 rounded-sm object-cover" />
                      ) : (
                        <div className="w-9 h-9 rounded-sm bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] font-bold text-sm">{featured.author.charAt(0)}</div>
                      )}
                      <div>
                        <p className="text-sm font-semibold">{featured.author}</p>
                        <p className="text-xs text-black/40">{featured.publishedAt || 'Recently published'}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="bg-white rounded-sm border border-black/8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden bg-black/5">
                      {post.coverImage ? (
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#c9a84c]/20 to-[#0d1117]/20 flex items-center justify-center">
                          <span className="text-4xl opacity-30">📰</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm">{post.category}</span>
                        <span className="text-xs text-black/40">{post.readTime} mins read</span>
                      </div>
                      <h3 className="font-bold text-lg leading-snug mb-2 text-black">{post.title}</h3>
                      <p className="text-sm text-black/50 leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-black/6 mt-auto">
                        {post.authorImage ? (
                          <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-sm object-cover" />
                        ) : (
                          <div className="w-8 h-8 rounded-sm bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] font-bold text-xs">{post.author.charAt(0)}</div>
                        )}
                        <div>
                          <p className="text-xs font-semibold text-black">{post.author}</p>
                          <p className="text-[10px] text-black/40">{post.publishedAt || 'Recently published'}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
