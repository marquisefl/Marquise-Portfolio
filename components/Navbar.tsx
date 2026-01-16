
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-8 h-24 flex items-center justify-between pointer-events-none">
      <div className="text-xl font-black tracking-tighter serif italic pointer-events-auto">
        <a href="/">INNOVATE.</a>
      </div>
      <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold pointer-events-auto">
        <a href="#work" className="hover:line-through transition-all">Work</a>
        <a href="#experience" className="hover:line-through transition-all">Story</a>
        <a href="#contact" className="hover:line-through transition-all">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
