import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // New About Section
import Services from "./components/Services";
import ProjectsGallery from "./components/ProjectsGallery";
import Founder from "./components/Founder"; // Moved down temporarily
import Partnerships from "./components/Partnerships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import paperTexture from "./assets/paper-texture.png";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="select-none bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen selection:bg-yellow-500 selection:text-black transition-colors duration-500 relative">
      {/* Fixed blend modes for Light and Dark modes */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30 mix-blend-multiply dark:invert dark:mix-blend-screen dark:opacity-15 transition-all duration-500"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About /> {/* Integrated directly below Hero */}
          <Services />
          <ProjectsGallery />
          <Founder /> {/* Kept temporarily until we build the Team section */}
          <Partnerships />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
