import React, { useState } from "react";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section
      id="services"
      className="relative py-32 bg-transparent overflow-hidden min-h-[80vh] flex items-center"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-in-out">
        {servicesData.map((service) => (
          <div
            key={`media-${service.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${hoveredService === service.id ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={service.mediaUrl}
              alt="service background"
              className="w-full h-full object-cover opacity-15 dark:opacity-40 contrast-125 saturate-110 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-neutral-950 dark:via-transparent dark:to-neutral-950 opacity-90"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-16">
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-sm tracking-widest inline-block mb-3 shadow-sm shadow-yellow-500/20">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-neutral-950 dark:text-white uppercase tracking-tight drop-shadow-xl">
            What we do best
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              // Added gap-8 md:gap-16 here to force a minimum gutter space
              className={`group flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 py-10 px-8 transition-all duration-500 ease-in-out cursor-pointer rounded-3xl ${hoveredService === service.id ? "bg-yellow-500/80 scale-[1.01]" : "hover:bg-yellow-500/80 hover:scale-[1.01]"}`}
            >
              {/* Dialed back width to w-[55%] so it doesn't push into the description */}
              <div className="flex items-center md:w-[55%]">
                <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-neutral-100 group-hover:text-black transition-colors duration-500 uppercase drop-shadow-md group-hover:drop-shadow-none">
                  {service.title}
                </h3>
              </div>
              {/* Dialed back width to w-[35%] */}
              <p className="text-neutral-800 dark:text-neutral-300 group-hover:text-black/90 text-sm md:w-[35%] leading-relaxed font-bold transition-colors duration-500 drop-shadow-md group-hover:drop-shadow-none">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
