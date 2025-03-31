
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const HistorySection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="history" className="py-20 bg-islamic-black relative">
      <div className="absolute inset-0 geometric-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Legacy of Leadership
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            The historical impact of the Four Rightly Guided Caliphs shaped the course of Islamic history.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 md:transform md:-translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-24">
            {/* Item 1 */}
            <div className="timeline-item relative flex flex-col md:flex-row items-center opacity-0 translate-y-10 transition-all duration-700">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 shadow-lg">
                  <div className="font-cinzel text-gold text-xl mb-2">632-634 CE</div>
                  <h3 className="text-xl font-cinzel font-bold text-white mb-3">Abu Bakr As-Siddiq</h3>
                  <p className="text-white/70">
                    After the Prophet's death, Abu Bakr maintained the unity of the young Muslim community by addressing the apostasy movements and compiling the Quran. His gentle but firm leadership established the foundation of the caliphate system.
                  </p>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-islamic-blue border-2 border-gold relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            
            {/* Item 2 */}
            <div className="timeline-item relative flex flex-col md:flex-row items-center opacity-0 translate-y-10 transition-all duration-700">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              
              <div className="w-8 h-8 rounded-full bg-islamic-blue border-2 border-gold relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 shadow-lg">
                  <div className="font-cinzel text-gold text-xl mb-2">634-644 CE</div>
                  <h3 className="text-xl font-cinzel font-bold text-white mb-3">Umar ibn Al-Khattab</h3>
                  <p className="text-white/70">
                    Umar's decade-long rule saw the greatest territorial expansion in Islamic history. He established administrative systems, created the Islamic calendar, and instituted public welfare. His justice became legendary throughout the expanding empire.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="timeline-item relative flex flex-col md:flex-row items-center opacity-0 translate-y-10 transition-all duration-700">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 shadow-lg">
                  <div className="font-cinzel text-gold text-xl mb-2">644-656 CE</div>
                  <h3 className="text-xl font-cinzel font-bold text-white mb-3">Uthman ibn Affan</h3>
                  <p className="text-white/70">
                    Uthman's most enduring achievement was standardizing the Quran, ensuring its preservation in its original form. His caliphate continued the expansion of the Islamic state while facing increasing internal challenges and transitional pressures.
                  </p>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-islamic-blue border-2 border-gold relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            
            {/* Item 4 */}
            <div className="timeline-item relative flex flex-col md:flex-row items-center opacity-0 translate-y-10 transition-all duration-700">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              
              <div className="w-8 h-8 rounded-full bg-islamic-blue border-2 border-gold relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gold"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 shadow-lg">
                  <div className="font-cinzel text-gold text-xl mb-2">656-661 CE</div>
                  <h3 className="text-xl font-cinzel font-bold text-white mb-3">Ali ibn Abi Talib</h3>
                  <p className="text-white/70">
                    Ali's caliphate faced the first major internal conflicts in the Muslim community. Despite challenges, he maintained core Islamic principles and governance. His wisdom and knowledge enriched Islamic thought and spirituality for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center p-8 bg-islamic-blue/10 border border-gold/10 rounded-xl max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h3 className="text-xl font-cinzel font-bold gold-gradient mb-4">Enduring Influence</h3>
          <p className="text-white/80">
            Together, these four leaders established the pattern of righteous governance that would become the ideal model for Islamic leadership. Their combined legacy in governance, justice, knowledge preservation, and spiritual guidance defined what it means to be a true successor to the Prophet Muhammad ﷺ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
