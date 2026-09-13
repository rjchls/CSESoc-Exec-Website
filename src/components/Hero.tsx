import { useEffect, useRef, useState } from "react";
import heroPhoto from "../assets/photos/hero.jpg";
import PhotoSlot from "./PhotoSlot";
import Navbar from "./Navbar";

// Extra scroll distance (beyond one viewport height) the hero stays pinned
// for, while it blurs out and the next section slides up over it.
const PIN_VH = 55;

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [pin, setPin] = useState({ pinned: true, scrollable: 0 });

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrollable = Math.max(0, wrapper.offsetHeight - window.innerHeight);
      const y = window.scrollY;
      const raw = scrollable > 0 ? y / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
      setPin({ pinned: y < scrollable, scrollable });
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

  return (
    <div ref={wrapperRef} className="relative bg-ink" style={{ height: `calc(100vh + ${PIN_VH}vh)` }}>
      <section
        className="h-screen overflow-hidden bg-ink"
        style={
          pin.pinned
            ? { position: "fixed", top: 0, left: 0, right: 0 }
            : { position: "absolute", top: pin.scrollable, left: 0, right: 0 }
        }
      >
        {/* Photo, darken overlay, and headline blur/scale/drift together as one unit. */}
        <div
          className="absolute inset-0 flex h-full w-full items-end overflow-hidden"
          style={{
            filter: `blur(${progress * 7}px)`,
            transform: `scale(${1 + progress * 0.06}) translateY(${progress * 40}px)`,
          }}
        >
          <PhotoSlot
            src={heroPhoto}
            alt="Ryne Echaluse"
            label="Hero photo — portrait/landscape shot, full-bleed background (replace in Hero.tsx)"
            dark
            className="absolute inset-0 h-full w-full object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10"
            style={{ opacity: 0.55 + progress * 0.45 }}
          />

          <div className="relative z-10 w-full px-6 pb-10 sm:px-10 sm:pb-14">
            <h1 className="font-display leading-[0.85] text-paper uppercase">
              <span className="mb-[0.08em] block text-[clamp(3rem,13vw,10rem)]">Ryne</span>
              <span className="block text-[clamp(3rem,13vw,10rem)]">Echaluse</span>
            </h1>
            <p className="mt-4 font-body text-sm font-medium tracking-[0.2em] text-paper/90 uppercase sm:text-base">
              Vote me for Co-President and VPE
            </p>
          </div>
        </div>

        <Navbar />
      </section>
    </div>
  );
}
