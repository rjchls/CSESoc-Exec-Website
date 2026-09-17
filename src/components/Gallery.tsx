import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PhotoSlot from "./PhotoSlot";

type GalleryProps = {
  labelPrefix?: string;
  count?: number;
  photos?: (string | undefined)[];
  captions?: (string | undefined)[];
  objectPositions?: (string | undefined)[];
};

export default function Gallery({
  labelPrefix = "Socials event",
  count = 5,
  photos = [],
  captions = [],
  objectPositions = [],
}: GalleryProps) {
  const SLIDES = Array.from({ length: count }, (_, i) => `${labelPrefix} ${i + 1}`);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-sm" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((label, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] px-1 sm:flex-[0_0_80%]">
              <PhotoSlot
                src={photos[i]}
                alt={`Socials memory ${i + 1}`}
                label={`Gallery photo ${i + 1} — ${label} (replace in Gallery.tsx)`}
                className="aspect-[3/2] w-full"
                style={objectPositions[i] ? { objectPosition: objectPositions[i] } : undefined}
              />
              <p className="mt-2 px-1 font-body text-sm text-ink/70">
                {captions[i] ?? "[Add a caption for this photo]"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selectedIndex ? "w-6 bg-accent" : "w-2 bg-ink/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
