import type { RefObject } from "react";
import heroPhoto from "../assets/photos/hero.jpg";
import PhotoSlot from "./PhotoSlot";
import Navbar from "./Navbar";
import Typewriter from "./Typewriter";

// Extra scroll distance (beyond one viewport height) the hero stays pinned
// for, while it blurs out and the next section slides up over it.
export const PIN_VH = 55;

type HeroProps = {
  wrapperRef: RefObject<HTMLDivElement | null>;
  progress: number;
  pin: { pinned: boolean; scrollable: number };
};

export default function Hero({ wrapperRef, progress, pin }: HeroProps) {
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
              <Typewriter text="Vote me for Co-President and VPE" />
            </p>
          </div>
        </div>

        <Navbar />
      </section>
    </div>
  );
}
