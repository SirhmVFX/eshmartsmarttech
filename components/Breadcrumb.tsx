import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="bg-[#0d1117] px-8 pb-5">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-white/40">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-white/70 transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/70">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
