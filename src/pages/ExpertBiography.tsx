import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";
import { experts, Expert } from "@/data/expertsData";
import ExpertHero from "@/components/expert/ExpertHero";
import ExpertSidebar from "@/components/expert/ExpertSidebar";
import ExpertContent from "@/components/expert/ExpertContent";
import NotFound from "@/components/caliph/NotFound";
import DownloadButton from "@/components/ui/DownloadButton";

const ExpertBiography = () => {
  const { slug } = useParams<{ slug: string }>();
  const [expert, setExpert] = useState<Expert | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("biography");
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Find the expert based on the slug
    const selectedExpert = experts.find((e) => e.slug === slug);

    if (selectedExpert) {
      setExpert(selectedExpert);
      setLoading(false);
    } else {
      toast({
        title: "Scholar not found",
        description: "We couldn't find information for this scholar.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }, [slug, toast]);

  if (loading) {
    return (
      <div className="min-h-screen bg-islamic-black flex items-center justify-center">
        <div className="text-gold-light text-xl animate-pulse">
          Loading scholar profile...
        </div>
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

      {/* Main Content - Matches CaliphBiography layout */}
      <div className="container mx-auto px-6 py-16 relative">
        {expert.pdfDownload && (
          <div className="mb-8 text-right">
            <DownloadButton
              pdfPath={expert.pdfDownload}
              label={`Download ${expert.name}'s Biography`}
            />
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <ExpertContent expert={expert} activeSection={activeSection} />
          </div>

          <ExpertSidebar
            expert={expert}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExpertBiography;
