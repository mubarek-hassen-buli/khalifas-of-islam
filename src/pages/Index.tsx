
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CaliphsSection from '@/components/CaliphsSection';
import PracticesSection from '@/components/PracticesSection';
import HistorySection from '@/components/HistorySection';
import ExpertsSection from '@/components/ExpertsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Track mouse position for 3D effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    // Track scroll position for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-islamic-black overflow-x-hidden perspective"
      style={{ 
        perspective: '1500px',
      }}
    >
      <div 
        className="transform-3d relative w-full"
        style={{ 
          transform: `rotateX(${mousePosition.y * 2}deg) rotateY(${-mousePosition.x * 2}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Navbar />
        <HeroSection />
        <CaliphsSection />
        <PracticesSection />
        <HistorySection />
        <ExpertsSection />
        <Footer />

        {/* Floating particles in the background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden perspective" style={{ perspective: '1000px', zIndex: -1 }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gold-light/5"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translateZ(${-300 + Math.random() * 600}px)`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float-animation ${3 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
