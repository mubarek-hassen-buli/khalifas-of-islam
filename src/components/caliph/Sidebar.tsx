
import React from 'react';
import { Link } from 'react-router-dom';
import { CaliphBiography, CaliphBiographiesData } from '@/data/caliphBiographiesData';

interface SidebarProps {
  caliph: CaliphBiography;
  allCaliphs: CaliphBiographiesData;
  currentSlug: string;
}

const Sidebar: React.FC<SidebarProps> = ({ caliph, allCaliphs, currentSlug }) => {
  return (
    <div className="space-y-8 order-first lg:order-last">
      {/* Sidebar Image */}
      <div className="relative animate-fade-in transform-3d" style={{ animationDelay: '0.5s', transform: 'translateZ(30px)' }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-xl blur-sm opacity-30"></div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img src={caliph.secondaryImage} alt={caliph.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-islamic-black/80 to-transparent"></div>
        </div>
      </div>
      
      {/* Notable Quotes */}
      <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.6s', transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-semibold font-cinzel text-white mb-4">Notable Quotes</h3>
        <div className="space-y-4">
          {caliph.quotes.map((quote, index) => (
            <div key={index} className="border-l-2 border-gold pl-4 py-1">
              <p className="text-white/80 italic">{quote}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Side Navigation */}
      <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 hidden lg:block sticky top-24 animate-fade-in transform-3d" style={{ animationDelay: '0.7s', transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-semibold font-cinzel text-white mb-4">View Other Caliphs</h3>
        <ul className="space-y-3">
          {Object.entries(allCaliphs).map(([bioSlug, bio]) => (
            <li key={bioSlug} className={bioSlug === currentSlug ? 'text-gold' : 'text-white/60'}>
              <Link to={`/caliph/${bioSlug}`} className="hover:text-gold transition-colors">
                {bio.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
