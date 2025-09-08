'use client';

import React from 'react';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { ErrorBoundary } from '../../../components/ui/ErrorBoundary';
import { ContactSection } from '../../../components/sections/ContactSection';
import { SquadPageContent } from './components';
import { Swimmer } from '../../../types';

interface SquadClientPageProps {
  swimmers: Swimmer[];
  squadType: 'learn-to-swim' | 'development' | 'performance';
}

const SquadClientPage: React.FC<SquadClientPageProps> = ({ swimmers, squadType }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <div className="min-h-screen">
          <SquadPageContent swimmers={swimmers} squadType={squadType} />
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default SquadClientPage;
