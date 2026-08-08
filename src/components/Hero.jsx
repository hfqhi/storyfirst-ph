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

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
          {identityData.tagline}
          <br />
          <span className="inline-block bg-yellow-500 text-black px-3 py-1 mt-3 font-black">
            {identityData.subTagline}
          </span>
        </h1>

        <p className="text-neutral-400 max-w-2xl text-lg sm:text-xl font-light pt-4 leading-relaxed">
          {identityData.aboutText}
        </p>

        <div className="pt-6 flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-yellow-500 hover:bg-yellow-300 text-black font-extrabold uppercase px-8 py-4 text-sm tracking-wider transition-transform active:scale-95"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="border-2 border-neutral-700 hover:border-white text-white font-bold uppercase px-8 py-4 text-sm tracking-wider transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Quote Block styling from Reference 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-20 p-8 border-l-4 border-yellow-500 bg-neutral-900/50 rounded-r-lg"
      >
        <span className="text-5xl text-yellow-500 font-serif leading-none block mb-2">
          “
        </span>
        <blockquote className="text-xl sm:text-2xl font-bold italic text-neutral-200">
          Documentary is not about showing everything.
          <span className="block mt-2 bg-yellow-500 text-black px-2 py-1 not-italic w-fit font-black">
            It's about showing EVERYTHING that matters.
          </span>
        </blockquote>
      </motion.div>
    </section>
  );
}
