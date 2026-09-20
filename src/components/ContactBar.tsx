const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-4 w-4",
};

// Replace these placeholder URLs with your own profile links.
const CONTACTS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rjchls/",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ryne.echaluse.2025/",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryne-echaluse-076896306",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactBar() {
  return (
    <div
      id="contact"
      className="relative z-10 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3 bg-ink px-6 py-4 text-paper sm:px-10"
    >
      <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        Contact
      </span>
      {CONTACTS.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-xs font-medium tracking-[0.15em] text-paper/70 uppercase transition-colors hover:text-accent"
        >
          {c.icon}
          {c.label}
        </a>
      ))}
    </div>
  );
}
