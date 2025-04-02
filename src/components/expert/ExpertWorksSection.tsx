
import React from 'react';
import { Expert } from '@/data/expertsData';

interface ExpertWorksSectionProps {
  expert: Expert;
}

const ExpertWorksSection: React.FC<ExpertWorksSectionProps> = ({ expert }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold font-cinzel gold-gradient mb-6">Major Works</h2>
      
      <div className="space-y-8">
        {expert.majorWorks.map((work, idx) => (
          <div key={idx} className="border border-gold/10 rounded-lg p-6 bg-islamic-blue/5 hover:bg-islamic-blue/10 transition-colors">
            <div className="mb-2 opacity-90">
              <h4 className="text-gold-light font-arabic text-xl">{work.arabicTitle}</h4>
            </div>
            <h3 className="text-xl font-cinzel text-white mb-2">{work.title}</h3>
            <p className="text-white/80">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertWorksSection;
