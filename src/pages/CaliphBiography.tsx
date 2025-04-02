
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/caliph/Hero';
import KeyInformation from '@/components/caliph/KeyInformation';
import PersonalLife from '@/components/caliph/PersonalLife';
import Leadership from '@/components/caliph/Leadership';
import Challenges from '@/components/caliph/Challenges';
import DeathAndLegacy from '@/components/caliph/DeathAndLegacy';
import HistoricalContext from '@/components/caliph/HistoricalContext';
import Sidebar from '@/components/caliph/Sidebar';
import NotFound from '@/components/caliph/NotFound';
import { caliphBiographies } from '@/data/caliphBiographiesData';

const CaliphBiography = () => {
  const { slug } = useParams<{ slug: string }>();
  const bioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!slug || !caliphBiographies[slug as keyof typeof caliphBiographies]) {
    return <NotFound />;
  }
  
  const caliph = caliphBiographies[slug as keyof typeof caliphBiographies];
  
  return (
    <div className="bg-islamic-black min-h-screen">
      <Navbar />
      
      <Hero caliph={caliph} />
      
      {/* Biography Content */}
      <div className="container mx-auto px-6 py-16 relative" ref={bioRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <KeyInformation caliph={caliph} />
            <PersonalLife caliph={caliph} />
            <Leadership caliph={caliph} />
            <Challenges caliph={caliph} />
            <DeathAndLegacy caliph={caliph} />
            <HistoricalContext caliph={caliph} />
          </div>
          
          <Sidebar 
            caliph={caliph} 
            allCaliphs={caliphBiographies} 
            currentSlug={slug}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaliphBiography;
