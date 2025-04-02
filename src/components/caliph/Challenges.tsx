
import React from 'react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface ChallengesProps {
  caliph: CaliphBiography;
  animationDelay?: string;
}

const Challenges: React.FC<ChallengesProps> = ({ caliph, animationDelay = '0.8s' }) => {
  return (
    <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay, transform: 'translateZ(10px)' }}>
      <h2 className="text-2xl font-semibold font-cinzel text-white mb-4">Challenges Faced</h2>
      <p className="text-white/80 leading-relaxed">{caliph.challenges}</p>
    </div>
  );
};

export default Challenges;
