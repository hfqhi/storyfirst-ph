import React, { useState } from "react";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section
      id="services"
      className="relative py-24 bg-neutral-950 border-y border-neutral-900 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Dynamic Background Media */}
      <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ease-in-out opacity-20">
        {servicesData.map((service) => (
          <div
            key={`media-${service.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${hoveredService === service.id ? "opacity-100" : "opacity-0"}`}
          >
            {service.visualType === "video" ? (
              <video
                src={service.mediaUrl}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover mix-blend-luminosity"
              />
            ) : (
              <img
                src={service.mediaUrl}
                alt="service background"
                className="w-full h-full object-cover mix-blend-luminosity scale-105"
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-16">
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-sm tracking-widest inline-block mb-3">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            What we do best
          </h2>
        </div>

        <div className="flex flex-col border-t border-neutral-800">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-neutral-800 hover:bg-yellow-500 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span className="text-xl font-mono text-neutral-600 group-hover:text-black transition-colors">
                  0{service.id}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-neutral-400 group-hover:text-black transition-colors uppercase">
                  {service.title}
                </h3>
              </div>
              <p className="text-neutral-500 group-hover:text-black/80 text-sm mt-4 md:mt-0 max-w-md leading-relaxed font-medium transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
