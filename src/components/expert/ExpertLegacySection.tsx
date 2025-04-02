
import React from 'react';
import { Expert } from '@/data/expertsData';

interface ExpertLegacySectionProps {
  expert: Expert;
}

const ExpertLegacySection: React.FC<ExpertLegacySectionProps> = ({ expert }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold font-cinzel gold-gradient mb-6">Legacy & Influence</h2>
      
      <div>
        <h3 className="text-xl font-cinzel text-white mb-3">Historical Impact</h3>
        <p className="text-white/80 leading-relaxed">{expert.legacies}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-cinzel text-white mb-3">Influence on Caliphal Studies</h3>
        <p className="text-white/80 leading-relaxed">{expert.influence}</p>
      </div>
      
      <div className="p-6 border border-gold/20 rounded-lg bg-gradient-to-br from-islamic-blue/30 to-transparent">
        <h3 className="text-xl font-cinzel text-gold-light mb-3">Enduring Relevance</h3>
        <p className="text-white/80 leading-relaxed">
          The works of {expert.name} continue to be studied in Islamic educational institutions worldwide. His methodical approach to documenting the lives and achievements of the Rashidun Caliphs provides an invaluable window into this formative period of Islamic history and governance.
        </p>
      </div>
    </div>
  );
};

export default ExpertLegacySection;
