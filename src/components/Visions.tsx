import PhotoSlot from "./PhotoSlot";
import Hl from "./Hl";
import bbq from "../assets/photos/bbq.jpg";
import socwide from "../assets/photos/socwide.jpg";

type Vision = {
  heading: string;
  points: React.ReactNode[];
  align: "left" | "center" | "right";
  showPhoto?: boolean;
  photo?: string;
  widePhoto?: boolean;
  photoClassName?: string;
  textAtTop?: boolean;
};

const VISIONS: Vision[] = [
  {
    heading:
      "Fostering a welcoming and inclusive environment",
    align: "left",
    showPhoto: true,
    photo: bbq,
    points: [
      <>Continue to <Hl>engage with the broader CSE community</Hl> through <Hl>running welcoming events</Hl> that bring together students across diverse backgrounds and drive an overarching sense of community</>,
      <><Hl>Prioritise listening to the voices of students</Hl> amongst the CSE community to ensure that all their needs are met such that each individual feels heard and a part of their community</>,
    ],
  },
  {
    heading:
      "REPRESENTING THE SOCIETY",
    align: "center",
    points: [
      <>Aim to continue to <Hl>uphold close CSESoc relations</Hl> with the CSE Faculty and other partners (including external partnerships with other societies and companies) as part of its representative body</>,
      <>This includes <Hl>maintaining constant contact</Hl> with the Faculty, <Hl>aligning with its values</Hl> and providing the best possible support to all students by incorporating feedback</>,
    ],
  },
  {
    heading:
      "SUPPORTING THE INTERNAL TEAM",
    align: "right",
    showPhoto: true,
    photo: socwide,
    widePhoto: true,
    photoClassName: "origin-[100%_75%] scale-[1.04]",
    textAtTop: true,
    points: [
      <>Aim to <Hl>promote a tight-knit internal team</Hl> with strong cross-portfolio relationships to facilitate a society that functions cohesively</>,
      <><Hl>Maintain constant communication</Hl> and regularly check in with each portfolio to address any potential concerns</>
    ],
  },
  {
    heading:
      "PRIORITISING QUALITY OVER QUANTITY",
    align: "center",
    points: [
      <>In terms of events / initiatives, ensure that the quality of the society's events is not undermined by the sheer quantity of events being run. Focus on <Hl>diversifying events</Hl> such that we are targeting a broader audience with quality events rather than a smaller audience with similar events</>,
      <><Hl>Maintain and support the quality</Hl> of the work put out by the internal team</>,
    ],
  },
];

const TEXT_ALIGN = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const LIST_BORDER = {
  left: "border-l-2 border-dashed border-paper/30 pl-6",
  center: "",
  right: "border-r-2 border-dashed border-paper/30 pr-6",
};

export default function Visions() {
  return (
    <section id="visions" className="relative z-10 w-full bg-ink px-6 py-24 text-paper sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Visions
        </span>

        <div className="mt-10 flex flex-col gap-20 sm:gap-28">
          {VISIONS.map((vision) => {
            const { align } = vision;
            return (
              <div
                key={vision.heading}
                className={`flex flex-col gap-8 md:items-center md:gap-12 ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div
                  className={`flex min-w-0 flex-1 flex-col ${TEXT_ALIGN[align]} ${vision.textAtTop ? "md:self-start" : ""}`}
                >
                  <h2
                    className={`font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-paper uppercase ${
                      vision.showPhoto ? "max-w-3xl" : "max-w-5xl"
                    }`}
                  >
                    {vision.heading}
                  </h2>

                  <ul
                    className={`mt-8 space-y-3 font-body text-base leading-relaxed text-paper/50 italic sm:text-lg ${
                      vision.showPhoto ? "max-w-2xl" : "max-w-4xl"
                    } ${LIST_BORDER[align]}`}
                  >
                    {vision.points.map((point, p) =>
                      align === "center" ? (
                        <li key={p}>
                          <span aria-hidden className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                          {point}
                        </li>
                      ) : (
                        <li key={p} className={`flex gap-3 ${align === "right" ? "flex-row-reverse" : ""}`}>
                          <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {vision.showPhoto && (
                  <div
                    className={`w-full overflow-hidden rounded-sm md:shrink-0 ${
                      vision.widePhoto ? "aspect-video md:w-[46%]" : "aspect-[4/3] md:w-[38%]"
                    }`}
                  >
                    <PhotoSlot
                      src={vision.photo}
                      alt={vision.heading}
                      label={`${vision.heading} photo (add in Visions.tsx)`}
                      dark
                      className={`h-full w-full ${vision.photoClassName ?? ""}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
