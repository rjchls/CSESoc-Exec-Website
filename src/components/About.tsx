import PhotoSlot from "./PhotoSlot";

type AboutProps = {
  progress: number;
};

export default function About({ progress }: AboutProps) {
  return (
    <section
      id="about"
      className="relative z-10 -mt-[100vh] grid w-full grid-cols-1 shadow-[0_-40px_60px_-20px_rgba(0,0,0,0.35)] md:grid-cols-2"
      style={{ transform: `translateY(${(1 - progress) * 100}vh)` }}
    >
      <div className="flex flex-col justify-center bg-ink px-6 py-20 text-paper sm:px-10 sm:py-24 md:py-28">
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-paper uppercase">
          Heya!!!
        </h2>

        <div className="mt-8 max-w-md space-y-6 font-body text-base leading-relaxed text-paper/85 sm:text-lg">
          <p>
            I'm Ryne (niche name right 😆) and I'm currently a second year
            studying Computer Science / Electrical Engineering !
          </p>
          <p>
            On top that, I'm also one of the current Socials Directors for
            CSESoc...
          </p>
          <p className="font-body text-lg font-bold text-accent sm:text-xl">
            and I am running for the roles Co-President and Vice President of Externals
          </p>
        </div>
      </div>

      <div className="relative min-h-[420px] bg-cream-dark md:min-h-0">
        <PhotoSlot
          alt="Ryne with friends"
          label="About photo — group/candid shot (replace in About.tsx)"
          className="h-full w-full"
        />
        <span className="absolute right-4 bottom-4 font-body text-sm font-semibold text-accent sm:right-6 sm:bottom-6">
          09
        </span>
      </div>
    </section>
  );
}
