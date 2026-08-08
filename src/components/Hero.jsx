import React from "react";
import { motion } from "framer-motion";
import { identityData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="identity"
      className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden border-b border-neutral-200 dark:border-neutral-900"
    >
      {/* Fixed Cinematic Video Overlay for both modes */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 dark:opacity-70 contrast-125 saturate-110 transition-all duration-700"
          src="storyfirst-clip.mp4"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-neutral-950/80"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6"
      >
        <p className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black tracking-[0.2em] uppercase mb-2">
          Media & Communications Organization
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-none flex flex-col items-center">
          {identityData.tagline}
          <span className="bg-yellow-500 text-black px-6 pt-3 pb-2 mt-4 font-black tracking-tight w-fit shadow-lg shadow-yellow-500/10 block">
            {identityData.subTagline}
          </span>
        </h1>

        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl text-base sm:text-lg font-medium pt-4 leading-relaxed">
          {identityData.aboutText}
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#work"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase px-10 py-5 text-sm tracking-[0.1em] transition-all hover:-translate-y-1 hover:shadow-2xl shadow-yellow-500/20 active:scale-95 block w-full sm:w-auto"
          >
            Explore Our Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
