
import React from 'react';
import { Calendar, BookOpen } from 'lucide-react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface KeyInformationProps {
  caliph: CaliphBiography;
  animationDelay?: string;
}

const KeyInformation: React.FC<KeyInformationProps> = ({ caliph, animationDelay = '0.4s' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay, transform: 'translateZ(20px)' }}>
        <div className="flex items-center mb-4">
          <Calendar className="text-gold mr-3" size={20} />
          <h3 className="text-lg font-semibold text-white">Life Span</h3>
        </div>
        <p className="text-white/70">{caliph.lifespan}</p>
        <p className="text-white/70 mt-2">Born in {caliph.birthplace}</p>
      </div>
      
      <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.5s', transform: 'translateZ(20px)' }}>
        <div className="flex items-center mb-4">
          <BookOpen className="text-gold mr-3" size={20} />
          <h3 className="text-lg font-semibold text-white">Full Name</h3>
        </div>
        <p className="text-white/70">{caliph.fullName}</p>
      </div>
    </div>
  );
};

export default KeyInformation;
