import React from "react";
import { teamData } from "../data/portfolioData";

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-[10px] tracking-[0.2em] inline-block mb-4 shadow-sm">
              The People Behind The Stories
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[0.95]">
              Our Team
            </h2>
          </div>
          <div className="max-w-md text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed text-left">
            <p>
              StoryFirst PH is more than one perspective. We are a collective of
              producers, researchers, and storytellers dedicated to producing
              narratives that resonate with different audiences and
              organizations.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamData.map((member) => (
            <div key={member.id} className="group flex flex-col">
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a] mb-6">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-900 -z-10"></div>

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
