"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogApi, BlogPost } from "@/lib/firestore";

// Simple markdown renderer (no external deps)
function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-10 mb-5">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-black/5 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" class="w-full rounded-sm my-6" />')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#c9a84c] hover:underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 mb-1"><span class="w-1.5 h-1.5 rounded-sm bg-[#c9a84c] mt-2 shrink-0"></span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-1 my-4">$&</ul>')
    .replace(/^(?!<[h|u|l|i|c|s|a|p|b|e]).+$/gm, '<p class="mb-4 leading-relaxed text-black/70">$&</p>')
    .replace(/\n\n/g, '')
    .trim();
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogApi.getBySlug(slug).then(async p => {
      setPost(p);
      if (p) {
        const all = await blogApi.getPublished();
        setRelated(all.filter(r => r.id !== p.id && r.category === p.category).slice(0, 3));
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-20 text-center text-black/40">Loading...</div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-[#c9a84c] hover:underline">← Back to blog</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      <Navbar />

      {/* Cover image */}
      {post.coverImage && (
        <div className="w-full h-[420px] overflow-hidden bg-black/5">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-black/40 mb-8">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#c9a84c] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-black/60">{post.title}</span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm">{post.category}</span>
          <span className="text-xs text-black/40">{post.readTime} mins read</span>
          {post.publishedAt && <span className="text-xs text-black/40">{post.publishedAt}</span>}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">{post.title}</h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-8 mb-8 border-b border-black/8">
          {post.authorImage ? (
            <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-sm object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-sm bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] font-bold text-lg">{post.author.charAt(0)}</div>
          )}
          <div>
            <p className="font-semibold text-sm">{post.author}</p>
            <p className="text-xs text-black/40">Eshmart SmartTech</p>
          </div>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs border border-black/10 text-black/50 px-3 py-1 rounded-sm">{tag}</span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content || '') }} />

        {/* CTA */}
        <div className="mt-16 bg-[#0d1117] rounded-sm p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to secure your property?</h3>
          <p className="text-white/50 text-sm mb-6">Book a free site assessment with a certified Eshmart engineer.</p>
          <Link href="/consultation" className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#b8963e] transition-colors">
            BOOK FREE CONSULTATION →
          </Link>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="bg-white border-t border-black/6 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.id} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="bg-[#f5f5f0] rounded-sm border border-black/8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
                    {p.coverImage && <img src={p.coverImage} alt={p.title} className="w-full h-40 object-cover" />}
                    <div className="p-5">
                      <span className="inline-flex items-center bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm mb-3">{p.category}</span>
                      <h3 className="font-bold text-base leading-snug mb-2">{p.title}</h3>
                      <p className="text-xs text-black/40">{p.readTime} mins read · {p.author}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
