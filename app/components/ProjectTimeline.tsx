import React from 'react';
import { Project } from '../projects/project-data';

interface TimelineProps {
  projects: Project[];
}

export const ProjectTimeline: React.FC<TimelineProps> = ({ projects }) => {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      {projects.map((project, index) => (
        <div key={index} className="ml-12 mb-8 relative">
          {/* Timeline dot */}
          <div className="absolute -left-[2.45rem] w-4 h-4 bg-blue-500 rounded-full" />
          
          <div className="transform transition-all duration-300 hover:scale-102 hover:translate-x-2">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <span className="text-sm text-gray-500">{project.year}</span>
            <p className="mt-2">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
