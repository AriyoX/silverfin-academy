"use client"

import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ErrorBoundary } from "../../components/ui/ErrorBoundary";
import { ContactSection } from "../../components/sections/ContactSection";
import {
  EventsHeroSection,
  UpcomingEventsSection,
  FeaturedEventSection,
  PastEventsSection,
  EventsCalendarSection
} from ".";

export function EventsPageContent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <EventsHeroSection />
        <FeaturedEventSection />
        <UpcomingEventsSection />
        <EventsCalendarSection />
        <PastEventsSection />
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
