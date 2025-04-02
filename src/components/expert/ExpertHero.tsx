
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Expert } from '@/data/expertsData';

interface ExpertHeroProps {
  expert: Expert;
}

const ExpertHero: React.FC<ExpertHeroProps> = ({ expert }) => {
  return (
    <div className="relative h-80 md:h-96 overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <img 
        src={expert.coverImage} 
        alt={expert.name} 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-islamic-black to-transparent z-20"></div>
      
      <div className="container mx-auto px-4 relative z-30 h-full flex flex-col justify-end pb-8">
        <Link to="/#experts" className="text-gold-light hover:text-gold mb-4 inline-flex items-center transition-colors w-fit">
          <ChevronLeft size={18} />
          <span>Back to Scholars</span>
        </Link>
        
        <div className="transform-3d" style={{ transform: 'translateZ(20px)' }}>
          <div className="mb-2 opacity-80">
            <h2 className="text-gold-light font-arabic text-3xl md:text-4xl">{expert.arabicName}</h2>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-cinzel text-white mb-2">{expert.name}</h1>
          <p className="text-xl text-gold-light/90">{expert.title} • {expert.era}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertHero;
