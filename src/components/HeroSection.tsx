
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll('.letter');
    
    if (letters) {
      letters.forEach((letter, i) => {
        setTimeout(() => {
          letter.classList.add('opacity-100');
          letter.classList.remove('opacity-0', 'translate-y-8');
        }, 200 + i * 100);
      });
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCaliphs = () => {
    const caliphsSection = document.getElementById('caliphs');
    if (caliphsSection) {
      caliphsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden islamic-pattern perspective">
      <div className="absolute inset-0 radial-gradient"></div>
      
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + scrollY * 0.02}% ${50 + scrollY * 0.01}%, rgba(212, 175, 55, 0.2) 0%, rgba(21, 35, 60, 0.2) 100%)`,
          transform: `translateZ(${-scrollY * 0.2}px) rotateX(${scrollY * 0.01}deg)`
        }}
      ></div>
      
      <div 
        className="container mx-auto px-4 md:px-8 z-10 pt-16 md:pt-0 transform-3d" 
        style={{ transform: `translateZ(${scrollY * 0.1}px)` }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative mb-6 inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full blur-md opacity-30 animate-glow"></div>
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 bg-islamic-charcoal transform-3d rotate-icon">
              <span className="text-2xl gold-gradient font-cinzel">خ</span>
            </div>
          </div>
          
          <p className="text-gold-light uppercase tracking-widest text-sm mb-4 opacity-0 animate-fade-in transform-3d" 
             style={{ 
               animationDelay: '0.2s', 
               animationFillMode: 'forwards',
               transform: `translateZ(${20 + scrollY * 0.05}px)`
             }}>
            The Legacy of The
          </p>
          
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-9xl font-bold font-cinzel mb-6 gold-gradient relative transform-3d" style={{ transform: `translateZ(${40 + scrollY * 0.1}px)` }}>
            {Array.from("KHILAFAH").map((letter, i) => (
              <span key={i} className="letter inline-block opacity-0 translate-y-8 transition-all duration-500 hover:scale-110 transform-3d" style={{ 
                transitionDelay: `${i * 0.05}s`,
                transform: `translateZ(${(i+1) * 5}px)`,
                textShadow: `0 0 15px rgba(212,175,55,0.3), 0 0 30px rgba(212,175,55,0.2)` 
              }}>
                {letter}
              </span>
            ))}
          </h1>
          
          <p className="max-w-2xl text-white/80 mb-8 text-lg opacity-0 animate-fade-in transform-3d" 
             style={{ 
               animationDelay: '1s', 
               animationFillMode: 'forwards',
               transform: `translateZ(${10 + scrollY * 0.02}px)`
             }}>
            Explore the lives and legacies of the Four Rightly Guided Caliphs who led the Muslim community after the Prophet Muhammad ﷺ. Discover how their wisdom, justice, and piety shaped Islamic civilization.
          </p>
          
          <button 
            onClick={scrollToCaliphs}
            className="border border-gold-light/30 bg-islamic-blue/30 hover:bg-islamic-blue/50 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] opacity-0 animate-fade-in group transform-3d"
            style={{ 
              animationDelay: '1.2s', 
              animationFillMode: 'forwards',
              transform: `translateZ(30px)`
            }}
          >
            <span>Explore Caliphs</span>
            <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <ArrowDown size={24} className="text-gold-light pulse-element" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(${-100 + scrollY * 0.2}px)` }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(${-150 + scrollY * 0.3}px)` }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-light/5 rounded-full blur-xl transform-3d" style={{ transform: `translateZ(${-80 + scrollY * 0.1}px)` }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
