
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 bg-slate-200">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-6 py-2 bg-white rounded-full font-semibold text-sm">View Case Study</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 mb-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold group-hover:text-slate-600 transition-colors">{project.title}</h3>
        <p className="text-slate-500 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
