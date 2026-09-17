import PhotoSlot from "./PhotoSlot";
import c2s from "../assets/photos/c2s.jpg";
import bigback from "../assets/photos/bigback.jpg";
import w2e from "../assets/photos/w2e.jpg";

const CARDS = [
  {
    title: "HE A RUNNA HE A TRACK STARRR",
    blurb: "CITY TO SURFF WITH SOME LOVELY PEOPLESS",
    photo: c2s,
    imgStyle: { transform: "scale(1.15)" },
  },
  { title: "FOODFOODFOOD", blurb: "#biggestback #iloveeating #food", photo: bigback },
  { title: "PERFORMATIVE MUSIC ENJOYER", blurb: "WAVE TO EARTHHHHH CONCERTTT WAS SO BANGINNN", photo: w2e },
];

const ROTATIONS = ["-rotate-2", "rotate-2", "-rotate-1"];

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
    </svg>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="relative z-10 w-full bg-ink px-6 pt-12 pb-6 sm:px-10 sm:pt-16 sm:pb-8">
      <div className="relative mx-auto max-w-5xl">
        <Sparkle className="pointer-events-none absolute top-2 right-16 h-4 w-4 text-paper/25 sm:top-4 sm:right-24" />
        <Sparkle className="pointer-events-none absolute top-16 right-0 h-6 w-6 text-accent/40 sm:top-20" />
        <Sparkle className="pointer-events-none absolute top-32 right-32 h-3 w-3 text-paper/20 sm:top-40 sm:right-48" />
        <div>
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Want to know more about me?
          </span>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-none text-paper uppercase">
            A snapshot into my life ! 😎
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 pt-6 pb-2 sm:gap-6">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`${ROTATIONS[i % ROTATIONS.length]} rounded-lg bg-white p-2 shadow-lg transition-transform hover:rotate-0 sm:p-2.5`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm">
                <PhotoSlot
                  src={card.photo}
                  alt={card.title}
                  label={`${card.title} photo (replace in Interests.tsx)`}
                  className="h-full w-full"
                  style={card.imgStyle}
                />
              </div>
              <p className="mt-2.5 font-body text-xs font-bold text-ink uppercase">{card.title}</p>
              <p className="mt-0.5 font-body text-xs text-ink/60">{card.blurb}</p>
            </div>
          ))}
        </div>

        <a
          href="#experience"
          className="mt-6 flex flex-col items-center gap-1.5 text-paper transition-colors hover:text-accent sm:mt-8"
        >
          <span className="font-body text-sm font-semibold tracking-[0.3em] uppercase">
            More
          </span>
          <span className="-space-y-2 animate-bounce text-center leading-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mx-auto block h-4 w-5">
              <path d="M5 9l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mx-auto block h-4 w-5">
              <path d="M5 9l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
