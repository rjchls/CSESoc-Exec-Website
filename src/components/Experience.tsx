import socials1 from "../assets/photos/socials1.jpg";
import socialsSkating from "../assets/photos/socialsskating.jpg";
import socialsBouldering from "../assets/photos/socialsbouldering.jpg";
import kiamating from "../assets/photos/kiamating.jpg";
import goblin from "../assets/photos/goblin.jpg";
import w4l from "../assets/photos/w4l.jpg";
import Gallery from "./Gallery";
import PhotoSlot from "./PhotoSlot";

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

        <div className="mt-8 max-w-2xl space-y-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
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
            <p>Some of the key moments + achievements that summarise my time in Socials Subcommittee include:</p>
            <p>- yap yap yap</p>
            <p>- yap yap yap</p>
            <p>- yap yap yap</p>
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
            <p> - peer mentoring (300+ incoming first year students), challenging yet rewarding experience
            that helped foster a greater sense of community amongst the CSE community and also allow me to 
            engage at a closer and more personal level with it as well.</p>
            <p>- Helping lead and manage an amazing Socials Subcommittee team which focused on </p>
          </>
        }
        galleryCaption="Photos from my term as Director"
        galleryLabelPrefix="Director event"
      />

      <ExperienceBlock
        id="experience-camp-leader"
        bg="cream"
        heading="CSESoc First Year Camp Leader 2026 🫪"
        paragraph={
          <>
            <p>- Led a small group of first-year CSE students across a 3-day Camp</p>
            <p>- Demonstrated strong leadership skills and promoted camaraderie and teamwork
              across various different activities </p>
            <p>- Strengthened an overarching sense of community amongst the first-years within the CSE community</p>
            <p>Shoutout my lovely #sojubilants</p>
          </>
        }
        galleryCaption="FYC through my eyes"
      />
    </>
  );
}
