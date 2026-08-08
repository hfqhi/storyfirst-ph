import React, { useState } from "react";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section
      id="services"
      className="relative py-32 bg-transparent border-y border-neutral-200 dark:border-neutral-900 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Background Images with Cinematic Grading applied */}
      <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ease-in-out opacity-100">
        {servicesData.map((service) => (
          <div
            key={`media-${service.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${hoveredService === service.id ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={service.mediaUrl}
              alt="service background"
              className="w-full h-full object-cover opacity-90 dark:opacity-70 contrast-125 saturate-110 scale-105"
            />
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

        <div className="flex flex-col border-t border-neutral-300 dark:border-neutral-800 backdrop-blur-sm bg-white/10 dark:bg-black/10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`group flex flex-col md:flex-row md:items-center justify-between py-10 px-6 border-b border-neutral-300 dark:border-neutral-800 transition-all duration-300 cursor-pointer ${hoveredService === service.id ? "bg-yellow-500 px-10" : "hover:bg-yellow-500 hover:px-10"}`}
            >
              <div className="flex items-center md:w-2/3">
                <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-neutral-100 group-hover:text-black transition-colors uppercase drop-shadow-md group-hover:drop-shadow-none">
                  {service.title}
                </h3>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 group-hover:text-black text-sm mt-4 md:mt-0 md:w-1/3 leading-relaxed font-bold transition-colors drop-shadow-md group-hover:drop-shadow-none">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
