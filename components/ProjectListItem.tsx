
import React from 'react';
import { Project } from '../types';

interface ProjectListItemProps {
  project: Project;
  index: number;
  onClick: (id: string) => void;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project, index, onClick }) => {
  return (
    <div 
      className="project-row group relative border-t border-white/10 py-12 md:py-20 cursor-pointer overflow-visible"
      onClick={() => onClick(project.id)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
        <div className="flex items-start gap-4 mb-4 md:mb-0">
          <span className="text-[10px] font-mono mt-2 text-white/30">0{index + 1}</span>
          <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter serif group-hover:italic transition-all">
            {project.title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-3 md:justify-end">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest text-white/40 px-3 py-1 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* The Reveal Image */}
      <div className="reveal-img pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-[4/5] z-0 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </div>

      <div className="line-growth absolute bottom-0 left-0 h-0.5 bg-white"></div>
    </div>
  );
};

export default ProjectListItem;
