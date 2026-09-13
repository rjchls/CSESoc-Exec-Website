type PhotoSlotProps = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  dark?: boolean;
};

/**
 * Placeholder for a real photo. Once you have the image, import it in the
 * parent component and pass it as `src` — the placeholder box is replaced
 * by the real <img> automatically.
 */
export default function PhotoSlot({ src, alt, label, className = "", dark = false }: PhotoSlotProps) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }

  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed p-4 text-center ${
        dark ? "border-paper/30 bg-paper/5" : "border-ink/30 bg-ink/5"
      } ${className}`}
    >
      <span
        className={`font-body text-xs uppercase tracking-wide ${
          dark ? "text-paper/50" : "text-ink/50"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
