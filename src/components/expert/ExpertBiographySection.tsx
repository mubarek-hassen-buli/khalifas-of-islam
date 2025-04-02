
import React from 'react';
import { Expert } from '@/data/expertsData';

interface ExpertBiographySectionProps {
  expert: Expert;
}

const ExpertBiographySection: React.FC<ExpertBiographySectionProps> = ({ expert }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold font-cinzel gold-gradient mb-6">Biography</h2>
      
      <div>
        <h3 className="text-xl font-cinzel text-white mb-3">Background</h3>
        <p className="text-white/80 leading-relaxed">{expert.background}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-cinzel text-white mb-3">Scholarly Life</h3>
        <p className="text-white/80 leading-relaxed">{expert.description}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-cinzel text-white mb-3">Key Contributions</h3>
        <ul className="space-y-2">
          {expert.contributions.map((contribution: string, idx: number) => (
            <li key={idx} className="text-white/80 flex items-start">
              <span className="text-gold-light mr-2">•</span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-cinzel text-white mb-3">Methodology</h3>
        <p className="text-white/80 leading-relaxed">{expert.methodologies}</p>
      </div>
      
      <div className="p-6 border border-gold/20 rounded-lg bg-islamic-black/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold-light w-full h-full">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        <blockquote className="text-gold-light/90 italic text-lg relative z-10">
          "{expert.quote}"
        </blockquote>
      </div>
    </div>
  );
};

export default ExpertBiographySection;
