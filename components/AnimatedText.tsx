
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeUp' | 'slideIn' | 'reveal' | 'stagger';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fadeUp'
}) => {
  const textRef = useRef<HTMLDivElement>(null);
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
    const element = textRef.current;
    if (!element) return;

    // Simpler animation on mobile for better performance
    const mobileY = 30;
    const desktopY = 50;
    
    gsap.set(element, { opacity: 0, y: isMobile ? mobileY : desktopY });

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { opacity: 1, y: 0, duration: isMobile ? 0.6 : 1, ease: 'power3.out' },
      slideIn: { opacity: 1, y: 0, x: 0, duration: isMobile ? 0.8 : 1.2, ease: 'power4.out' },
      reveal: { opacity: 1, y: 0, duration: isMobile ? 0.5 : 0.8, ease: 'power2.out' },
      stagger: { opacity: 1, y: 0, duration: isMobile ? 0.4 : 0.6, ease: 'power2.out', stagger: 0.1 }
    };

    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(element, {
          ...animations[animation],
          delay: isMobile ? delay * 0.5 : delay // Reduce delay on mobile
        });
      },
      once: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, isMobile]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;
