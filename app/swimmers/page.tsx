'use client';

import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';
import { ContactSection } from '../components/sections/ContactSection';
import { Section } from '../components/ui/Section';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SquadSection, SwimmersHeroSection } from './components';
import { SWIMMERS } from '../constants';

const SwimmersPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Group swimmers by squad
  const learnToSwimSquad = SWIMMERS.filter(swimmer => swimmer.squad === 'learn-to-swim');
  const developmentSquad = SWIMMERS.filter(swimmer => swimmer.squad === 'development');
  const performanceSquad = SWIMMERS.filter(swimmer => swimmer.squad === 'performance');

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <div className="min-h-screen">
          {/* Hero Section */}
          <SwimmersHeroSection />
          
          <Section id="training-squads" className="bg-gray-50 py-16">
            <div className="text-center mb-12">
              <AnimatedSection animation="fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Training Squads
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our swimmers are organized into three progressive squads, each designed to meet 
                  athletes at their current level and help them reach their goals.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="space-y-16">
              <AnimatedSection animation="slideUp">
                <SquadSection
                  title="Learn to Swim"
                  description="Our youngest swimmers building water confidence, learning basic strokes, and developing a love for the water. Ages 4-10 with focus on safety, fun, and fundamental skills."
                  swimmers={learnToSwimSquad}
                  squadType="learn-to-swim"
                  maxDisplay={4}
                />
              </AnimatedSection>
              
              <AnimatedSection animation="slideUp">
                <SquadSection
                  title="Development Squad"
                  description="Intermediate swimmers refining technique, building endurance, and preparing for competitive swimming. Ages 9-14 with structured training and introduction to competition."
                  swimmers={developmentSquad}
                  squadType="development"
                  maxDisplay={4}
                />
              </AnimatedSection>
              
              <AnimatedSection animation="slideUp">
                <SquadSection
                  title="Performance Squad"
                  description="Elite swimmers training at the highest level for national and international competition. Ages 13+ with intensive training, advanced technique work, and professional support."
                  swimmers={performanceSquad}
                  squadType="performance"
                  maxDisplay={4}
                />
              </AnimatedSection>
            </div>
          </Section>
          
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default SwimmersPage;
