function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-cream px-6 py-14 text-center sm:px-10 sm:py-16">
      <p className="font-display text-[clamp(1.75rem,5vw,3rem)] leading-none text-ink uppercase">
        Vote Ryne Echaluse
      </p>
      <p className="mt-3 font-body text-xs font-semibold tracking-[0.2em] text-ink/70 uppercase sm:text-sm">
        <span className="underline decoration-accent decoration-2 underline-offset-4">Co-President</span>
        {" "}&amp;{" "}
        <span className="underline decoration-accent decoration-2 underline-offset-4">VPE</span>
        {" "}· CSESoc 2027
      </p>

      <button
        onClick={scrollToTop}
        className="mx-auto mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-ink px-6 py-2.5 font-body text-xs font-semibold tracking-[0.25em] text-ink uppercase transition-colors hover:bg-ink hover:text-cream"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Home!
      </button>
    </footer>
  );
}
