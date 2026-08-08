import React from "react";
import marcoRomas from "../assets/marco-romas.png";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500 px-6 border-y border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Editorial Portrait Column */}
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

        {/* Credentials Column */}
        <div className="md:col-span-7 space-y-8 md:pl-10 text-neutral-900 dark:text-white transition-colors duration-500">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
              Impactful Storytelling
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Is My Core.
              </span>
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-4 border-l-2 border-yellow-500 pl-4">
              Founder & Content Producer, StoryFirst PH
            </p>
          </div>

          <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
            <p>
              As the founder of{" "}
              <strong className="text-black dark:text-white">
                StoryFirst PH
              </strong>
              , a communications and marketing solutions company that champions
              impactful storytelling, I bring over five years of experience in
              video, TV, and events production.
            </p>
            <p className="p-6 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm text-base">
              One of the documentaries I served as local producer,{" "}
              <em>"Philippines: Diving for Gold"</em>, was nominated at the{" "}
              <strong className="text-yellow-600 dark:text-yellow-500">
                2025 International Emmy Awards
              </strong>
              .
            </p>
            <p>
              My work has also earned national and international recognition,
              including the Catholic Mass Media Award, New York Festivals TV &
              Film Awards, DIG Awards in Italy, FIGRA in Paris, and the AIBs in
              London.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
