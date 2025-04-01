
import React, { useRef, useEffect, useState } from 'react';
import CaliphCard from './CaliphCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const caliphs = [
  {
    name: "Abu Bakr As-Siddiq",
    arabicName: "أبو بكر الصديق",
    title: "The Truthful",
    years: "632-634 CE",
    description: "First Caliph of Islam and closest companion to Prophet Muhammad ﷺ. Known for his unwavering faith, wisdom and successful leadership during critical times.",
    achievements: [
      "Preserved Islamic unity after the Prophet's death",
      "Compiled the Quran into a single manuscript",
      "Suppressed apostasy and rebellion",
      "Laid foundations for Islamic governance"
    ],
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "abu-bakr"
  },
  {
    name: "Umar ibn Al-Khattab",
    arabicName: "عمر بن الخطاب",
    title: "Al-Farooq (The Distinguisher)",
    years: "634-644 CE",
    description: "Second Caliph whose reign saw the rapid expansion of the Islamic empire. Known for his justice, strength, and administrative innovations.",
    achievements: [
      "Expanded Islamic territories to include Jerusalem, Egypt and Persia",
      "Established the Islamic calendar (Hijri)",
      "Created governmental departments and census",
      "Known for strict justice and accountability"
    ],
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "umar"
  },
  {
    name: "Uthman ibn Affan",
    arabicName: "عثمان بن عفان",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    years: "644-656 CE",
    description: "Third Caliph whose generosity and standardization of the Quran preserved Islam's core text. His kindness and modesty were legendary.",
    achievements: [
      "Standardized the Quranic text throughout the empire",
      "Expanded the Prophet's Mosque",
      "Further expanded Islamic territories",
      "Known for his exemplary generosity and modesty"
    ],
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "uthman"
  },
  {
    name: "Ali ibn Abi Talib",
    arabicName: "علي بن أبي طالب",
    title: "Asad Allah (Lion of Allah)",
    years: "656-661 CE",
    description: "Fourth Caliph and cousin and son-in-law of Prophet Muhammad ﷺ. Renowned for his profound knowledge, bravery in battle, and eloquence in speech.",
    achievements: [
      "Preserved the authentic teachings of the Prophet",
      "Known for his deep knowledge and wisdom",
      "Famous for his eloquence and literary contributions",
      "Exemplified courage and principled leadership"
    ],
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "ali"
  }
];

const CaliphsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
        
        const cardWidth = scrollWidth / caliphs.length;
        const activeIdx = Math.round(scrollLeft / cardWidth);
        setActiveIndex(activeIdx);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(-100px)` }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(-150px)` }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(-80px)` }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in transform-3d" style={{ 
              animationDelay: '0.1s', 
              animationFillMode: 'forwards',
              transform: 'translateZ(30px)',
              textShadow: '0 0 15px rgba(212,175,55,0.3), 0 0 30px rgba(212,175,55,0.2)'
            }}>
              The Four Rightly Guided Caliphs
            </h2>
            <p className="text-white/70 max-w-xl opacity-0 animate-fade-in transform-3d" style={{ 
              animationDelay: '0.2s', 
              animationFillMode: 'forwards',
              transform: 'translateZ(20px)'
            }}>
              After the death of Prophet Muhammad ﷺ in 632 CE, the Muslim community was led by these four caliphs, who continued his legacy and expanded the Islamic state.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors transform-3d"
              style={{ transform: 'translateZ(20px)' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors transform-3d"
              style={{ transform: 'translateZ(20px)' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-12 snap-x scrollbar-none relative"
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {caliphs.map((caliph, index) => (
              <div 
                key={index} 
                className="min-w-[300px] snap-start transform-3d"
                style={{
                  transform: `translateZ(${index === activeIndex ? 40 : 0}px) ${index === activeIndex ? 'scale(1.05)' : 'scale(1)'}`,
                  transition: 'transform 0.5s ease',
                  opacity: 1 - 0.2 * Math.abs(index - activeIndex),
                }}
              >
                <CaliphCard {...caliph} index={index} />
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4">
            {caliphs.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-gold w-6' : 'bg-gold/30'
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.scrollWidth / caliphs.length;
                    scrollContainerRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaliphsSection;
