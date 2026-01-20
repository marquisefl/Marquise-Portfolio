
import React from 'react';

interface StarburstProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

const Starburst: React.FC<StarburstProps> = ({ 
  size = 100, 
  className = '',
  animate = true 
}) => {
  return (
    <div 
      className={`${className} ${animate ? 'animate-spin-slow' : ''}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 L52 48 L100 50 L52 52 L50 100 L48 52 L0 50 L48 48 Z" />
        <path d="M50 10 L51 48 L90 50 L51 52 L50 90 L49 52 L10 50 L49 48 Z" opacity="0.5" transform="rotate(22.5 50 50)" />
        <path d="M50 20 L51 48 L80 50 L51 52 L50 80 L49 52 L20 50 L49 48 Z" opacity="0.3" transform="rotate(45 50 50)" />
      </svg>
    </div>
  );
};

export const StarburstSmall: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-block ${className}`}>✦</span>
);

export const StarburstLarge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`${className}`}>
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <polygon points="50,0 61,35 100,35 68,57 79,91 50,70 21,91 32,57 0,35 39,35" />
    </svg>
  </div>
);

export default Starburst;
