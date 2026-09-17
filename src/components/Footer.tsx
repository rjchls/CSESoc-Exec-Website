function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-cream px-6 py-10 text-center sm:px-10">
      <button
        onClick={scrollToTop}
        className="mx-auto mb-8 flex flex-col items-center gap-1.5 text-ink/70 transition-colors hover:text-accent"
      >
        <span className="-space-y-2 animate-bounce text-center leading-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mx-auto block h-4 w-5">
            <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mx-auto block h-4 w-5">
            <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="font-body text-sm font-semibold tracking-[0.3em] uppercase">Home!</span>
      </button>

      <p className="font-body text-xs font-bold tracking-[0.15em] text-ink/50 uppercase">
        Vote Ryne Echaluse — <span className="underline">Co-President</span> &amp;{" "}
        <span className="underline">VPE</span>, CSESoc 2027
      </p>
    </footer>
  );
}
