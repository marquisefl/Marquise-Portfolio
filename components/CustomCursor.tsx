
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
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
    // Don't initialize cursor on mobile
    if (isMobile) return;
    
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    // Use quickTo for smoother cursor movement
    // Outer ring - slight lag (0.25s) for trailing effect
    const xTo = gsap.quickTo(cursor, "left", { duration: 0.25, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "top", { duration: 0.25, ease: "power3.out" });
    
    // Inner dot - instant follow (no lag)
    const xDotTo = gsap.quickTo(cursorDot, "left", { duration: 0.02, ease: "none" });
    const yDotTo = gsap.quickTo(cursorDot, "top", { duration: 0.02, ease: "none" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDotTo(e.clientX);
      yDotTo(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover], input, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return interactiveElements;
    };

    const interactiveElements = addHoverListeners();
    window.addEventListener('mousemove', moveCursor);

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor ring - lags slightly behind */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-transform duration-200 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-white mix-blend-difference transition-all duration-200 ${
          isHovering ? 'bg-white/20' : 'bg-transparent'
        }`} />
      </div>
      
      {/* Cursor dot - follows exactly */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-2 h-2 rounded-full bg-white mix-blend-difference" />
      </div>
    </>
  );
};

export default CustomCursor;
