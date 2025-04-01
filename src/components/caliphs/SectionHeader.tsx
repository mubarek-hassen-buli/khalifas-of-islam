
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in transform-3d" style={{ 
        animationDelay: '0.1s', 
        animationFillMode: 'forwards',
        transform: 'translateZ(30px)',
        textShadow: '0 0 15px rgba(212,175,55,0.3), 0 0 30px rgba(212,175,55,0.2)'
      }}>
        {title}
      </h2>
      <p className="text-white/70 max-w-xl opacity-0 animate-fade-in transform-3d" style={{ 
        animationDelay: '0.2s', 
        animationFillMode: 'forwards',
        transform: 'translateZ(20px)'
      }}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
