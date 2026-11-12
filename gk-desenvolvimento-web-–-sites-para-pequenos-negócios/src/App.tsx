import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FloatingEmail } from './components/FloatingEmail';
import { BudgetModal } from './components/BudgetModal';
import { Footer } from './components/Footer';

export default function App() {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>(
    undefined
  );
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(
    undefined
  );
  const [modalSubject, setModalSubject] = useState<string | undefined>(undefined);

  const handleOpenBudgetModal = (subjectOrProject?: string) => {
    setModalSubject(subjectOrProject);
    setBudgetModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanForContact(planId);
    setBudgetModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar onOpenBudgetModal={() => handleOpenBudgetModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBudgetModal={() => handleOpenBudgetModal()} />

        {/* Stats Section */}
        <Stats />

        {/* About Section */}
        <About onOpenBudgetModal={() => handleOpenBudgetModal()} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Portfolio Section */}
        <Portfolio onOpenBudgetModal={(projectName) => handleOpenBudgetModal(projectName)} />

        {/* Pricing & Plans */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Testimonials */}
        <Testimonials />

        {/* Main Lead Capture Contact Form */}
        <ContactSection
          initialPlan={selectedPlanForContact}
          initialService={selectedServiceForContact}
        />
      </main>

      {/* Floating Email Button */}
      <FloatingEmail />

      {/* Quick Quote Request Modal */}
      <BudgetModal
        isOpen={budgetModalOpen}
        onClose={() => {
          setBudgetModalOpen(false);
          setModalSubject(undefined);
        }}
        presetPlan={selectedPlanForContact}
        presetSubject={modalSubject}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
