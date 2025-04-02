
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CaliphBiography } from '@/data/caliphBiographiesData';

interface HeroProps {
  caliph: CaliphBiography;
}

const Hero: React.FC<HeroProps> = ({ caliph }) => {
  return (
    <div 
      className="relative h-[60vh] overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, rgba(9, 18, 31, 0.7), rgba(9, 18, 31, 0.95)), url(${caliph.mainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-islamic-black/30"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        <Link to="/#caliphs" className="flex items-center text-gold hover:text-gold-light mb-6 transition-colors w-fit">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Caliphs</span>
        </Link>
        
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-arabic text-gold-light mb-2 opacity-80">{caliph.arabicName}</h2>
        </div>
        
        <h1 
          className="text-4xl md:text-6xl font-bold font-cinzel text-white mb-3 transform-3d animate-fade-in"
          style={{ 
            transform: 'translateZ(50px)',
            textShadow: '0 5px 20px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.3)'
          }}
        >
          {caliph.name}
        </h1>
        
        <div className="flex items-center space-x-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-lg md:text-xl font-cinzel text-gold-light">{caliph.title}</span>
          <span className="w-1 h-1 rounded-full bg-gold/50"></span>
          <span className="text-white/60">{caliph.years}</span>
        </div>
        
        <p className="max-w-2xl text-white/80 text-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {caliph.background}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-islamic-black to-transparent"></div>
    </div>
  );
};

export default Hero;
