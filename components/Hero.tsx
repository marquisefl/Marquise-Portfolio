
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Starburst from './Starburst';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      // Animate title with split text effect
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        tl.fromTo(words,
          { opacity: 0, y: 100, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1 }
        );
      }
      
      // Animate subtitle
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );

      // Parallax effect on scroll - only on desktop
      if (window.innerWidth > 768) {
        gsap.to(titleRef.current, {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center px-4 md:px-8 relative overflow-hidden pt-20 md:pt-0">
      {/* Background decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 opacity-10">
        <Starburst size={200} animate />
      </div>
      <div className="hidden md:block absolute bottom-40 left-10 opacity-5">
        <Starburst size={300} animate />
      </div>
      
      <div className="w-full relative z-10">
        <h1 
          ref={titleRef}
          className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-8 md:mb-12 italic serif"
        >
          <span className="word inline-block">Lead</span>{' '}
          <span className="word inline-block">Product</span>{' '}
          <span className="word inline-block">Designer,</span>
          <br />
          <span className="word inline-block text-white/20">Who</span>{' '}
          <span className="word inline-block">Loves</span>{' '}
          <span className="word inline-block">To</span>{' '}
          <span className="word inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Innovate</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <p 
            ref={subtitleRef}
            className="text-lg md:text-2xl lg:text-3xl leading-tight font-light text-white/70 max-w-2xl"
          >
            With 8+ years of experience, I love solving complex problems through 
            <span className="text-white italic font-medium"> design ideation</span> and 
            <span className="text-white italic font-medium"> prototyping</span> to create 
            impactful, user-centered solutions.
          </p>
          <div className="flex flex-col gap-4 md:items-end">
            <a 
              href="#work" 
              className="group text-sm font-bold border-b-2 border-white pb-1 inline-flex items-center gap-2 md:hover:gap-4 transition-all"
            >
              EXPLORE CASE STUDIES 
              <span className="md:group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
        
        {/* Philosophy Statement */}
        <div className="mt-16 md:mt-32 max-w-4xl">
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-white/50 font-light">
            I believe that building exceptional experiences begins with understanding my users at a fundamental level. Through empathy and meticulous research, I uncover their motivations, challenges, and aspirations, allowing me to craft designs that resonate deeply and solve real problems.
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="mt-12 md:mt-24 flex flex-wrap items-center gap-6 md:gap-12 opacity-40">
          <svg className="h-6 md:h-8 w-auto md:hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <svg className="h-5 md:h-6 w-auto md:hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-sm md:text-lg font-bold tracking-tight md:hover:opacity-100 transition-opacity">GROUPON</span>
          <span className="text-sm md:text-lg font-bold tracking-tight md:hover:opacity-100 transition-opacity">ALBERTSONS</span>
          <span className="text-sm md:text-lg font-bold tracking-tight md:hover:opacity-100 transition-opacity">KAISER</span>
        </div>
      </div>
      
      {/* Decorative vertical line - hidden on mobile */}
      <div className="hidden md:block absolute right-8 bottom-0 w-px h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
