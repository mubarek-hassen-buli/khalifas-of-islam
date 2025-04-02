
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useToast } from '@/components/ui/use-toast';
import { experts, Expert } from '@/data/expertsData';
import ExpertHero from '@/components/expert/ExpertHero';
import ExpertSidebar from '@/components/expert/ExpertSidebar';
import ExpertNavigation from '@/components/expert/ExpertNavigation';
import ExpertContent from '@/components/expert/ExpertContent';
import NotFound from '@/components/caliph/NotFound';

const ExpertBiography = () => {
  const { slug } = useParams<{ slug: string }>();
  const [expert, setExpert] = useState<Expert | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('biography');
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the expert based on the slug
    const selectedExpert = experts.find(e => e.slug === slug);
    
    if (selectedExpert) {
      setExpert(selectedExpert);
      setLoading(false);
    } else {
      toast({
        title: "Scholar not found",
        description: "We couldn't find information for this scholar.",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [slug, toast]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-islamic-black flex items-center justify-center">
        <div className="text-gold-light text-xl animate-pulse">Loading scholar profile...</div>
      </div>
    );
  }
  
  if (!expert) {
    return <NotFound />;
  }
  
  return (
    <div className="min-h-screen bg-islamic-black perspective">
      <Navbar />
      
      <ExpertHero expert={expert} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ExpertSidebar expert={expert} />
          
          {/* Navigation - Only visible on mobile in sidebar, visible for desktop */}
          <div className="lg:hidden mb-6">
            <ExpertNavigation 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          </div>
          
          {/* Desktop Navigation - Only visible on desktop */}
          <div className="hidden lg:block">
            <ExpertNavigation 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          </div>
          
          <ExpertContent expert={expert} activeSection={activeSection} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExpertBiography;
