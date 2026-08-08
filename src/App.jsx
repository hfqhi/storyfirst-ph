import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectsGallery from "./components/ProjectsGallery";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Check local storage or system preference for initial theme
  const [isDark, setIsDark] = useState(true);

  // Apply the dark class to the HTML root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen selection:bg-yellow-500 selection:text-black transition-colors duration-500">
      <div className="texture-overlay"></div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <Founder />
        <Services />
        <ProjectsGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
