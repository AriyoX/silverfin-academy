"use client";
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactSection } from '../components/sections/ContactSection';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { CoachingPhilosophy } from './components/CoachingPhilosophy';
import { 
  CoachesHeroSection, 
  DetailedCoachCard, 
  ExpandableCoachCard 
} from './components';
import { COACHES, getFeaturedCoaches } from '../constants';

export default function CoachesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Split coaches into featured (first 2) and others
  const featuredCoaches = getFeaturedCoaches(2);
  const otherCoaches = COACHES.slice(2);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Hero Section */}
      <CoachesHeroSection />

      {/* Featured Coaches Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeIn" delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Head Coaches
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our head coaches provide program vision, mentor the wider coaching team, and
                drive performance standards across every lane at Silverfin Academy.
              </p>
            </AnimatedSection>
          </div>

          {/* Featured Coaches - Detailed Layout */}
          <div className="space-y-20">
            {featuredCoaches.map((coach, index) => (
              <AnimatedSection 
                key={coach.id} 
                animation="fadeIn" 
                delay={200 + index * 200}
              >
                <DetailedCoachCard 
                  coach={coach} 
                  isReversed={index % 2 === 1}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Coaches Section */}
      {otherCoaches.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-16">
              <AnimatedSection animation="fadeIn" delay={0}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Coaching Team
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Fully qualified coaches who deliver day‑to‑day training, skill development,
                  and positive swimmer experiences across every stage—from first lessons to
                  competitive performance.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherCoaches.map((coach, index) => (
                <AnimatedSection 
                  key={coach.id} 
                  animation="fadeIn" 
                  delay={200 + index * 100}
                >
                  <ExpandableCoachCard coach={coach} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coaching Philosophy */}
      <CoachingPhilosophy />

      {/* Professional Development Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <AnimatedSection animation="fadeIn" delay={0}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Professional Development &amp; Training
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our coaches regularly participate in advanced training programs, coaching clinics, 
                  and certification courses to stay at the forefront of swimming instruction and technique.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeIn" delay={200}>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Technical Excellence
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    Regular workshops on stroke analysis, biomechanics, and performance optimization 
                    ensure our coaching methods remain cutting-edge.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeIn" delay={300}>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Safety Certification
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    All coaches maintain current CPR, First Aid, and Water Safety certifications, 
                    with mandatory annual refresher training.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Athlete Psychology
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    Training in sports psychology and mental performance helps our coaches 
                    develop confident, resilient athletes both in and out of the pool.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}