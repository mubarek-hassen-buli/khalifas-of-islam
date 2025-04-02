
import React from 'react';
import { Expert } from '@/data/expertsData';

interface ExpertSidebarProps {
  expert: Expert;
}

const ExpertSidebar: React.FC<ExpertSidebarProps> = ({ expert }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 mb-6 transform-3d" style={{ transform: 'translateZ(10px)' }}>
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gold/30 mb-4">
            <img 
              src={expert.image} 
              alt={expert.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-cinzel font-semibold text-center gold-gradient mb-1">{expert.fullName}</h3>
          <p className="text-gold-light/80 text-sm mb-1">{expert.specialty}</p>
          <p className="text-white/50 text-xs">{expert.birthPlace} • {expert.era}</p>
        </div>
        
        <div className="space-y-4 border-t border-gold/10 pt-4">
          <div>
            <h4 className="text-gold-light text-sm font-semibold mb-1">Era</h4>
            <p className="text-white/80 text-sm">{expert.era}</p>
          </div>
          <div>
            <h4 className="text-gold-light text-sm font-semibold mb-1">Place of Birth</h4>
            <p className="text-white/80 text-sm">{expert.birthPlace}</p>
          </div>
          <div>
            <h4 className="text-gold-light text-sm font-semibold mb-1">Place of Death</h4>
            <p className="text-white/80 text-sm">{expert.deathPlace}</p>
          </div>
          <div>
            <h4 className="text-gold-light text-sm font-semibold mb-1">Age</h4>
            <p className="text-white/80 text-sm">{expert.age} years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSidebar;
