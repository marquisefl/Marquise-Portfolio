
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 h-16 md:h-24 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : ''
      }`}>
        <div className="text-xl md:text-2xl font-black tracking-tighter serif italic">
          <a href="/" className="md:hover:opacity-70 transition-opacity flex items-center gap-1 md:gap-2">
            <span className="text-white/20">[</span>
            quise
            <span className="text-white/20">]</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#work" className="relative group">
            <span className="group-hover:opacity-50 transition-opacity">Work</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative group">
            <span className="group-hover:opacity-50 transition-opacity">Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white/20 px-4 py-2 -my-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[99] bg-black transition-all duration-500 md:hidden ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a 
            href="#work" 
            onClick={handleLinkClick}
            className="text-3xl font-bold uppercase tracking-wider"
          >
            Work
          </a>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="text-3xl font-bold uppercase tracking-wider"
          >
            Contact
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="text-3xl font-bold uppercase tracking-wider border border-white/20 px-8 py-4 mt-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
