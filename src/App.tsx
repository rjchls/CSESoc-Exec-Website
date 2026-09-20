import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import WhyExecship from "./components/WhyExecship";
import Visions from "./components/Visions";
import Footer from "./components/Footer";
import ContactBar from "./components/ContactBar";
import Navbar from "./components/Navbar";
import { useHeroScrollProgress } from "./hooks/useHeroScrollProgress";

export default function App() {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const { progress, pin } = useHeroScrollProgress(heroWrapperRef);

  return (
    <div className="w-full bg-cream">
      <Navbar />
      <Hero wrapperRef={heroWrapperRef} progress={progress} pin={pin} />
      <About progress={progress} />
      <Interests />
      <Experience />
      <WhyExecship />
      <Visions />
      <Footer />
      <ContactBar />
    </div>
  );
}
