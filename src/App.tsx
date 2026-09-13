import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Visions from "./components/Visions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full bg-cream">
      <Hero />
      <About />
      <Experience />
      <Visions />
      <Footer />
    </div>
  );
}
