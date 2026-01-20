
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES } from '../constants';
import Starburst from './Starburst';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Animate experience items
      const items = sectionRef.current?.querySelectorAll('.experience-item');
      items?.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: isMobile ? 0 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="experience" className="py-16 md:py-32 px-4 md:px-8 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
      {/* Background decoration - hidden on mobile */}
      {!isMobile && (
        <div className="absolute -bottom-20 -left-20 opacity-5">
          <Starburst size={400} animate />
        </div>
      )}
      
      <div className="max-w-7xl relative z-10">
        <h2 
          ref={titleRef}
          className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter italic serif mb-12 md:mb-24 leading-[0.85]"
        >
          Proven <br />
          <span className="text-white/20">Track Record</span>
        </h2>
        
        <div className="flex flex-col">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-item py-8 md:py-16 grid md:grid-cols-12 gap-4 md:gap-8 items-start border-t border-white/10 ${!isMobile ? 'hover:bg-white/[0.02] group' : ''} transition-all duration-500`}
            >
              <div className={`md:col-span-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 ${!isMobile ? 'group-hover:text-white/60' : ''} transition-colors`}>
                {exp.period}
              </div>
              <div className="md:col-span-4">
                <h3 className={`text-xl md:text-3xl font-black uppercase tracking-tight mb-1 md:mb-2 ${!isMobile ? 'group-hover:italic' : ''} transition-all`}>
                  {exp.company}
                </h3>
                <p className="text-white/50 italic serif text-base md:text-lg">{exp.role}</p>
              </div>
              <div className={`md:col-span-5 text-white/40 leading-relaxed max-w-lg text-sm md:text-base ${!isMobile ? 'group-hover:text-white/60' : ''} transition-colors`}>
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
