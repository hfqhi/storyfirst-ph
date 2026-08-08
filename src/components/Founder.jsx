import React from "react";
import marcoRomas from "../assets/marco-romas.png";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500 px-6 border-y border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border-4 border-white dark:border-neutral-950 shadow-2xl">
            <img
              src={marcoRomas}
              alt="Marco Romas"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black font-black uppercase px-6 py-4 text-2xl shadow-lg transform rotate-3">
            Marco Romas
          </div>
        </div>

        <div className="md:col-span-7 space-y-8 md:pl-10 text-neutral-900 dark:text-white transition-colors duration-500">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
              Impactful Storytelling
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Is My Core.
              </span>
            </h2>
            <p className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mt-6 border-l-2 border-yellow-500 pl-4">
              Founder & Content Producer
            </p>
          </div>

          <div className="text-lg text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
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

          {/* New Editorial Accolades List */}
          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-yellow-500 mb-4">
              Notable Recognitions
            </h3>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
              <li>
                <span className="text-yellow-500 mr-2">/</span> 2025
                International Emmy Awards (Nominee)
              </li>
              <li>
                <span className="text-yellow-500 mr-2">/</span> New York
                Festivals TV & Film Awards
              </li>
              <li>
                <span className="text-yellow-500 mr-2">/</span> Catholic Mass
                Media Award
              </li>
              <li>
                <span className="text-yellow-500 mr-2">/</span> DIG Awards
                (Italy) & FIGRA (Paris)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
