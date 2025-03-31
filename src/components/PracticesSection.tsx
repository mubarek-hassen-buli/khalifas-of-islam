
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const practices = [
  {
    id: 'governance',
    title: 'Islamic Governance',
    description: 'The Rightly-Guided Caliphs established foundational principles of Islamic governance based on consultation (shura), justice, and accountability. They created the first Islamic state structure that would influence governments for centuries to come.',
  },
  {
    id: 'knowledge',
    title: 'Preservation of Knowledge',
    description: 'Under their leadership, the compilation and preservation of the Quran and Hadith was given utmost importance. Their efforts ensured that the divine revelation and prophetic teachings would remain intact for future generations.',
  },
  {
    id: 'justice',
    title: 'Justice System',
    description: 'They established a comprehensive legal and justice system based on Shariah that treated all citizens equally. Their courts were known for fair judgments regardless of social status or religious background.',
  },
  {
    id: 'expansion',
    title: 'Territorial Expansion',
    description: 'During their rule, the Islamic state expanded dramatically, bringing many regions under just governance. This expansion was characterized by protection of religious minorities and cultural preservation.',
  },
  {
    id: 'economy',
    title: 'Economic Innovation',
    description: 'They introduced numerous economic innovations including the establishment of Bayt al-Mal (treasury), systematic taxation, welfare systems, and public works projects that benefited society.',
  },
];

const PracticesSection = () => {
  const [activeTab, setActiveTab] = useState('governance');

  return (
    <section id="practices" className="py-20 bg-islamic-charcoal relative">
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-cinzel gold-gradient mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Foundational Practices
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            The governance and administration established by the Four Caliphs created lasting foundations for Islamic civilization.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="flex flex-col space-y-1">
              {practices.map((practice, i) => (
                <button
                  key={practice.id}
                  className={cn(
                    "text-left px-4 py-3 rounded-md transition-all duration-300 text-sm hover:bg-gold/10",
                    activeTab === practice.id ? "bg-gold/10 border-l-2 border-gold" : "border-l-2 border-transparent"
                  )}
                  onClick={() => setActiveTab(practice.id)}
                  style={{
                    opacity: 0,
                    animation: 'fade-in 0.5s ease-out forwards',
                    animationDelay: `${i * 0.1 + 0.3}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className={cn(
                    "font-cinzel font-semibold",
                    activeTab === practice.id ? "text-gold" : "text-white"
                  )}>
                    {practice.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-islamic-blue/10 border border-gold/10 rounded-xl p-6 h-full">
              {practices.map((practice) => (
                <div 
                  key={practice.id}
                  className={cn(
                    "transition-all duration-500",
                    activeTab === practice.id ? "block animate-fade-in" : "hidden"
                  )}
                >
                  <h3 className="text-2xl font-cinzel font-bold text-gold mb-4">{practice.title}</h3>
                  <p className="text-white/80 leading-relaxed">{practice.description}</p>
                  
                  <div className="mt-6 pt-6 border-t border-gold/10">
                    <h4 className="text-sm font-semibold text-gold-light mb-2">Historical Significance:</h4>
                    <p className="text-sm text-white/70">
                      This practice established by the Four Caliphs became a cornerstone of Islamic civilization and continues to influence Muslim societies today. Its principles remain relevant in contemporary discussions of governance and social justice.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;
