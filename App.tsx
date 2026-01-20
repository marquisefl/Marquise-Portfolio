
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectListItem from './components/ProjectListItem';
import ExperienceSection from './components/ExperienceSection';
import AIAssistant from './components/AIAssistant';
import ProjectDetail from './components/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import MarqueeTicker from './components/MarqueeTicker';
import AnimatedText from './components/AnimatedText';
import Starburst from './components/Starburst';
import { PROJECTS } from './constants';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMobile, setIsMobile] = useState(false);
  const workSectionRef = useRef<HTMLElement>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  if (selectedProject) {
    return (
      <>
        <CustomCursor />
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProjectId(null)} />
      </>
    );
  }

  return (
    <div className={`relative ${!isMobile ? 'cursor-none' : ''}`}>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Marquee Ticker */}
        <div className="py-6 md:py-8 border-y border-white/10 bg-white/[0.02]">
          <MarqueeTicker text="Available for Projects" speed={25} />
        </div>
        
        {/* Work Section */}
        <section ref={workSectionRef} id="work" className="py-16 md:py-32 px-4 md:px-8 relative">
          {/* Decorative starburst - hidden on mobile */}
          {!isMobile && (
            <div className="absolute top-20 right-20 opacity-5">
              <Starburst size={400} animate />
            </div>
          )}
          
          <AnimatedText className="mb-12 md:mb-24">
            <h2 className="text-[14vw] md:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter serif italic">
              Selected <br />
              <span className="text-white/20">Works</span>
            </h2>
          </AnimatedText>
          
          <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
              <AnimatedText key={project.id} delay={index * 0.1}>
                <ProjectListItem 
                  project={project} 
                  index={index} 
                  onClick={(id) => setSelectedProjectId(id)}
                />
              </AnimatedText>
            ))}
          </div>
        </section>

        {/* Divider with Starburst - simplified on mobile */}
        <div className="py-10 md:py-16 flex justify-center items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <Starburst size={isMobile ? 24 : 40} className="text-white/20" animate={false} />
            <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>

        <ExperienceSection />
        
        {/* Second Marquee */}
        <div className="py-6 md:py-8 border-y border-white/10 bg-black">
          <MarqueeTicker text="Let's Create Together" speed={30} direction="right" />
        </div>
        
        <AIAssistant />

        {/* Contact Section */}
        <footer id="contact" className="py-16 md:py-32 px-4 md:px-8 bg-black text-white relative overflow-hidden">
          {/* Background decoration - hidden on mobile */}
          {!isMobile && (
            <div className="absolute -top-40 -right-40 opacity-5">
              <Starburst size={600} animate />
            </div>
          )}
          
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedText>
              <h2 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter serif mb-10 md:mb-16 italic">
                Let's <span className="text-white/20">Talk</span>
              </h2>
            </AnimatedText>
            
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Contact Form */}
              <AnimatedText delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="group">
                      <input
                        type="text"
                        placeholder="First & Last Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-white/20 py-3 md:py-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors text-base"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-white/20 py-3 md:py-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors text-base"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-white/20 py-3 md:py-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none text-base"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`group w-full bg-white text-black py-3 md:py-4 font-bold uppercase tracking-widest ${!isMobile ? 'hover:bg-white/90' : 'active:bg-white/90'} transition-all flex items-center justify-center gap-2`}
                  >
                    Send Message
                    <span className={`${!isMobile ? 'group-hover:translate-x-2' : ''} transition-transform`}>→</span>
                  </button>
                </form>
              </AnimatedText>
              
              {/* Contact Info */}
              <AnimatedText delay={0.4} className="space-y-8 md:space-y-12 md:pl-16">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">CONNECT</p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-bold ${!isMobile ? 'hover:italic hover:pl-4' : 'active:opacity-70'} transition-all flex items-center gap-2`}>
                      <span>LinkedIn</span>
                      <span className="text-white/30">↗</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-bold ${!isMobile ? 'hover:italic hover:pl-4' : 'active:opacity-70'} transition-all flex items-center gap-2`}>
                      <span>Twitter</span>
                      <span className="text-white/30">↗</span>
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-bold ${!isMobile ? 'hover:italic hover:pl-4' : 'active:opacity-70'} transition-all flex items-center gap-2`}>
                      <span>Dribbble</span>
                      <span className="text-white/30">↗</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-bold ${!isMobile ? 'hover:italic hover:pl-4' : 'active:opacity-70'} transition-all flex items-center gap-2`}>
                      <span>Instagram</span>
                      <span className="text-white/30">↗</span>
                    </a>
                  </div>
                </div>
                
                <div className="pt-8 md:pt-12 border-t border-white/10">
                  <p className="text-white/40 text-sm leading-relaxed">
                    I specialize in crafting exceptional digital experiences to help my clients achieve their business goals.
                  </p>
                </div>
              </AnimatedText>
            </div>
            
            {/* Footer Bottom */}
            <div className="mt-16 md:mt-32 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] md:text-xs font-mono uppercase text-white/30">© 2024 Marquise Fleming. All rights reserved.</p>
              <p className="text-[12vw] md:text-[8vw] font-black italic serif text-white/5 leading-none">quise</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
