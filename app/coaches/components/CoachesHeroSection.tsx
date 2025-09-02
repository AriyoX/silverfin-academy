"use client";
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '../../components/ui/AnimatedSection';

// Updated Hero Section - Simple image with text
export const CoachesHeroSection: React.FC = () => (
  <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero-images/parents_2.jpg"
        alt="Silverfin Academy coaching staff"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <AnimatedSection animation="fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
          Our Coaches
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/95 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_70%)] font-medium">
          Expert Guidance, Passionate Teaching, Proven Results
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-8 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
          Meet our dedicated team of certified professionals who bring decades of experience 
          and a shared commitment to developing every swimmer&apos;s potential.
        </p>
      </AnimatedSection>
    </div>
  </div>
);