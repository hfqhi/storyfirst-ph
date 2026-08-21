import React from "react";
import { advocaciesData } from "../data/portfolioData";

export default function Advocacies() {
  return (
    <section
      id="advocacies"
      className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-500 px-6 border-t border-neutral-200 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-[10px] tracking-[0.2em] inline-block mb-4 shadow-sm">
              Beyond Commercial Work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[0.95]">
              Our Advocacies
            </h2>
          </div>
          <div className="max-w-md text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            <p>
              StoryFirst PH is committed to empowering the next generation of
              communicators. We dedicate our time to initiatives focused on
              journalism education, media literacy, and advocacy storytelling.
            </p>
          </div>
        </div>

        {/* 3-Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advocaciesData.map((advocacy) => (
            <div
              key={advocacy.id}
              className="group relative overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a] min-h-[400px] flex flex-col justify-end p-8 border border-neutral-200 dark:border-neutral-800 cursor-default"
            >
              {/* Background Image with Cinematic Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={advocacy.imageUrl}
                  alt={advocacy.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-900 -z-10"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4 group-hover:text-yellow-500 transition-colors">
                  {advocacy.title}
                </h3>

                {/* Animated Divider */}
                <div className="w-12 h-1 bg-yellow-500 mb-5 transition-all duration-500 group-hover:w-full"></div>

                <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                  {advocacy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
