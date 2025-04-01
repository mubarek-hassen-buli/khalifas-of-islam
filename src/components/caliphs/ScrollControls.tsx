
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollControlsProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const ScrollControls: React.FC<ScrollControlsProps> = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="flex space-x-4 mt-6 md:mt-0">
      <button 
        onClick={onScrollLeft} 
        className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors transform-3d"
        style={{ transform: 'translateZ(20px)' }}
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={onScrollRight} 
        className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors transform-3d"
        style={{ transform: 'translateZ(20px)' }}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ScrollControls;
