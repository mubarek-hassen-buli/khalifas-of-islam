
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { experts } from '@/data/expertsData';

const ExpertsSection = () => {
  const [hoveredExpert, setHoveredExpert] = useState<number | null>(null);
  
  return (
    <section id="experts" className="py-20 bg-islamic-charcoal relative overflow-hidden perspective">
      <div className="absolute inset-0 islamic-pattern opacity-5"></div>
      
      {/* Glowing orbs for background effect */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gold-light/5 rounded-full blur-3xl transform-3d" style={{ transform: `translateZ(-150px)` }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-gold-light/5 rounded-full blur-3xl transform-3d" style={{ transform: `translateZ(-200px)` }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="transform-3d" style={{ transform: 'translateZ(30px)' }}>
            <div className="mb-2 opacity-80">
              <p className="text-gold-light font-arabic text-2xl">علماء الإسلام</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards', textShadow: '0 0 15px rgba(212,175,55,0.3), 0 0 30px rgba(212,175,55,0.2)' }}>
              Historical Scholars
            </h2>
            <p className="text-white/70 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Explore the works of these esteemed scholars who documented the lives and legacies of the Four Righteous Caliphs through their meticulous historical records.
            </p>
          </div>
          
          <Link to="/experts" className="mt-4 md:mt-0 px-6 py-2 border border-gold-light/30 text-gold-light hover:bg-gold-light/10 rounded-full transition-colors text-sm opacity-0 animate-fade-in transform-3d" 
            style={{ 
              animationDelay: '0.3s', 
              animationFillMode: 'forwards',
              transform: 'translateZ(20px)'
            }}>
            View All Scholars
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div 
              key={index} 
              className="relative group transform-3d"
              onMouseEnter={() => setHoveredExpert(index)}
              onMouseLeave={() => setHoveredExpert(null)}
              style={{
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 0.2 + 0.4}s`,
                animationFillMode: 'forwards',
                transform: `translateZ(${hoveredExpert === index ? 40 : 20}px)`,
                transition: 'transform 0.5s ease'
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-islamic-blue/10 border border-gold/10 rounded-xl p-8 flex flex-col items-center h-full">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light to-gold-dark blur-sm opacity-20 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30 relative z-10 shadow-xl">
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
                
                <div className="text-center mb-4 opacity-90">
                  <p className="text-gold-light font-arabic text-xl">{expert.arabicName}</p>
                </div>
                
                <h3 className="text-2xl font-cinzel font-semibold text-center gold-gradient mb-1">{expert.name}</h3>
                <p className="text-gold-light/80 text-sm mb-1">{expert.title}</p>
                <p className="text-white/50 text-xs mb-4">{expert.specialty} • {expert.era}</p>
                
                <p className="text-white/80 text-sm mb-6 text-center line-clamp-3">{expert.description}</p>
                
                <div className="mt-auto w-full">
                  <div className="pt-4 border-t border-gold/10 w-full text-center">
                    <Link 
                      to={`/expert/${expert.slug}`}
                      className="px-5 py-2 rounded-full bg-gold-dark/20 hover:bg-gold-dark/40 border border-gold/20 text-gold-light text-sm transition-all duration-300 inline-block shimmer-effect"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                
                {/* Shadow effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-black/40 filter blur-xl rounded-full -z-10 opacity-70"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
