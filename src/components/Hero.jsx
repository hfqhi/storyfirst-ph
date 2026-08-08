import React from "react";
import { motion } from "framer-motion";
import { identityData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="identity"
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="text-yellow-500 font-mono tracking-widest uppercase text-sm font-semibold">
          // Media & Communications Organization
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-[0.9]">
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-20 p-8 border-l-[6px] border-yellow-500 bg-black/5 dark:bg-neutral-900/50 rounded-r-lg max-w-3xl"
      >
        <span className="text-5xl text-yellow-500 font-serif leading-none block mb-2">
          “
        </span>
        <blockquote className="text-xl sm:text-2xl font-bold italic text-neutral-800 dark:text-neutral-200">
          Documentary is not about showing everything.
          <span className="inline-block mt-2 bg-yellow-500 text-black px-3 pt-2 pb-1 not-italic font-black">
            It's about showing EVERYTHING that matters.
          </span>
        </blockquote>
      </motion.div>
    </section>
  );
}
