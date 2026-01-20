
import React from 'react';

interface MarqueeTickerProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ 
  text, 
  speed = 20, 
  direction = 'left',
  className = '' 
}) => {
  const animationDirection = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  
  // Slower speed on mobile for better readability and performance
  const mobileSpeed = speed * 1.5;
  
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div 
        className={`inline-flex ${animationDirection}`}
        style={{ 
          animationDuration: `${speed}s`,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-4 md:mx-8 text-[10vw] md:text-[8vw] font-black uppercase italic serif tracking-tighter">
              {text}
            </span>
            <span className="mx-4 md:mx-8 text-[10vw] md:text-[8vw]">✦</span>
          </span>
        ))}
      </div>
      <div 
        className={`inline-flex ${animationDirection}`}
        style={{ 
          animationDuration: `${speed}s`,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-4 md:mx-8 text-[10vw] md:text-[8vw] font-black uppercase italic serif tracking-tighter">
              {text}
            </span>
            <span className="mx-4 md:mx-8 text-[10vw] md:text-[8vw]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
