const LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#visions", label: "Visions" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 right-0 z-20 flex gap-6 px-6 py-6 sm:gap-10 sm:px-10 sm:py-8">
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-body text-xs font-medium tracking-[0.15em] text-paper uppercase transition-opacity hover:opacity-70 sm:text-sm"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
