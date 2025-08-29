"use client"

import React from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { StatsSection } from "./components/sections/StatsSection";
import { ProgramsSection } from "./components/sections/ProgramsSection";
import { NewsSection } from "./components/sections/NewsSection";
import { GallerySection } from "./components/sections/GallerySection";
import { ContactSection } from "./components/sections/ContactSection";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProgramsSection />
        <NewsSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}