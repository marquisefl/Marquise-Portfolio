
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 relative">
      <div className="w-full">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-white/40">
          BASED IN CALIFORNIA — DESIGNING FOR MILLIONS
        </p>
        <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12 italic serif">
          Lead Product Designer, <br />Who Loves To Innovate
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="text-2xl md:text-3xl leading-tight font-light text-white/70 max-w-2xl">
            With 8+ years of experience, I love solving complex problems through 
            <span className="text-white italic"> design ideation</span> and 
            <span className="text-white italic"> prototyping</span> to create 
            impactful, user-centered solutions.
          </p>
          <div className="flex flex-col gap-4 md:items-end">
            <a href="#work" className="text-sm font-bold border-b-2 border-white pb-1 inline-block hover:pr-4 transition-all">
              EXPLORE CASE STUDIES →
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-8 bottom-0 w-px h-32 bg-white/20"></div>
    </section>
  );
};

export default Hero;
