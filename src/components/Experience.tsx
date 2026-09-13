import Gallery from "./Gallery";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Experience
        </span>

        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-ink uppercase">
          Socials Subcom 2025
          <br />
          Socials Director 2026
        </h2>

        <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-ink/80 sm:text-lg">
          Being an active member of the Socials Subcommittee of CSESoc across
          the last 2 years has been THE single most rewarding experience I've
          had throughout my entire time at UNSW. I've been able to not only
          grow immensely as an individual, but also immerse myself amongst
          the broader Computer Science and Engineering community to help
          bring like-minded individuals together as a whole.
        </p>

        <div className="mt-14">
          <p className="mb-6 font-body text-sm font-medium tracking-[0.15em] text-ink/60 uppercase">
            Photos from my time in Socials
          </p>
          <Gallery />
        </div>
      </div>
    </section>
  );
}
