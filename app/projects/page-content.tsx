"use client";

import React, { useState } from 'react';
import { projects } from "./project-data";

export default function ProjectContent() {
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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border rounded-md w-full dark:bg-gray-800 dark:border-gray-700"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          onChange={(e) => setYearFilter(e.target.value ? Number(e.target.value) : null)}
          className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="block transition-all duration-200 hover:translate-x-1"
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
                  className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
                >
                  View PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
