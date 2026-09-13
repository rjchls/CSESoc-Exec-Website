import heroPhoto from "../assets/photos/herophoto.jpg";
import PhotoSlot from "./PhotoSlot";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-ink">
      <PhotoSlot
        src={heroPhoto}
        alt="Ryne Echaluse"
        label="Hero photo — portrait/landscape shot, full-bleed background (replace in Hero.tsx)"
        dark
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />

      <Navbar />

      <div className="relative z-10 w-full px-6 pb-10 sm:px-10 sm:pb-14">
        <h1 className="font-display leading-[0.85] text-paper uppercase">
          <span className="block text-[clamp(3rem,13vw,10rem)]">Ryne</span>
          <span className="block text-[clamp(3rem,13vw,10rem)]">Echaluse</span>
        </h1>
        <p className="mt-4 font-body text-sm font-medium tracking-[0.2em] text-paper/90 uppercase sm:text-base">
          Vote me for Co-President and VPE
        </p>
      </div>
    </section>
  );
}
