import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { useState } from 'react';

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const filteredProjects = projects
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!yearFilter || project.year === yearFilter)
    );

  const years = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);

  return (
    <section>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border rounded-md w-full mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          onChange={(e) => setYearFilter(e.target.value ? Number(e.target.value) : null)}
          className="p-2 border rounded-md"
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  View PDF
                </a>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
