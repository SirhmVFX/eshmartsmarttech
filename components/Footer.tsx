import Link from "next/link";

const FOOTER_LINKS = {
  Products: [
    { label: "Biometric access control", href: "/products/biometric-access-control" },
    { label: "Remote gate systems", href: "/products/remote-gate-system" },
    { label: "CCTV surveillance", href: "/products/cctv-surveillance" },
    { label: "Smart home automation", href: "/products/smart-home-automation" },
    { label: "Intercom systems", href: "/products/video-intercom" },
    { label: "Electric fencing", href: "/products/electric-fencing" },
  ],
  Solutions: [
    { label: "Solar power systems", href: "/solar" },
    { label: "Estate packages", href: "/products" },
    { label: "Maintenance retainer", href: "/consultation" },
    { label: "Developer specification", href: "/consultation" },
    { label: "Corporate facilities", href: "/consultation" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Free consultation", href: "/consultation" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Get a quote", href: "/get-a-quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-brand flex items-center justify-center text-black font-bold text-sm" style={{ borderRadius: "var(--radius)" }}>E</span>
              <div className="leading-tight">
                <span className="block text-white font-semibold text-sm">Eshmart</span>
                <span className="block text-brand font-semibold text-sm">SmartTech</span>
              </div>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed mb-5">
              Nigeria&apos;s certified smart home automation and security specialists. Lagos &amp; Abuja.
            </p>
            <div className="space-y-1.5 text-xs text-white/40">
              <p>Lagos: +234 (0) 801 000 0001</p>
              <p>Abuja: +234 (0) 801 000 0002</p>
              <p>info@eshmartsmarttech.com</p>
              <p>WhatsApp: +234 (0) 801 000 0001</p>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-5">{title}</p>
              <ul className="space-y-3 text-sm text-white/50">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-brand transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© 2026 Eshmart SmartTech Ltd. All rights reserved.</p>
          <p>An Eshmart Group Holdings company</p>
        </div>
      </div>
    </footer>
  );
}
