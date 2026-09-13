import { useEffect, useState, type RefObject } from "react";

export function useHeroScrollProgress(wrapperRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const [pin, setPin] = useState({ pinned: true, scrollable: 0 });

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrollable = Math.max(0, wrapper.offsetHeight - window.innerHeight);
      const y = window.scrollY;
      const raw = scrollable > 0 ? y / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
      setPin({ pinned: y < scrollable, scrollable });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [wrapperRef]);

  return { progress, pin };
}
