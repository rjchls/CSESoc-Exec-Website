import aboutPhoto from "../assets/photos/mtdcrop.jpg";
import PhotoSlot from "./PhotoSlot";

type AboutProps = {
  progress: number;
};

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
    </svg>
  );
}

export default function About({ progress }: AboutProps) {
  return (
    <section
      id="about"
      className="relative z-10 -mt-[calc(100vh+4px)] grid w-full grid-cols-1 md:grid-cols-2"
      style={{ transform: `translateY(${(1 - progress) * 100}vh)` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-ink via-ink/60 to-transparent sm:h-40" />
      <div className="relative flex flex-col justify-center overflow-hidden bg-ink px-6 py-20 text-paper sm:px-10 sm:py-24 md:py-28">
        <Sparkle className="pointer-events-none absolute top-10 left-8 h-5 w-5 text-accent/40 sm:top-14 sm:left-12" />
        <Sparkle className="pointer-events-none absolute top-24 right-10 h-3 w-3 text-paper/25 sm:top-28 sm:right-16" />
        <Sparkle className="pointer-events-none absolute right-12 bottom-16 h-8 w-8 text-accent/25 sm:right-20 sm:bottom-20" />
        <Sparkle className="pointer-events-none absolute bottom-10 left-14 h-4 w-4 text-paper/20 sm:bottom-14" />

        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-paper uppercase">
          Heya!!!
        </h2>

        <div className="mt-8 max-w-md space-y-6 font-body text-base leading-relaxed text-paper/85 sm:text-lg">
          <p>
            I'm Ryne (niche name right 😆) and I'm currently a second year
            studying Computer Science / Electrical Engineering !
          </p>
          <p>
            On top of that, I'm also one of the current Socials Directors for
            CSESoc...
          </p>
          <p className="font-body text-lg font-bold text-accent sm:text-xl">
            and I am running for Co-President and Vice President of Externals
          </p>
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden bg-cream-dark md:min-h-0">
        <PhotoSlot
          src={aboutPhoto}
          alt="Ryne with friends"
          label="About photo — group/candid shot (replace in About.tsx)"
          className="h-full w-full"
          style={{ objectPosition: "50% 64%" }}
        />
      </div>
    </section>
  );
}
