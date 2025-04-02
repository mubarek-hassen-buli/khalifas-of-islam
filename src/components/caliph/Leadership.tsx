
import React from 'react';
import { Award } from 'lucide-react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface LeadershipProps {
  caliph: CaliphBiography;
  animationDelay?: string;
}

const Leadership: React.FC<LeadershipProps> = ({ caliph, animationDelay = '0.7s' }) => {
  return (
    <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay, transform: 'translateZ(10px)' }}>
      <div className="flex items-center mb-6">
        <Award className="text-gold mr-3" size={24} />
        <h2 className="text-2xl font-semibold font-cinzel text-white">Leadership Style</h2>
      </div>
      
      <p className="text-white/80 leading-relaxed mb-6">{caliph.leadershipStyle}</p>
      
      <h3 className="text-xl font-semibold text-gold-light mb-4">Notable Achievements</h3>
      <ul className="space-y-3">
        {caliph.achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3"></span>
            <span className="text-white/70">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leadership;
