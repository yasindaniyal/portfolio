import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import CapabilitySlider from "./components/CapabilitySlider";
import CustomCursor from "./components/CustomCursor";
import LiveBackground from "./components/LiveBackground";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="technical-grid bg-[#172238] text-slate-50 min-h-screen">
      <LiveBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <CapabilitySlider />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
