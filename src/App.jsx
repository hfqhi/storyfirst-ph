import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectsGallery from "./components/ProjectsGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectsGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
