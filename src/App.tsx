import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Visions from "./components/Visions";
import Footer from "./components/Footer";
import { useHeroScrollProgress } from "./hooks/useHeroScrollProgress";

export default function App() {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const { progress, pin } = useHeroScrollProgress(heroWrapperRef);

  return (
    <div className="w-full bg-cream">
      <Hero wrapperRef={heroWrapperRef} progress={progress} pin={pin} />
      <About progress={progress} />
      <Experience />
      <Visions />
      <Footer />
    </div>
  );
}
