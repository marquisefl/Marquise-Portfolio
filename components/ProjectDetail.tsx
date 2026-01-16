
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-64 px-8 relative">
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-[110] text-[10px] font-bold uppercase tracking-[0.4em] bg-white text-black px-6 py-3 hover:italic transition-all"
      >
        ← BACK TO ARCHIVE
      </button>

      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 mb-8">{project.category}</p>
        <h1 className="text-[10vw] font-black uppercase tracking-tighter italic serif leading-[0.8] mb-20">
          {project.title}
        </h1>

        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-8">
            <p className="text-3xl md:text-5xl font-light leading-tight text-white/90 serif">
              {project.longDescription || project.description}
            </p>
          </div>
          <div className="md:col-span-4 space-y-12">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-4">ROLE</p>
              <p className="text-xl font-bold uppercase">{project.role || 'Lead Designer'}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-4">PERIOD</p>
              <p className="text-xl font-bold uppercase">{project.duration || '2024'}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-4">TOOLS</p>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map(tool => (
                  <span key={tool} className="text-xs border border-white/10 px-3 py-1 uppercase">{tool}</span>
                )) || <span className="text-xs opacity-50">STANDARD SUITE</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full aspect-[16/9] object-cover border border-white/10 shadow-2xl"
          />
        </div>

        {/* Research Section - Definitive Fix for Text Overlap */}
        {project.research && (
          <div className="mb-24 border-y border-white/10 py-32 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
              
              {/* Header block with fixed layout */}
              <div className="w-full lg:w-1/3 flex flex-col items-start">
                <div className="relative mb-6">
                  <span className="text-8xl md:text-9xl font-black italic serif leading-none text-white/5 select-none tracking-tighter block">
                    02
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic serif text-white block -mt-10 md:-mt-12 relative z-10">
                    {project.research.title}
                  </h2>
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 ml-1">
                  {project.research.subtitle}
                </p>
              </div>

              {/* Body Content block */}
              <div className="w-full lg:w-2/3 space-y-16">
                <p className="text-2xl md:text-3xl text-white/90 font-light leading-snug">
                  {project.research.description}
                </p>
                
                {/* Stats Grid - Vertical in small, Horizontal in large */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
                  {project.research.stats.map((stat, i) => (
                    <div key={i} className="group">
                      <p className="text-4xl md:text-5xl font-black italic serif mb-2 text-white group-hover:italic transition-all">
                        {stat.value}
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 leading-tight font-bold">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/[0.03] p-8 md:p-12 border border-white/10">
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light italic">
                    {project.research.conclusion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* New UI Showcase Section with Glitch Hover */}
        <div className="mb-48 group">
          <div className="glitch-wrapper relative w-full aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
             <div 
               className="glitch-image w-full h-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0"
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop")' }}
             />
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
               <div>
                 <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 mb-2 italic">UI_SYSTEM_SHOWCASE</p>
                 <h3 className="text-4xl font-black italic serif uppercase tracking-tighter">Unified Member Ecosystem</h3>
               </div>
             </div>
          </div>
          <p className="mt-8 text-sm text-white/30 font-mono uppercase tracking-widest text-center">
            [ HOVER TO INITIALIZE VISUAL GLITCH ]
          </p>
        </div>

        {/* Subsequent Sections */}
        <div className="space-y-32">
          {project.sections?.map((section, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-16">
              <div className="md:col-span-4">
                <h2 className="text-4xl font-black uppercase italic serif tracking-tighter">
                  {section.title}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {project.gallery && (
          <div className="grid md:grid-cols-2 gap-8 mt-32">
            {project.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden border border-white/10">
                <img 
                  src={img} 
                  alt={`${project.title} process ${i}`} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-64 text-center">
            <button 
              onClick={onBack}
              className="text-[4vw] font-black uppercase italic serif hover:line-through transition-all"
            >
              Back to Archive →
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
