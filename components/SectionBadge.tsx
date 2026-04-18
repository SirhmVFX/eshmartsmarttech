type Props = {
  label: string;
  dark?: boolean;
};

export default function SectionBadge({ label, dark = false }: Props) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-[#c9a84c] rounded-sm inline-block" />
      <span className={`text-xs font-semibold tracking-widest uppercase ${dark ? "text-white/50" : "text-black/50"}`}>
        {label}
      </span>
    </div>
  );
}
