"use client"

import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ErrorBoundary } from "../../components/ui/ErrorBoundary";
import { ContactSection } from "../../components/sections/ContactSection";
import {
  AboutHeroSection,
  AboutStorySection,
  AboutMissionSection,
  AboutTeamSection,
  AboutCompetitionsSection,
  AboutFacilitiesSection,
  AboutAchievementsSection
} from ".";

export function AboutPageContent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutTeamSection />
        <AboutCompetitionsSection />
        <AboutFacilitiesSection />
        <AboutAchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
