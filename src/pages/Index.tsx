
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CaliphsSection from '@/components/CaliphsSection';
import PracticesSection from '@/components/PracticesSection';
import HistorySection from '@/components/HistorySection';
import ExpertsSection from '@/components/ExpertsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-islamic-black">
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
