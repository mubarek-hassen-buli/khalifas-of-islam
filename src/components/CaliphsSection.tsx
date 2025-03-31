
import React, { useRef, useEffect } from 'react';
import CaliphCard from './CaliphCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const caliphs = [
  {
    name: "Abu Bakr As-Siddiq",
    title: "The Truthful",
    years: "632-634 CE",
    description: "First Caliph of Islam and closest companion to Prophet Muhammad ﷺ. Known for his unwavering faith, wisdom and successful leadership during critical times.",
    achievements: [
      "Preserved Islamic unity after the Prophet's death",
      "Compiled the Quran into a single manuscript",
      "Suppressed apostasy and rebellion",
      "Laid foundations for Islamic governance"
    ],
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Umar ibn Al-Khattab",
    title: "Al-Farooq (The Distinguisher)",
    years: "634-644 CE",
    description: "Second Caliph whose reign saw the rapid expansion of the Islamic empire. Known for his justice, strength, and administrative innovations.",
    achievements: [
      "Expanded Islamic territories to include Jerusalem, Egypt and Persia",
      "Established the Islamic calendar (Hijri)",
      "Created governmental departments and census",
      "Known for strict justice and accountability"
    ],
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Uthman ibn Affan",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    years: "644-656 CE",
    description: "Third Caliph whose generosity and standardization of the Quran preserved Islam's core text. His kindness and modesty were legendary.",
    achievements: [
      "Standardized the Quranic text throughout the empire",
      "Expanded the Prophet's Mosque",
      "Further expanded Islamic territories",
      "Known for his exemplary generosity and modesty"
    ],
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ali ibn Abi Talib",
    title: "Asad Allah (Lion of Allah)",
    years: "656-661 CE",
    description: "Fourth Caliph and cousin and son-in-law of Prophet Muhammad ﷺ. Renowned for his profound knowledge, bravery in battle, and eloquence in speech.",
    achievements: [
      "Preserved the authentic teachings of the Prophet",
      "Known for his deep knowledge and wisdom",
      "Famous for his eloquence and literary contributions",
      "Exemplified courage and principled leadership"
    ],
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const CaliphsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <section id="caliphs" className="py-20 relative geometric-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              The Four Rightly Guided Caliphs
            </h2>
            <p className="text-white/70 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              After the death of Prophet Muhammad ﷺ in 632 CE, the Muslim community was led by these four caliphs, who continued his legacy and expanded the Islamic state.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x scrollbar-none"
        >
          {caliphs.map((caliph, index) => (
            <div key={index} className="min-w-[300px] snap-start">
              <CaliphCard {...caliph} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaliphsSection;
