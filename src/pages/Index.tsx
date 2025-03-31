
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CaliphsSection from '@/components/CaliphsSection';
import PracticesSection from '@/components/PracticesSection';
import HistorySection from '@/components/HistorySection';
import ExpertsSection from '@/components/ExpertsSection';
import Footer from '@/components/Footer';

const Index = () => {
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
  }, []);

  return (
    <div className="min-h-screen bg-islamic-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CaliphsSection />
      <PracticesSection />
      <HistorySection />
      <ExpertsSection />
      <Footer />
    </div>
  );
};

export default Index;
