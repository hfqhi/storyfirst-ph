import React from "react";
import { partnershipsData } from "../data/portfolioData";

export default function Partnerships() {
  return (
    <section className="py-6 bg-yellow-500 overflow-hidden flex items-center border-y-2 border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] cursor-default">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-10 md:gap-16 px-6 md:px-8"
          >
            {partnershipsData.map((partner, index) => (
              <div
                key={`${i}-${index}`}
                className="flex items-center gap-10 md:gap-16"
              >
                {/* Scaled text from 4xl to 2xl for desktop, and 2xl to xl for mobile */}
                <span className="text-xl md:text-2xl font-black text-black uppercase tracking-tighter whitespace-nowrap">
                  {partner}
                </span>
                <span className="text-black/30 text-lg">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
