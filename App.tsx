
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectListItem from './components/ProjectListItem';
import ExperienceSection from './components/ExperienceSection';
import AIAssistant from './components/AIAssistant';
import ProjectDetail from './components/ProjectDetail';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProjectId(null)} />;
  }

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Work Section */}
        <section id="work" className="py-32 px-8">
          <div className="mb-24">
            <h2 className="text-[10vw] font-black uppercase leading-[0.85] tracking-tighter serif italic">
              Selected <br />Works
            </h2>
          </div>
          
          <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
              <ProjectListItem 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={(id) => setSelectedProjectId(id)}
              />
            ))}
          </div>
          
          <div className="mt-20 flex justify-end">
             <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-white hover:pb-2 transition-all">
                Full Archive (2016-2024)
             </a>
          </div>
        </section>

        <ExperienceSection />
        
        <AIAssistant />

        {/* Footer */}
        <footer id="contact" className="py-32 px-8 bg-black text-white">
          <div className="max-w-7xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30 mb-12">CONTACT_INITIALIZE</p>
            <h2 className="text-[8vw] font-black uppercase leading-[0.85] tracking-tighter serif mb-24 italic">
              Let's craft <br />the future.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-24">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">EMAIL</p>
                  <a href="mailto:hello@innovatedesign.com" className="text-3xl font-bold hover:italic transition-all">hello@innovatedesign.com</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">SOCIAL</p>
                  <div className="flex gap-8">
                    <a href="#" className="text-xl font-bold hover:underline">LinkedIn</a>
                    <a href="#" className="text-xl font-bold hover:underline">Dribbble</a>
                    <a href="#" className="text-xl font-bold hover:underline">Twitter</a>
                  </div>
                </div>
              </div>
              
              <div className="md:text-right flex flex-col justify-end">
                <p className="text-[10vw] font-black italic serif text-white/10 leading-none">2024</p>
                <p className="text-xs font-mono uppercase text-white/30">© InnovateDesign. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
