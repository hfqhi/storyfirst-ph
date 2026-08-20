import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";

export default function ProjectsGallery() {
  // Default to Documentaries, removed "All"
  const [filter, setFilter] = useState("Documentaries");

  // Exact categories required by the brief
  const categories = ["Documentaries", "Content", "Events", "Workshops"];

  // Filter logic
  const filteredProjects = projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="work"
      className="py-24 bg-transparent transition-colors duration-500 max-w-7xl mx-auto px-6 border-t border-neutral-200 dark:border-neutral-900"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-[10px] tracking-[0.2em] inline-block mb-3 shadow-sm">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
                filter === cat
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            className="relative group h-[400px] sm:h-[450px] flex flex-col justify-end p-8 overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-300/50 dark:hover:shadow-yellow-500/5 block cursor-pointer"
          >
            {/* Background Image with Cinematic Reveal on Hover */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700"></div>
            </div>

            {/* Content Block */}
            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {/* Yellow Badge mapping to the Canva data */}
              <span className="inline-block bg-yellow-500 text-black text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 mb-4 shadow-sm">
                {project.badge}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-black text-white uppercase group-hover:text-yellow-500 transition-colors leading-tight drop-shadow-md">
                {project.title}
              </h3>

              {/* Role */}
              <p className="text-neutral-300 text-sm mt-3 group-hover:text-white transition-colors line-clamp-2 drop-shadow-md">
                {project.role}
              </p>

              {/* Client Footer (Only renders if client exists) */}
              {project.client && (
                <p className="text-neutral-500 text-[10px] font-black tracking-[0.1em] uppercase border-t border-neutral-800 pt-4 mt-5 group-hover:text-neutral-300 transition-colors">
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
