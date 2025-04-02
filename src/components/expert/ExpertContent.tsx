
import React from 'react';
import { Expert } from '@/data/expertsData';
import ExpertBiographySection from './ExpertBiographySection';
import ExpertWorksSection from './ExpertWorksSection';
import ExpertLegacySection from './ExpertLegacySection';

interface ExpertContentProps {
  expert: Expert;
  activeSection: string;
}

const ExpertContent: React.FC<ExpertContentProps> = ({ expert, activeSection }) => {
  return (
    <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 md:p-8 transform-3d" style={{ transform: 'translateZ(15px)' }}>
      {activeSection === 'biography' && <ExpertBiographySection expert={expert} />}
      {activeSection === 'works' && <ExpertWorksSection expert={expert} />}
      {activeSection === 'legacy' && <ExpertLegacySection expert={expert} />}
    </div>
  );
};

export default ExpertContent;
