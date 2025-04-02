
import React from 'react';
import { Book, ScrollText, Quote } from 'lucide-react';

interface ExpertNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ExpertNavigation: React.FC<ExpertNavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="bg-islamic-charcoal border border-gold/10 rounded-xl overflow-hidden transform-3d" style={{ transform: 'translateZ(10px)' }}>
      <button 
        onClick={() => setActiveSection('biography')}
        className={`w-full py-3 px-4 text-left flex items-center transition-colors ${activeSection === 'biography' ? 'bg-gold/20 text-gold-light' : 'hover:bg-gold/10 text-white/80'}`}
      >
        <Book size={18} className="mr-2" />
        <span>Biography</span>
      </button>
      <button 
        onClick={() => setActiveSection('works')}
        className={`w-full py-3 px-4 text-left flex items-center transition-colors ${activeSection === 'works' ? 'bg-gold/20 text-gold-light' : 'hover:bg-gold/10 text-white/80'}`}
      >
        <ScrollText size={18} className="mr-2" />
        <span>Major Works</span>
      </button>
      <button 
        onClick={() => setActiveSection('legacy')}
        className={`w-full py-3 px-4 text-left flex items-center transition-colors ${activeSection === 'legacy' ? 'bg-gold/20 text-gold-light' : 'hover:bg-gold/10 text-white/80'}`}
      >
        <Quote size={18} className="mr-2" />
        <span>Legacy & Influence</span>
      </button>
    </div>
  );
};

export default ExpertNavigation;
