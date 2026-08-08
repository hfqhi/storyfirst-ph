import React from "react";
import { motion } from "framer-motion";
import { identityData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="identity"
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="text-yellow-500 text-xs font-black tracking-[0.2em] uppercase mb-4">
          // Media & Communications Organization
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-[0.9]">
          {identityData.tagline}
          <br />
          <span className="inline-block bg-yellow-500 text-black px-4 pt-3 pb-1 mt-3 font-black tracking-tight">
            {identityData.subTagline}
          </span>
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg sm:text-xl font-medium pt-4 leading-relaxed">
          {identityData.aboutText}
        </p>

        <div className="pt-6 flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold uppercase px-8 py-4 text-sm tracking-wider transition-transform active:scale-95"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="border-2 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white text-neutral-950 dark:text-white font-bold uppercase px-8 py-4 text-sm tracking-wider transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
