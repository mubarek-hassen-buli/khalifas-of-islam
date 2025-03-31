
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 lg:px-8",
      isScrolled ? "bg-islamic-charcoal/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="relative w-10 h-10 mr-2">
            <div className="absolute inset-0 border-2 border-gold-light rounded-full opacity-60"></div>
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-xl font-bold gold-gradient font-cinzel">خ</span>
            </div>
          </div>
          <span className="font-cinzel text-xl font-semibold gold-gradient">KHILAFAH</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm text-white hover:text-gold-light transition-colors duration-200">Home</a>
          <a href="#caliphs" className="text-sm text-white hover:text-gold-light transition-colors duration-200">Caliphs</a>
          <a href="#practices" className="text-sm text-white hover:text-gold-light transition-colors duration-200">Practices</a>
          <a href="#history" className="text-sm text-white hover:text-gold-light transition-colors duration-200">History</a>
          <a href="#experts" className="text-sm text-white hover:text-gold-light transition-colors duration-200">Experts</a>
        </div>
        
        <button 
          className="md:hidden text-white hover:text-gold-light transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-islamic-black/95 backdrop-blur-md z-40 transition-transform duration-300 pt-16",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <a href="#" className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center" onClick={() => setIsMenuOpen(false)}>
            Home <ChevronRight size={20} className="text-gold-light" />
          </a>
          <a href="#caliphs" className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center" onClick={() => setIsMenuOpen(false)}>
            Caliphs <ChevronRight size={20} className="text-gold-light" />
          </a>
          <a href="#practices" className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center" onClick={() => setIsMenuOpen(false)}>
            Practices <ChevronRight size={20} className="text-gold-light" />
          </a>
          <a href="#history" className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center" onClick={() => setIsMenuOpen(false)}>
            History <ChevronRight size={20} className="text-gold-light" />
          </a>
          <a href="#experts" className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center" onClick={() => setIsMenuOpen(false)}>
            Experts <ChevronRight size={20} className="text-gold-light" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
