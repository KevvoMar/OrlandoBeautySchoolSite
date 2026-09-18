import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/5]",
  rounded = "rounded-2xl",
  className = "",
}) {
  return (
    <div
      className={`flex ${aspect} ${rounded} w-full flex-col items-center justify-center gap-3 border border-primary/20 bg-bg-surface p-6 text-center ${className}`}
    >
      <ImageIcon className="h-7 w-7 text-primary-light" strokeWidth={1.5} />
      <p className="max-w-[220px] text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
        {label}
      </p>
    </div>
  );
}
