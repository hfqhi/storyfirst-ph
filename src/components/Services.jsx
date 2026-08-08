import React from "react";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-neutral-900 border-y border-neutral-800 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="bg-yellow-400 text-black uppercase font-black px-3 py-1 text-sm tracking-widest inline-block mb-3">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Documentaries & Journalism
          </h2>
          <p className="text-neutral-400 text-lg mt-2">What we do best:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-neutral-950 p-8 border border-neutral-800 hover:border-yellow-400 transition-all group"
            >
              <span className="text-xs font-mono text-yellow-400 block mb-2">
                0{service.id}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors uppercase">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
