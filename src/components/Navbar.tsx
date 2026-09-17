import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#why-execship", label: "Why Execship" },
  { href: "#visions", label: "Visions" },
];

// The hero/about handoff is driven by scroll position (position: fixed
// pinning + a transform that reacts to scrollY), so a native hash jump to
// #about races against that transform and lands wherever the animation
// happens to settle. Scroll straight to the pin's release point instead —
// that's exactly where the intro sits fully revealed at the top.
function scrollToAbout() {
  const hero = document.getElementById("hero-wrapper");
  if (!hero) return;
  const target = hero.offsetHeight - window.innerHeight;
  window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const hero = document.getElementById("hero-wrapper");
      if (!hero) return;
      const threshold = hero.offsetHeight - window.innerHeight;
      setShowHome(window.scrollY >= threshold - 10);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onScroll = () => setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    if (href === "#about") {
      e.preventDefault();
      scrollToAbout();
    }
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed top-5 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-[opacity,transform] duration-300 hover:scale-105 sm:top-6 sm:left-10"
        style={
          showHome
            ? { opacity: 1, transform: "translateY(0)", pointerEvents: "auto" }
            : { opacity: 0, transform: "translateY(-8px)", pointerEvents: "none" }
        }
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M3 11.5L12 4l9 7.5" />
          <path d="M5.5 9.5V20h13V9.5" />
        </svg>
      </button>

      <div ref={rootRef} className="fixed top-5 right-6 z-50 sm:top-6 sm:right-10">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5">
            <line x1="4" y1="7" x2="20" y2="7" className="origin-center transition-transform" style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }} />
            <line x1="4" y1="17" x2="20" y2="17" className="origin-center transition-transform" style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }} />
          </svg>
        </button>

        <div
          className="absolute top-full right-0 mt-3 w-52 origin-top-right rounded-lg bg-ink shadow-xl transition-all duration-200"
          style={
            open
              ? { opacity: 1, transform: "scale(1) translateY(0)", pointerEvents: "auto" }
              : { opacity: 0, transform: "scale(0.95) translateY(-8px)", pointerEvents: "none" }
          }
        >
          <div className="flex flex-col p-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick(link.href)}
                className="rounded-md px-4 py-3 font-body text-xs font-medium tracking-[0.15em] text-paper uppercase transition-colors hover:bg-paper/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
