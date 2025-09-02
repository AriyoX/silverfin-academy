'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ErrorBoundary } from "../components/ui/ErrorBoundary";
import { ContactSection } from "../components/sections/ContactSection";
import { Section } from "../components/ui/Section";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";
import { PROGRAMS, FACILITIES } from "../constants";
import { ArrowRight, Clock, Users, Target, Award } from "lucide-react";

const ProgramsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Swimming Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              From your first splash to elite competition, discover the perfect program 
              to unlock your swimming potential with expert coaching and world-class facilities.
            </p>
            <Button 
              variant="white" 
              size="xl"
              onClick={() => document.getElementById('programs-overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Programs
            </Button>
          </AnimatedSection>
        </div>
      </Section>

      {/* Programs Overview */}
      <Section id="programs-overview" className="bg-white">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Programs</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Training Pathways for Every Swimmer
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Whether you&apos;re taking your first strokes or training for international competition, 
              our progressive program structure ensures every swimmer finds their perfect fit.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {PROGRAMS.map((program, index) => (
            <AnimatedSection key={program.id} animation="fadeIn" delay={200 + index * 100}>
              <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4">{program.title}</h3>
                  <p className="text-secondary mb-6">{program.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-secondary">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{program.ageGroup} years old</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-secondary">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{program.meta.split('•')[1]?.trim()}</span>
                    </div>
                    {program.price && (
                      <div className="flex items-center gap-3 text-sm text-secondary">
                        <span className="text-primary font-semibold">
                          UGX {program.price.toLocaleString()} / {program.duration}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <Link href={`/programs/${program.id}`}>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Program Features */}
        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Silverfin Programs?</h3>
              <p className="text-secondary max-w-2xl mx-auto">
                Our programs are designed with proven methodologies and personalized attention 
                to ensure every swimmer reaches their full potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Personalized Training</h4>
                <p className="text-sm text-secondary">
                  Individual attention and customized training plans for optimal development
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Expert Coaching</h4>
                <p className="text-sm text-secondary">
                  Certified coaches with international experience and proven track records
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Supportive Community</h4>
                <p className="text-sm text-secondary">
                  Welcoming environment that fosters friendships and team spirit
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Flexible Scheduling</h4>
                <p className="text-sm text-secondary">
                  Multiple session times to fit your busy lifestyle and commitments
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Facilities & Coaches Preview */}
      <Section className="bg-primary/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">World-Class Facilities</h3>
              <p className="text-secondary mb-8">
                Train in Uganda&apos;s premier aquatic facility with Olympic-standard equipment 
                and technology to support your swimming journey.
              </p>
              
              <div className="space-y-4">
                {FACILITIES.slice(0, 3).map((facility, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-secondary/20">
                    <h4 className="font-semibold text-primary mb-2">{facility.name}</h4>
                    <p className="text-sm text-secondary">{facility.description}</p>
                  </div>
                ))}
              </div>
              
              <Link href="/about#facilities">
                <Button variant="outline" className="mt-6">
                  View All Facilities
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight">
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image 
                  src="/hero-images/swimmer_3.jpg" 
                  alt="Silverfin Academy swimming pool" 
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/2] overflow-hidden rounded-xl">
                  <Image 
                    src="/hero-images/swimmer_4.jpg" 
                    alt="Training equipment" 
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[3/2] overflow-hidden rounded-xl">
                  <Image 
                    src="/hero-images/pentathlon_2.jpg" 
                    alt="Coaching session" 
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <AnimatedSection animation="fadeIn">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Swimming Journey?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join Silverfin Academy today and discover the perfect program to unlock your potential. 
              Book a free assessment to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="white" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Free Assessment
              </Button>
              <Link href="/contact">
                <Button variant="hero-outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default ProgramsPage;
