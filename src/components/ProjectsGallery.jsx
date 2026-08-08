import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Documentary", "Hosting", "Brands"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(
          (p) => p.category.includes(filter) || p.category === filter,
        );

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-[10px] tracking-[0.2em] inline-block mb-3">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Added cursor-pointer to filter buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
                filter === cat
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            className="relative group h-[400px] flex flex-col justify-end p-8 overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-300/50 dark:hover:shadow-yellow-500/5 block cursor-pointer"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700"></div>
            </div>

            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block bg-yellow-500 text-black text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 mb-4 shadow-sm">
                {project.category}
              </span>
              <h3 className="text-2xl font-black text-white uppercase group-hover:text-yellow-500 transition-colors leading-tight">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mt-3 group-hover:text-white transition-colors">
                {project.roles}
              </p>

              {project.client && (
                <p className="text-neutral-500 text-[10px] font-black tracking-[0.1em] uppercase border-t border-neutral-700 pt-3 mt-4 group-hover:text-neutral-300 transition-colors">
                  {project.client}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
