import socials1 from "../assets/photos/socials1.jpg";
import socialsSkating from "../assets/photos/socialsskating.jpg";
import socialsBouldering from "../assets/photos/socialsbouldering.jpg";
import kiamating from "../assets/photos/kiamating.jpg";
import goblin from "../assets/photos/goblin.jpg";
import w4l from "../assets/photos/w4l.jpg";
import directorexec from "../assets/photos/directorexec.jpg";
import pmkickoff from "../assets/photos/pmkickoff.jpg";
import sportsDay from "../assets/photos/sports_day.jpg";
import ball from "../assets/photos/ball.jpg";
import tassie from "../assets/photos/tassie.jpg";
import sojubilants1 from "../assets/photos/sojubilants1.jpg";
import sojubilants2 from "../assets/photos/sojubilants2.jpg";
import sojubilants3 from "../assets/photos/sojubilants3.jpg";
import sojubilants4 from "../assets/photos/sojubilants4.jpg";
import Gallery from "./Gallery";
import PhotoSlot from "./PhotoSlot";

function Hl({ children }: { children: React.ReactNode }) {
  return <mark className="bg-accent px-1 font-bold text-ink">{children}</mark>;
}

type ExperienceBlockProps = {
  id: string;
  bg: "cream" | "cream-dark";
  heading: string;
  paragraph: React.ReactNode;
  galleryCaption: string;
  galleryLabelPrefix?: string;
  galleryPhotos?: (string | undefined)[];
  galleryPhotoCaptions?: (string | undefined)[];
  galleryPhotoObjectPositions?: (string | undefined)[];
  galleryCount?: number;
  photo?: string;
};

function ExperienceBlock({
  id,
  bg,
  heading,
  paragraph,
  galleryCaption,
  galleryLabelPrefix,
  galleryPhotos,
  galleryPhotoCaptions,
  galleryPhotoObjectPositions,
  galleryCount,
  photo,
}: ExperienceBlockProps) {
  return (
    <section
      id={id}
      className={`relative z-10 w-full px-6 py-24 sm:px-10 sm:py-32 ${bg === "cream" ? "bg-cream" : "bg-cream-dark"}`}
    >
      <div className="mx-auto max-w-5xl">
        <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Experience
        </span>

        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-ink uppercase">
          {heading}
        </h2>

        <div className="mt-8 max-w-4xl space-y-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
          {paragraph}
        </div>

        <div className="mt-14">
          <p className="mb-6 font-body text-sm font-medium tracking-[0.15em] text-[#6b665d] uppercase">
            {galleryCaption}
          </p>
          {photo ? (
            <PhotoSlot
              src={photo}
              alt={heading}
              label={`${heading} photo (replace in Experience.tsx)`}
              className="aspect-[3/2] w-full max-w-2xl rounded-sm"
            />
          ) : (
            <Gallery
              labelPrefix={galleryLabelPrefix}
              photos={galleryPhotos}
              captions={galleryPhotoCaptions}
              objectPositions={galleryPhotoObjectPositions}
              count={galleryCount}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <>
      <ExperienceBlock
        id="experience"
        bg="cream"
        heading="Socials Subcom 2025 🐵"
        paragraph= {
          <>
            <p>Being an active member of the Socials Subcommittee of CSESoc across
          the last 2 years has not only allowed me to grow immensely as an individual, but also immerse myself amongst
          the broader Computer Science and Engineering community to help
          bring like-minded individuals together as a whole.</p>
            <p className="font-bold">Notable Achievements:</p>
            <p>- Worked towards an overall goal of fostering a <Hl>stronger sense of connection</Hl> amongst the broader CSE community</p>
            <p>- Learnt the processes behind <Hl>planning, organising and running</Hl> of many <Hl>welcoming & casual events</Hl> with a priority of <Hl>empowering the bond</Hl>
              amongst the CSE community. 
            </p>- Worked alongside a team of 7 Subcommittee members to co-organise various <Hl>philanthropic events, sporting events, art events</Hl> and many other <Hl>low-pressure social events !</Hl>
          </>
        }
        galleryCaption="Socials Subcom through my eyes 🥹"
        galleryLabelPrefix="Subcom event"
        galleryPhotos={[socials1, socialsSkating, kiamating, socialsBouldering, goblin, w4l]}
        galleryPhotoCaptions={[
          "Socools 25 @ Cairns ! 🏖️",
          "CSESoc x IceSoc Ice Skating Event ! ⛸️",
          "Socools takes on Kiama !! #funsies 😋",
          "CSESoc x BoulderSoc Bouldering Event ! 🧗",
          "UNLEASHING DA GOBLING GANG 👹",
          "CSESoc runs Wings4Life !! 🏃",
        ]}
        galleryPhotoObjectPositions={[undefined, undefined, undefined, "center 65%", undefined, undefined]}
        galleryCount={6}
      />

      <ExperienceBlock
        id="experience-director"
        bg="cream-dark"
        heading="Socials Director 2026 🙈"
        paragraph= {
          <>
            <p>Taking the next step as a director for the Socials Subcommittee pushed me even further as an individual in helping run slightly larger-scale operations
              with a smaller team to further support the interconnectedness of the CSE community, especially amongst the
              incoming first-year cohort.
            </p>
            <p className="font-bold">Notable Achievements:</p>
            <p> - Organised <Hl>CSESoc's Flagship Peer Mentoring Program</Hl>, which consisted of conducting interviews to select <Hl>74 mentors</Hl> from a total batch of 100+ unique applicants to lead <Hl>270+ First-Year Mentees.</Hl> A Challenging yet rewarding experience
            that helped foster a greater sense of community amongst the CSE community and also allow me to 
            engage at a closer and more personal level with it as well.</p>
            <p>- <Hl>Partnered with various other societies</Hl> throughout the year to help organise events that target the multifaceted interests of the broader CSE community. Notable partnership events include:
                <Hl>CSESoc x EngSoc Sports Day</Hl> which brought together over <Hl>100+ participants</Hl> from both Peer Mentoring Groups, <Hl>CSESoc x MCBS x MedSoc Mahjong Night</Hl> and <Hl>CSESoc x BoulderSoc Bouldering Night.</Hl>
            </p>
            <p>- Helping <Hl>lead and manage a new Socials Subcommittee</Hl> team who worked together to co-organise various Socials events</p>
          </>
        }
        galleryCaption="Socials Directorship through my eyes 👀"
        galleryLabelPrefix="Director event"
        galleryPhotos={[directorexec, pmkickoff, ball, sportsDay, tassie]}
        galleryPhotoCaptions={[
          "2026 Director & Executive Team 🫶",
          "CSESoc Peer Mentoring Kickoff 🎉",
          "Sochalants @ CSESoc Ball 💃",
          "CSESoc x EngSoc Sports Day 🏅",
          "Sochalants takes on Tassie hehe 🏔️",
        ]}
        galleryCount={5}
      />

      <ExperienceBlock
        id="experience-camp-leader"
        bg="cream"
        heading="CSESoc First Year Camp Leader 2026 🫪"
        paragraph={
          <>
            <p>At the beginning of my Directorship year in CSESoc, I was given the opportunity to volunteer as a camp leader for CSESoc's Flagship First-Year Camp.</p>
            <p className="font-bold">Notable Achievements:</p>
            <p>- <Hl>Led a group of 8 first-year CSE students</Hl> across a 3-day camp</p>
            <p>- Demonstrated <Hl>strong leadership skills and promoted camaraderie and teamwork</Hl> across various different activities, ultimately strengthening the bond amongst the first-years in the CSE community</p>
            <p><Hl>SHOUTOUT TO MY LOVELY SOJUBILANTS &lt;3</Hl></p>
          </>
        }
        galleryCaption="FYC through my eyes"
        galleryLabelPrefix="Camp event"
        galleryPhotos={[sojubilants1, sojubilants2, sojubilants3, sojubilants4]}
        galleryPhotoCaptions={[
          "UP THE SOJUBILANTS 🍾",
          "BEST CAMP GROUP EVA 🥺",
          "COMPLETING DA CHALLENGES HEHE 🔥",
          "#tuff #auraful #nonch😎"
        ]}
        galleryCount={4}
      />
    </>
  );
}
