type Props = { label: string; dark?: boolean };

export default function SectionBadge({ label, dark = false }: Props) {
  return (
    <div className="section-badge mb-4">
      <span className={`text-xs font-semibold tracking-widest uppercase ${dark ? "text-white/50" : "text-black/50"}`}>
        {label}
      </span>
    </div>
  );
}
