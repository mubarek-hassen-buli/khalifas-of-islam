
import React from 'react';
import { Book, ScrollText, Quote } from 'lucide-react';

interface ExpertNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ExpertNavigation: React.FC<ExpertNavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <ul className="space-y-3">
      <li className={activeSection === 'biography' ? 'text-gold' : 'text-white/60'}>
        <button 
          onClick={() => setActiveSection('biography')}
          className="hover:text-gold transition-colors flex items-center w-full text-left"
        >
          <Book size={16} className="mr-2" />
          <span>Biography</span>
        </button>
      </li>
      <li className={activeSection === 'works' ? 'text-gold' : 'text-white/60'}>
        <button 
          onClick={() => setActiveSection('works')}
          className="hover:text-gold transition-colors flex items-center w-full text-left"
        >
          <ScrollText size={16} className="mr-2" />
          <span>Major Works</span>
        </button>
      </li>
      <li className={activeSection === 'legacy' ? 'text-gold' : 'text-white/60'}>
        <button 
          onClick={() => setActiveSection('legacy')}
          className="hover:text-gold transition-colors flex items-center w-full text-left"
        >
          <Quote size={16} className="mr-2" />
          <span>Legacy & Influence</span>
        </button>
      </li>
    </ul>
  );
};

export default ExpertNavigation;
