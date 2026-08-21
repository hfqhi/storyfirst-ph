import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { ExternalLink } from "lucide-react";

export default function ProjectsGallery() {
  // Default filter to Documentaries
  const [filter, setFilter] = useState("Documentaries");

  // Categories matching the official brief
  const categories = ["Documentaries", "Content", "Events", "Workshops"];

  // Filtered projects list
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

        {/* Category Filter Tabs */}
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

      {/* 3-Column Responsive Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            className="relative group min-h-[440px] sm:min-h-[480px] flex flex-col justify-end p-8 overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-300/50 dark:hover:shadow-yellow-500/5 block cursor-pointer"
          >
            {/* Background Image with Cinematic Hover Zoom & Reveal */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-35 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  // Fallback to placeholder if asset is loading or missing
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/20 opacity-95 group-hover:opacity-90 transition-opacity duration-700"></div>
            </div>

            {/* Top Badge & Year Bar */}
            <div className="relative z-10 flex items-center justify-between gap-3 mb-auto">
              <span className="inline-block bg-yellow-500 text-black text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 shadow-sm">
                {project.badge}
              </span>
              {project.year && (
                <span className="text-[11px] font-mono font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">
                  {project.year}
                </span>
              )}
            </div>

            {/* Content Details */}
            <div className="relative z-10 mt-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase group-hover:text-yellow-500 transition-colors leading-tight drop-shadow-md">
                  {project.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-neutral-400 group-hover:text-yellow-500 transition-colors shrink-0 mt-1"
                />
              </div>

              {/* Role */}
              <p className="text-yellow-400/90 text-xs font-bold uppercase tracking-wider mt-2">
                {project.role}
              </p>

              {/* Short Editorial Description */}
              {project.shortDescription && (
                <p className="text-neutral-300 text-sm mt-3 leading-relaxed line-clamp-3 group-hover:text-white transition-colors">
                  {project.shortDescription}
                </p>
              )}

              {/* Client Footer */}
              {project.client && (
                <p className="text-neutral-500 text-[10px] font-black tracking-[0.15em] uppercase border-t border-neutral-800/80 pt-4 mt-5 group-hover:text-neutral-400 transition-colors">
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
