import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import VantaBackground from "./components/VantaBackground";

const SECTIONS = ["home", "about", "projects", "skills", "contact"];

export default function App() {
  const [pastHome, setPastHome] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            setPastHome(id !== "home");
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    SECTIONS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Navbar visible={pastHome} activeSection={activeSection} onNavigate={scrollToSection} />
      <div ref={containerRef} className="snap-container">
        <section id="home" ref={(el) => (sectionRefs.current.home = el)} className="h-[90vh] w-full">
          <Homepage onEnter={() => scrollToSection("about")} />
        </section>

        <VantaBackground
          effect="fog"
          className="relative"
          options={{
            highlightColor: 0xf2f2f2,
            midtoneColor: 0x584b5f,
            lowlightColor: 0x636266,
            baseColor: 0xfffdfd,
            blurFactor: 0.49,
            speed: 0.9,
            zoom: 2.0,
          }}
        >
          <section id="about" ref={(el) => (sectionRefs.current.about = el)} className="snap-section">
            <AboutMe />
          </section>
          <section id="projects" ref={(el) => (sectionRefs.current.projects = el)} className="snap-section">
            <Projects />
          </section>
          <section id="skills" ref={(el) => (sectionRefs.current.skills = el)} className="snap-section">
            <Skills />
          </section>
          <section id="contact" ref={(el) => (sectionRefs.current.contact = el)} className="snap-section">
            <Contact />
          </section>
        </VantaBackground>
      </div>
    </div>
  );
}
