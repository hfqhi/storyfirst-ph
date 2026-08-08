import React from "react";
import marcoRomas from "../assets/marco-romas.png";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500 px-6 border-y border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative group pb-8 md:pb-0">
          {/* Added relative wrapper and adjusted aspect ratio for mobile */}
          <a
            href="https://www.imdb.com/name/nm16335198/"
            target="_blank"
            rel="noreferrer"
            className="block w-full max-w-sm mx-auto md:max-w-none aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border-4 border-white dark:border-neutral-950 shadow-2xl cursor-pointer rounded-2xl md:rounded-none"
          >
            <img
              src={marcoRomas}
              alt="Marco Romas"
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-in-out group-hover:scale-105"
            />
          </a>
          {/* Positioned cleanly below the image on mobile, absolute on desktop */}
          <div className="absolute -bottom-2 right-4 md:-bottom-6 md:-right-6 bg-yellow-500 text-black font-black uppercase px-6 py-3 md:py-4 text-xl md:text-2xl shadow-lg transform rotate-2 md:rotate-3 group-hover:rotate-6 transition-transform duration-500 pointer-events-none">
            Marco Romas
          </div>
        </div>

        <div className="md:col-span-7 space-y-8 md:pl-10 text-neutral-900 dark:text-white transition-colors duration-500 pt-4 md:pt-0">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
              Impactful Storytelling
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Is My Core.
              </span>
            </h2>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mt-6 border-l-2 border-yellow-500 pl-4">
              Founder & Content Producer
            </p>
          </div>

          <div className="text-lg text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed max-w-2xl">
            <p>
              As the founder of{" "}
              <strong className="text-black dark:text-white">
                StoryFirst PH
              </strong>
              , a communications and marketing solutions company that champions
              impactful storytelling, I bring over five years of experience in
              video, TV, and events production.
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-500 mb-8">
              Notable Recognitions
            </h3>
            <ul className="space-y-6 text-sm sm:text-base font-black tracking-wider uppercase text-neutral-800 dark:text-neutral-200">
              <li className="flex items-center gap-5">
                <span className="w-2 h-2 bg-yellow-500 shrink-0"></span>
                2025 International Emmy Awards (Nominee)
              </li>
              <li className="flex items-center gap-5">
                <span className="w-2 h-2 bg-yellow-500 shrink-0"></span>
                New York Festivals TV & Film Awards
              </li>
              <li className="flex items-center gap-5">
                <span className="w-2 h-2 bg-yellow-500 shrink-0"></span>
                Catholic Mass Media Award
              </li>
              <li className="flex items-center gap-5">
                <span className="w-2 h-2 bg-yellow-500 shrink-0"></span>
                DIG Awards (Italy) & FIGRA (Paris)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
