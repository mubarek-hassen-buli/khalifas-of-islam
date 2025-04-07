
import React from 'react';
import { Expert } from '@/data/expertsData';
import ExpertNavigation from './ExpertNavigation';

interface ExpertSidebarProps {
  expert: Expert;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ExpertSidebar: React.FC<ExpertSidebarProps> = ({ expert, activeSection, setActiveSection }) => {
  return (
    <div className="space-y-8 order-first lg:order-last">
      {/* Profile Image */}
      <div className="relative animate-fade-in transform-3d" style={{ animationDelay: '0.5s', transform: 'translateZ(30px)' }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-xl blur-sm opacity-30"></div>
        <div className="relative overflow-hidden rounded-xl">
          <div className="w-full h-80 rounded-xl overflow-hidden">
            <img 
              src={expert.image} 
              alt={expert.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-islamic-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Expert Information Card */}
      <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.6s', transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-semibold font-cinzel text-white mb-4">Profile</h3>
        <div className="space-y-4">
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
      
      {/* Navigation */}
      <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 sticky top-24 animate-fade-in transform-3d" style={{ animationDelay: '0.7s', transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-semibold font-cinzel text-white mb-4">Navigate</h3>
        <ExpertNavigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
      </div>
    </div>
  );
};

export default ExpertSidebar;
