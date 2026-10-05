import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollIndicator } from './components/ScrollIndicator';
import { AboutSection } from './components/AboutSection';
import { ProfessionalSection } from './components/ProfessionalSection';
import { ServicesSection } from './components/ServicesSection';
import { EmotionalRegulationSection } from './components/EmotionalRegulationSection';
import { SubstanceSupportSection } from './components/SubstanceSupportSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { WorkModal } from './components/WorkModal';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F5F1] text-[#11100F] font-sans antialiased overflow-x-hidden selection:bg-[#E8D8C5] selection:text-[#11100F]">
      {/* 01 — Floating Navbar */}
      <Navbar />

      <main id="main-content">
        {/* 02 — Hero */}
        <Hero />

        {/* 03 — Scroll Indicator */}
        <ScrollIndicator />

        {/* 04 & 05 — About / Introduction & Three Value Cards */}
        <AboutSection />

        {/* 06 & 07 — Professional / About Antonia & Highlights */}
        <ProfessionalSection onOpenWorkModal={() => setWorkModalOpen(true)} />

        {/* 08 — Services / Clinical Areas */}
        <ServicesSection />

        {/* 09 — Emotional Regulation */}
        <EmotionalRegulationSection />

        {/* 10 — Substance Use & Family / Co-dependency Support */}
        <SubstanceSupportSection />

        {/* 11 — Benefits / Why Psychological Support */}
        <BenefitsSection />

        {/* 12 — Process Timeline */}
        <ProcessTimeline />

        {/* 13 — FAQ */}
        <FaqSection />

        {/* 14 — Final CTA */}
        <FinalCtaSection />
      </main>

      {/* 15 — Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Modals */}
      <WorkModal
        isOpen={workModalOpen}
        onClose={() => setWorkModalOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
