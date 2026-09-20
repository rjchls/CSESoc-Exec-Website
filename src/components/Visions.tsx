const VISIONS = [
  {
    heading:
      "Fostering a welcoming and inclusive environment",
    description:
      "[INSERT DESCRIPTION — write a paragraph or two on how you plan to make this vision real: what you'll actually do as Co-President / VPE, who it affects, and why it matters to you.]",
  },
  {
    heading:
      "REPRESENTING THE SOCIETY",
    description:
      "Continue to uphold close CSESoc relations (aligning with their values and providing the best support to all students in all aspects --> LISTENING TO WHAT THEY WANT AND GIVING BACK TO THE SOCIETY) with the faculty and other partners (maintaining external partnerships with other societies and companies)",
  },
  {
    heading:
      "SUPPORTING THE INTERNAL TEAM",
    description:
      "Promote a tight-knit internal community --> strong interport relationships to facilitate",
  },
  {
    heading:
      "PRIORITISING QUALITY OVER QUANTITY",
    description:
      "In terms of events / initiatives --> less is more (ensuring that the quality of our events is not undermined by the quantity of them).Maintaining and supporting the quality of the internal team, to ensure that the underlying operations that make CSESoc what it is run smoothly and to its highest possible standard",
  },
];

export default function Visions() {
  return (
    <section id="visions" className="relative z-10 w-full bg-ink px-6 py-24 text-paper sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Visions
        </span>

        <div className="mt-10 flex flex-col gap-20 sm:gap-28">
          {VISIONS.map((vision, i) => {
            const alignRight = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col ${alignRight ? "items-end text-right" : "items-start text-left"}`}
              >
                <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-paper uppercase">
                  {vision.heading}
                </h2>

                <div
                  className={`mt-8 max-w-2xl font-body text-base leading-relaxed text-paper/50 italic sm:text-lg ${
                    alignRight ? "border-r-2 border-dashed border-paper/30 pr-6" : "border-l-2 border-dashed border-paper/30 pl-6"
                  }`}
                >
                  {vision.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
