// A plain <a href="#id"> fragment jump races against our scroll-linked
// animations (position: fixed hero, per-frame transforms) and can stall or
// settle in the wrong spot. Compute the target ourselves and drive the
// scroll explicitly instead of relying on native anchor navigation.
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const target = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
}
