import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectsGallery from "./components/ProjectsGallery";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 1. Import the image directly so Vite is forced to load it
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
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen selection:bg-yellow-500 selection:text-black transition-colors duration-500 relative">
      {/* 2. The Bulletproof Background Layer */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-60 mix-blend-multiply dark:invert dark:mix-blend-screen dark:opacity-20 transition-all duration-500"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 3. Wrap the content in a relative layer so it sits on top of the background */}
      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Founder />
          <Services />
          <ProjectsGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
