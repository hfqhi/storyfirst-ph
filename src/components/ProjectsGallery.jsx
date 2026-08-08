import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Documentary", "Journalism", "Culture"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="bg-yellow-500 text-black uppercase font-black px-3 py-1 text-sm tracking-widest inline-block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-900 border border-neutral-800 overflow-hidden group"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-black/80 text-yellow-500 text-xs font-mono px-2 py-1 font-bold">
                {project.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-yellow-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
