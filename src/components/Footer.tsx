
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-islamic-black border-t border-gold/10 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="relative w-8 h-8 mr-2">
                <div className="absolute inset-0 border border-gold-light rounded-full animate-rotate-slow opacity-60"></div>
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-lg font-bold gold-gradient font-cinzel">خ</span>
                </div>
              </div>
              <span className="font-cinzel text-lg font-semibold gold-gradient">KHILAFAH</span>
            </div>
            
            <p className="text-white/60 text-sm max-w-xs">
              Exploring the lives and legacies of the Four Rightly Guided Caliphs who led the Muslim community after Prophet Muhammad ﷺ.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gold-light font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-gold-light text-sm transition-colors">Home</a></li>
                <li><a href="#caliphs" className="text-white/60 hover:text-gold-light text-sm transition-colors">Caliphs</a></li>
                <li><a href="#practices" className="text-white/60 hover:text-gold-light text-sm transition-colors">Practices</a></li>
                <li><a href="#history" className="text-white/60 hover:text-gold-light text-sm transition-colors">History</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold-light font-semibold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-gold-light text-sm transition-colors">Articles</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold-light text-sm transition-colors">Books</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold-light text-sm transition-colors">Videos</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold-light text-sm transition-colors">Research</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gold-light font-semibold mb-4 text-sm">Subscribe</h4>
              <p className="text-white/60 text-sm mb-3">Get updates on new content and events</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-islamic-blue/30 border border-gold/20 rounded-l-md px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-light/50 w-full"
                />
                <button className="bg-gold-light/20 hover:bg-gold-light/30 text-gold-light px-3 py-2 rounded-r-md text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Khilafah. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/40 hover:text-gold-light text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-gold-light text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-gold-light text-xs transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
