
import React from 'react';
import { Heart } from 'lucide-react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface PersonalLifeProps {
  caliph: CaliphBiography;
  animationDelay?: string;
}

const PersonalLife: React.FC<PersonalLifeProps> = ({ caliph, animationDelay = '0.6s' }) => {
  return (
    <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay, transform: 'translateZ(10px)' }}>
      <div className="flex items-center mb-6">
        <Heart className="text-gold mr-3" size={24} />
        <h2 className="text-2xl font-semibold font-cinzel text-white">Personal Life</h2>
      </div>
      
      <p className="text-white/80 leading-relaxed">{caliph.personalLife}</p>
    </div>
  );
};

export default PersonalLife;
