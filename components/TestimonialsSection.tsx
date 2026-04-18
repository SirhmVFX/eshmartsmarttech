import Link from "next/link";

const TESTIMONIALS = [
  { id: "ad", initials: "AD", color: "bg-amber-700", name: "Alhaji Danjuma", role: "Chairman, Pinnock Gardens Residents Association, Lagos", quote: "Eshmart SmartTech transformed the security of our 80-unit estate. The installation was professional, the documentation thorough, and the maintenance team actually shows up within hours — not days.", stars: 5 },
  { id: "co", initials: "CO", color: "bg-teal-700", name: "Chisom Okonkwo", role: "Project Director, LandWey Investment, Lagos", quote: "As a developer, we specified Eshmart SmartTech across our latest 120-unit development in Lekki. Their project coordination and technical quality set a new standard for what we expect from vendors.", stars: 5 },
  { id: "fk", initials: "FK", color: "bg-indigo-700", name: "Folake Kassim", role: "Private residence, Maitama, Abuja", quote: "The solar integration with our gate and CCTV system means we never lose security during power cuts. The remote monitoring app is exceptional — I can see everything from London.", stars: 5 },
  { id: "bb", initials: "BB", color: "bg-rose-700", name: "Babatunde Bello", role: "Commercial Client, Victoria Island, Lagos", quote: "Our commercial installation was seamless. The team delivered on time, answered all our questions, and the security savings are real. Eshmart knows what they're doing.", stars: 5 },
];

function Stars({ count }: { count: number }) {
  return <div className="flex gap-0.5">{Array.from({ length: count }).map((_, i) => <span key={i} className="text-[#c9a84c] text-sm">★</span>)}</div>;
}

type Props = { bg?: "light" | "dark" };

export default function TestimonialsSection({ bg = "light" }: Props) {
  const isLight = bg === "light";
  return (
    <section className={`px-8 py-20 ${isLight ? "bg-[#f5f5f0] text-black" : "bg-[#0d1117] text-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" />
              <span className={`text-xs font-semibold tracking-widest uppercase ${isLight ? "text-black/50" : "text-white/50"}`}>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Reviews from our clients</h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/5">
              <span className="text-[#00b67a] font-bold text-sm">★</span>
              <div><p className="text-xs font-bold leading-none text-black">Trustpilot</p><p className="text-[10px] text-black/40 mt-0.5">4.8 RATING</p></div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/5">
              <span className="font-bold text-sm text-black">G</span>
              <div>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#fbbc04] text-xs">★</span>)}</div>
                <p className="text-[10px] text-black/40">Google Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1].map((idx) => (
            <div key={idx} className={`rounded-2xl border p-6 flex flex-col justify-between ${isLight ? "bg-white border-black/6" : "bg-white/5 border-white/10"}`}>
              <div>
                <span className={`text-4xl font-serif leading-none block mb-3 ${isLight ? "text-black/15" : "text-white/15"}`}>&ldquo;</span>
                <p className={`text-sm leading-relaxed mb-4 ${isLight ? "text-black/70" : "text-white/70"}`}>{TESTIMONIALS[idx].quote}</p>
                <Stars count={TESTIMONIALS[idx].stars} />
              </div>
              <div className={`flex items-center gap-3 mt-6 pt-5 border-t ${isLight ? "border-black/6" : "border-white/10"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${TESTIMONIALS[idx].color}`}>{TESTIMONIALS[idx].initials}</div>
                <div>
                  <p className={`text-sm font-bold ${isLight ? "text-black" : "text-white"}`}>{TESTIMONIALS[idx].name}</p>
                  <p className={`text-xs ${isLight ? "text-black/40" : "text-white/40"}`}>{TESTIMONIALS[idx].role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Video card — spans 2 rows */}
          <div className="relative rounded-2xl overflow-hidden row-span-2 min-h-64 cursor-pointer group">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Video testimonial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4"><Stars count={5} /><p className="text-white font-bold text-sm mt-1">Kemi Adeyemi</p><p className="text-white/60 text-xs">Estate Manager, Lekki</p></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="text-white text-lg ml-0.5">▶</span>
            </div>
          </div>

          {/* Video card 2 */}
          <div className="relative rounded-2xl overflow-hidden min-h-56 cursor-pointer group">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Video testimonial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4"><Stars count={5} /><p className="text-white font-bold text-sm mt-1">Emeka Obi</p><p className="text-white/60 text-xs">Industrial Client</p></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="text-white text-lg ml-0.5">▶</span>
            </div>
          </div>

          {[2, 3].map((idx) => (
            <div key={idx} className={`rounded-2xl border p-6 flex flex-col justify-between ${isLight ? "bg-white border-black/6" : "bg-white/5 border-white/10"}`}>
              <div>
                <span className={`text-4xl font-serif leading-none block mb-3 ${isLight ? "text-black/15" : "text-white/15"}`}>&ldquo;</span>
                <p className={`text-sm leading-relaxed mb-4 ${isLight ? "text-black/70" : "text-white/70"}`}>{TESTIMONIALS[idx].quote}</p>
                <Stars count={TESTIMONIALS[idx].stars} />
              </div>
              <div className={`flex items-center gap-3 mt-6 pt-5 border-t ${isLight ? "border-black/6" : "border-white/10"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${TESTIMONIALS[idx].color}`}>{TESTIMONIALS[idx].initials}</div>
                <div>
                  <p className={`text-sm font-bold ${isLight ? "text-black" : "text-white"}`}>{TESTIMONIALS[idx].name}</p>
                  <p className={`text-xs ${isLight ? "text-black/40" : "text-white/40"}`}>{TESTIMONIALS[idx].role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold text-xs tracking-widest px-8 py-3.5 rounded-full hover:bg-[#b8963e] transition-colors">
            JOIN OUR CLIENTS →
          </Link>
        </div>
      </div>
    </section>
  );
}
