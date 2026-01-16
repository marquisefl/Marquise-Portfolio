
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-8 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl">
        <h2 className="text-[8vw] font-black uppercase tracking-tighter italic serif mb-24 leading-none">
          Proven <br />Track Record
        </h2>
        
        <div className="grid grid-cols-1 gap-px bg-white/10">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="bg-[#0a0a0a] py-16 grid md:grid-cols-12 gap-8 items-start hover:bg-white/5 transition-colors group">
              <div className="md:col-span-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-white/100 transition-colors">
                {exp.period}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{exp.company}</h3>
                <p className="text-white/50 italic serif">{exp.role}</p>
              </div>
              <div className="md:col-span-5 text-white/40 leading-relaxed text-sm max-w-lg">
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
