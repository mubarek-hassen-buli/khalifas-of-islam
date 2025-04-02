
import React from 'react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface HistoricalContextProps {
  caliph: CaliphBiography;
  animationDelay?: string;
}

const HistoricalContext: React.FC<HistoricalContextProps> = ({ caliph, animationDelay = '1s' }) => {
  return (
    <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay, transform: 'translateZ(10px)' }}>
      <h2 className="text-2xl font-semibold font-cinzel text-white mb-4">Historical Context</h2>
      <p className="text-white/80 leading-relaxed">{caliph.historicalContext}</p>
    </div>
  );
};

export default HistoricalContext;
