
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const experts = [
  {
    name: "Dr. Yasir Qadhi",
    title: "Islamic Scholar",
    specialty: "Islamic History",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Umar F. Abd-Allah",
    title: "Islamic Scholar",
    specialty: "Islamic Law & History",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Ingrid Mattson",
    title: "Islamic Scholar",
    specialty: "Islamic Studies",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ExpertsSection = () => {
  const [hoveredExpert, setHoveredExpert] = useState<number | null>(null);
  
  return (
    <section id="experts" className="py-20 bg-islamic-charcoal relative">
      <div className="absolute inset-0 islamic-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Our Experts
            </h2>
            <p className="text-white/70 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Learn from scholars who have dedicated their lives to studying Islamic history and the legacies of the Four Rightly Guided Caliphs.
            </p>
          </div>
          
          <button className="mt-4 md:mt-0 px-6 py-2 border border-gold-light/30 text-gold-light hover:bg-gold-light/10 rounded-full transition-colors text-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            View All Experts
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((expert, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setHoveredExpert(index)}
              onMouseLeave={() => setHoveredExpert(null)}
              style={{
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 0.2 + 0.4}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative bg-islamic-blue/10 border border-gold/10 rounded-xl p-6 flex flex-col items-center">
                <div className="mb-4 relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30">
                    <img 
                      src={expert.image} 
                      alt={expert.name} 
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-300",
                        hoveredExpert === index ? "scale-110" : "scale-100"
                      )}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-cinzel font-semibold text-white mb-1">{expert.name}</h3>
                <p className="text-gold-light text-sm mb-1">{expert.title}</p>
                <p className="text-white/50 text-xs mb-4">{expert.specialty}</p>
                
                <div className="mt-auto">
                  <button className="text-xs text-gold cursor-pointer story-link">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
