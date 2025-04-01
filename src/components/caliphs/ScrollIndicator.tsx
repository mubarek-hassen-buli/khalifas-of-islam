
import React from 'react';

interface ScrollIndicatorProps {
  items: any[];
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  items, 
  activeIndex, 
  onIndicatorClick, 
  scrollContainerRef 
}) => {
  const handleIndicatorClick = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / items.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      
      onIndicatorClick(index);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4">
      {items.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === activeIndex ? 'bg-gold w-6' : 'bg-gold/30'
          }`}
          onClick={() => handleIndicatorClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
