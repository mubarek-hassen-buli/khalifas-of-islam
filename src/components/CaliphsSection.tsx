
import React, { useRef, useState } from 'react';
import { caliphs } from '@/data/caliphsData';
import ScrollableCardList from './caliphs/ScrollableCardList';
import ScrollIndicator from './caliphs/ScrollIndicator';
import ScrollControls from './caliphs/ScrollControls';
import SectionHeader from './caliphs/SectionHeader';
import BackgroundElements from './caliphs/BackgroundElements';

const CaliphsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth / 2;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="caliphs" className="py-20 relative geometric-pattern overflow-hidden perspective">
      <BackgroundElements />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <SectionHeader 
            title="The Four Rightly Guided Caliphs" 
            description="After the death of Prophet Muhammad ﷺ in 632 CE, the Muslim community was led by these four caliphs, who continued his legacy and expanded the Islamic state."
          />
          
          <ScrollControls 
            onScrollLeft={() => scroll('left')} 
            onScrollRight={() => scroll('right')} 
          />
        </div>
        
        <div className="relative">
          <ScrollableCardList 
            items={caliphs} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
            setScrollProgress={setScrollProgress} 
          />
          
          <ScrollIndicator 
            items={caliphs} 
            activeIndex={activeIndex} 
            onIndicatorClick={setActiveIndex} 
            scrollContainerRef={scrollContainerRef} 
          />
        </div>
      </div>
    </section>
  );
};

export default CaliphsSection;
