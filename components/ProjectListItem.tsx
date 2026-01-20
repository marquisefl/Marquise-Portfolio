
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Project } from '../types';

interface ProjectListItemProps {
  project: Project;
  index: number;
  onClick: (id: string) => void;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project, index, onClick }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

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
    // Don't add hover effects on mobile
    if (isMobile) return;
    
    const item = itemRef.current;
    const image = imageRef.current;
    
    if (!item || !image) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(image, {
        x: x - 150,
        y: y - 100,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      gsap.to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3
      });
    };

    item.addEventListener('mousemove', handleMouseMove);
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <div 
      ref={itemRef}
      className="project-row group relative border-t border-white/10 py-8 md:py-20 cursor-pointer overflow-visible"
      onClick={() => onClick(project.id)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
        <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-0">
          <span className="text-[10px] font-mono mt-1 md:mt-2 text-white/30">0{index + 1}</span>
          <h3 className="text-2xl md:text-7xl font-bold uppercase tracking-tighter serif md:group-hover:italic transition-all">
            {project.title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2 md:gap-3 md:justify-end ml-6 md:ml-0">
          {project.tags.map(tag => (
            <span key={tag} className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 px-2 md:px-3 py-1 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile: Show thumbnail image */}
      {isMobile && (
        <div className="mt-4 ml-6">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Desktop: The Reveal Image - follows cursor */}
      {!isMobile && (
        <div 
          ref={imageRef}
          className="pointer-events-none absolute w-[300px] h-[200px] z-20 opacity-0 scale-75"
          style={{ top: 0, left: 0 }}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      )}

      <div className="hidden md:block line-growth absolute bottom-0 left-0 h-0.5 bg-white"></div>
    </div>
  );
};

export default ProjectListItem;
