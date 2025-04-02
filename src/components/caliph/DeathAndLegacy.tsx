
import React from 'react';
import { Skull } from 'lucide-react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface DeathAndLegacyProps {
  caliph: CaliphBiography;
  animationDelay?: string;
}

const DeathAndLegacy: React.FC<DeathAndLegacyProps> = ({ caliph, animationDelay = '0.9s' }) => {
  return (
    <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay, transform: 'translateZ(10px)' }}>
      <div className="flex items-center mb-6">
        <Skull className="text-gold mr-3" size={24} />
        <h2 className="text-2xl font-semibold font-cinzel text-white">Death & Legacy</h2>
      </div>
      
      <h3 className="text-xl font-semibold text-gold-light mb-3">Death</h3>
      <p className="text-white/80 leading-relaxed mb-6">{caliph.death}</p>
      
      <h3 className="text-xl font-semibold text-gold-light mb-3">Enduring Legacy</h3>
      <p className="text-white/80 leading-relaxed">{caliph.legacy}</p>
    </div>
  );
};

export default DeathAndLegacy;
