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
    <section id="work" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-sm tracking-widest inline-block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                filter === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
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
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden group hover:border-yellow-500 transition-all duration-300 block hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-black text-yellow-500 text-[10px] font-black tracking-[0.2em] uppercase px-3 py-2">
                {project.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-neutral-950 dark:text-white uppercase group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
                {project.roles}
              </p>
              {project.client && (
                <p className="text-neutral-500 text-xs mt-1 font-mono uppercase border-t border-neutral-200 dark:border-neutral-800 pt-2 mt-3">
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
