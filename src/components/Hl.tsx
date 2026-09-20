export default function Hl({ children }: { children: React.ReactNode }) {
  return <mark className="bg-accent px-1 font-bold text-ink">{children}</mark>;
}
