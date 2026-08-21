import React from "react";
import { awardsData } from "../data/portfolioData";
import { Award, ExternalLink } from "lucide-react";

export default function Awards() {
  return (
    <section
      id="awards"
      className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-[10px] tracking-[0.2em] inline-block mb-4 shadow-sm">
              Global & Local Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[0.95]">
              Awards &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Recognitions.
              </span>
            </h2>
          </div>
          <div className="max-w-md text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            <p>
              A testament to responsible, well-researched, and cinematic
              storytelling. These recognitions reflect the collective effort of
              the production teams, journalists, and collaborators we have had
              the honor to work alongside.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="group flex flex-col bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-yellow-500/5"
            >
              {/* Clickable Logo Area */}
              <a
                href={award.verificationLink}
                target={award.verificationLink !== "#" ? "_blank" : "_self"}
                rel="noreferrer"
                className="block relative h-32 mb-8 bg-white dark:bg-neutral-900 p-4 border border-neutral-100 dark:border-neutral-800 rounded-lg overflow-hidden cursor-pointer"
                title={`Verify ${award.title} recognition`}
              >
                <img
                  src={award.logoUrl}
                  alt={`${award.title} logo`}
                  className="w-full h-full object-contain filter dark:brightness-200 dark:contrast-125 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="hidden absolute inset-0 items-center justify-center text-neutral-300 dark:text-neutral-700">
                  <Award size={48} strokeWidth={1} />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-yellow-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-black font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                    Verify Link <ExternalLink size={12} />
                  </span>
                </div>
              </a>

              {/* Award Details */}
              <div className="flex-grow flex flex-col">
                <span className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black tracking-[0.2em] uppercase mb-3 block">
                  {award.recognition}
                </span>

                <h3 className="text-lg font-black text-neutral-900 dark:text-white uppercase leading-snug mb-4">
                  {award.title}
                </h3>

                <div className="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-1">
                    {award.project}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Role: {award.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
