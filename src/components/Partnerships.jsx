import React from "react";
import { partnershipsData } from "../data/portfolioData";

export default function Partnerships() {
  return (
    <section className="py-12 bg-yellow-500 overflow-hidden flex items-center border-y-2 border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] cursor-default">
        {/* Duplicate the array twice to ensure a seamless infinite scroll */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-12 md:gap-20 px-6 md:px-10"
          >
            {partnershipsData.map((partner, index) => (
              <div
                key={`${i}-${index}`}
                className="flex items-center gap-12 md:gap-20"
              >
                <span className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter whitespace-nowrap">
                  {partner}
                </span>
                {/* Visual separator */}
                <span className="text-black/30 text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
