
import React, { useRef, useEffect } from 'react';
import CaliphCard from '../CaliphCard';

interface CardItem {
  name: string;
  arabicName: string;
  title: string;
  years: string;
  description: string;
  achievements: string[];
  image: string;
  slug: string;
}

interface ScrollableCardListProps {
  items: CardItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setScrollProgress: (progress: number) => void;
}

const ScrollableCardList: React.FC<ScrollableCardListProps> = ({ 
  items, 
  activeIndex, 
  setActiveIndex, 
  setScrollProgress 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
        
        const cardWidth = scrollWidth / items.length;
        const activeIdx = Math.round(scrollLeft / cardWidth);
        setActiveIndex(activeIdx);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [items.length, setActiveIndex, setScrollProgress]);

  return (
    <div 
      ref={scrollContainerRef}
      className="flex space-x-6 overflow-x-auto pb-12 snap-x scrollbar-none relative"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {items.map((item, index) => (
        <div 
          key={index} 
          className="min-w-[300px] snap-start transform-3d"
          style={{
            transform: `translateZ(${index === activeIndex ? 40 : 0}px) ${index === activeIndex ? 'scale(1.05)' : 'scale(1)'}`,
            transition: 'transform 0.5s ease',
            opacity: 1 - 0.2 * Math.abs(index - activeIndex),
          }}
        >
          <CaliphCard {...item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ScrollableCardList;
