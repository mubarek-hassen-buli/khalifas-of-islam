
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CaliphCardProps {
  name: string;
  title: string;
  years: string;
  description: string;
  achievements: string[];
  image: string;
  index: number;
}

const CaliphCard: React.FC<CaliphCardProps> = ({ 
  name, 
  title, 
  years, 
  description, 
  achievements,
  image,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };
  
  return (
    <div 
      className="khalifa-card relative group transform-3d"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        animationDelay: `${index * 0.2}s`,
        opacity: 0,
        animation: 'fade-in 0.5s ease-out forwards',
        animationFillMode: 'forwards',
        transform: isHovered 
          ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
          : 'perspective(1000px) rotateY(0) rotateX(0)',
        transition: 'transform 0.3s ease'
      }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
      <div className="relative bg-islamic-charcoal border border-gold/10 rounded-xl p-6 h-full flex flex-col transform-3d" style={{ transformStyle: 'preserve-3d' }}>
        <div className="w-24 h-24 mx-auto mb-4 relative transform-3d" style={{ transform: 'translateZ(20px)' }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light to-gold-dark blur-sm opacity-20 group-hover:opacity-70 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full border-2 border-gold/30 relative z-10 shadow-xl"
          />
        </div>
        
        <h3 className="text-xl font-cinzel font-bold text-center gold-gradient mb-1 transform-3d" style={{ transform: 'translateZ(15px)' }}>{name}</h3>
        <p className="text-sm text-center text-white/70 mb-4 transform-3d" style={{ transform: 'translateZ(10px)' }}>{title}</p>
        <div className="text-xs text-center text-white/50 mb-4 transform-3d" style={{ transform: 'translateZ(5px)' }}>{years}</div>
        
        <p className="text-sm text-white/80 mb-4 flex-grow transform-3d" style={{ transform: 'translateZ(5px)' }}>{description}</p>
        
        <div className={cn(
          "overflow-hidden transition-all duration-300 transform-3d",
          isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        )} style={{ transform: 'translateZ(10px)' }}>
          <h4 className="text-sm font-semibold text-gold-light mb-2">Key Contributions:</h4>
          <ul className="text-xs text-white/70 space-y-1 pl-4">
            {achievements.map((achievement, i) => (
              <li key={i} className="list-disc">{achievement}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 text-center transform-3d" style={{ transform: 'translateZ(15px)' }}>
          <span className="text-xs text-gold-light cursor-pointer story-link shimmer-effect">
            Learn more
          </span>
        </div>

        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-black/40 filter blur-xl rounded-full -z-10 opacity-70"></div>
      </div>
    </div>
  );
};

export default CaliphCard;
