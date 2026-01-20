import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simple fade-in animation for title only
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [project.id]);

  // Render a section based on its type
  const renderSection = (section: any, index: number) => {
    if (section.type === 'image') {
      return (
        <div key={index} className="my-8 md:my-12 -mx-4 md:mx-0">
          <img 
            src={section.src} 
            alt={section.alt || 'Project image'} 
            className="w-full h-auto object-cover"
          />
        </div>
      );
    }

    if (section.type === 'challenge') {
      return (
        <div key={index} className="my-10 md:my-16 py-10 md:py-16 bg-white/[0.02] -mx-4 md:-mx-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-3">
                <p className="text-4xl md:text-6xl font-black italic text-white/10" style={{ fontFamily: "'Fraunces', serif" }}>{section.number}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mt-2">{section.title}</p>
              </div>
              <div className="md:col-span-9">
                <blockquote className="text-lg md:text-xl lg:text-2xl font-light italic text-white/80 leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
                  "{section.content}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (section.type === 'principles') {
      return (
        <div key={index} className="my-10 md:my-16">
          {section.number && (
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="md:col-span-3">
                <p className="text-4xl md:text-6xl font-black italic text-white/10" style={{ fontFamily: "'Fraunces', serif" }}>{section.number}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic" style={{ fontFamily: "'Fraunces', serif" }}>{section.title}</h2>
              </div>
            </div>
          )}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {section.items && section.items.map((item: any, i: number) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-5 md:p-6 ${!isMobile ? 'hover:bg-white/[0.05]' : ''} transition-all`}>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (section.type === 'reflection') {
      return (
        <div key={index} className="my-10 md:my-16 py-10 md:py-16 border-y border-white/10">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-4xl md:text-6xl font-black italic text-white/10" style={{ fontFamily: "'Fraunces', serif" }}>{section.number}</p>
              <p className="text-white/30 text-sm mt-2">{section.subtitle}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-6 md:mb-8" style={{ fontFamily: "'Fraunces', serif" }}>{section.title}</h2>
              <div className="space-y-3 md:space-y-4">
                {section.items && section.items.map((item: string, i: number) => (
                  <div key={i} className={`flex items-center gap-3 md:gap-4 py-3 md:py-4 border-b border-white/10 ${!isMobile ? 'group hover:border-white/30' : ''} transition-colors`}>
                    <span className={`text-red-500 text-lg md:text-xl ${!isMobile ? 'group-hover:rotate-45' : ''} transition-transform`}>+</span>
                    <p className={`text-base md:text-lg text-white/70 ${!isMobile ? 'group-hover:text-white' : ''} transition-colors`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default text section
    return (
      <div key={index} className="my-10 md:my-16">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {section.number && (
            <div className="md:col-span-3">
              <p className="text-4xl md:text-6xl font-black italic text-white/10" style={{ fontFamily: "'Fraunces', serif" }}>{section.number}</p>
              {section.subtitle && <p className="text-white/30 text-sm mt-2">{section.subtitle}</p>}
            </div>
          )}
          <div className={section.number ? "md:col-span-9" : "md:col-span-12"}>
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-4 md:mb-6" style={{ fontFamily: "'Fraunces', serif" }}>{section.title}</h2>
            )}
            {section.content && (
              <p className="text-base md:text-lg text-white/60 leading-relaxed">{section.content}</p>
            )}
            {section.bullets && (
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                {section.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-white/60 text-sm md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8 py-6 md:py-8 border-y border-white/10">
                {section.stats.map((stat: any, i: number) => (
                  <div key={i}>
                    <p className="text-2xl md:text-4xl font-black italic text-white" style={{ fontFamily: "'Fraunces', serif" }}>{stat.value}</p>
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
      <button 
        onClick={onBack}
        className="fixed top-4 md:top-8 left-4 md:left-8 z-[110] text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] bg-white text-black px-4 md:px-6 py-2 md:py-3 active:bg-white/90 md:hover:bg-white/90 md:hover:scale-105 transition-all"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <h1 
          ref={titleRef}
          className="text-[10vw] md:text-[10vw] font-black uppercase tracking-tighter italic leading-[0.85] mb-3 md:mb-4"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {project.title}
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-light text-white/60 max-w-3xl mb-8 md:mb-12">
          {project.subtitle || project.description}
        </p>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16 py-4 md:py-6 border-y border-white/10">
          <div>
            <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">CLIENT</p>
            <p className="text-sm md:text-base font-medium">{project.client || project.title}</p>
          </div>
          <div>
            <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">SERVICES</p>
            <p className="text-sm md:text-base font-medium">{project.services || 'UX/UI Design'}</p>
          </div>
          <div>
            <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">INDUSTRIES</p>
            <p className="text-sm md:text-base font-medium">{project.industries || project.category}</p>
          </div>
          <div>
            <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">DATE</p>
            <p className="text-sm md:text-base font-medium">{project.date || project.duration}</p>
          </div>
        </div>

        {/* Hero Image */}
        {(project.heroImage || project.imageUrl) && (
          <div className="mb-10 md:mb-16 -mx-4 md:mx-0">
            <img 
              src={project.heroImage || project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-contain md:border md:border-white/10"
            />
          </div>
        )}

        {/* Render all sections in order */}
        {project.sections && project.sections.map((section, index) => renderSection(section, index))}

        {/* Back Button */}
        <div className="mt-16 md:mt-24 text-center">
          <button 
            onClick={onBack}
            className={`text-[6vw] md:text-[4vw] font-black uppercase italic ${!isMobile ? 'hover:line-through hover:text-white/70' : 'active:text-white/70'} transition-all`}
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Back to Work →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
