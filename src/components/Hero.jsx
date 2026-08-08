import React from "react";
import { motion } from "framer-motion";
import { identityData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="identity"
      className="relative pt-32 pb-20 px-6 min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-neutral-200 dark:border-neutral-900"
    >
      {/* Cinematic Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-40 mix-blend-multiply dark:mix-blend-lighten"
        src="https://cdn.pixabay.com/video/2019/11/08/28859-370162593_tiny.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 dark:from-neutral-950/90 dark:to-neutral-950/70 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full space-y-6"
      >
        <p className="text-yellow-500 text-xs font-black tracking-[0.2em] uppercase mb-4">
          // Media & Communications Organization
        </p>

        {/* Scaled for mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-[0.9]">
          {identityData.tagline}
          <br />
          <span className="inline-block bg-yellow-500 text-black px-4 pt-3 pb-1 mt-3 font-black tracking-tight">
            {identityData.subTagline}
          </span>
        </h1>

        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl text-base sm:text-xl font-medium pt-4 leading-relaxed">
          {identityData.aboutText}
        </p>

        <div className="pt-6 flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold uppercase px-8 py-4 text-sm tracking-wider transition-transform active:scale-95 shadow-xl shadow-yellow-500/20"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-950 dark:text-white font-bold uppercase px-8 py-4 text-sm tracking-wider transition-colors active:scale-95 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
