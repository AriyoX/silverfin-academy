"use client"

import React from "react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";

export function EventsHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-images/dubai_2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Swimming
            <span className="block text-blue-400">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience the thrill of competitive swimming at Silverfin Academy. 
            Join us for exciting events, galas, and competitions that showcase 
            the best of aquatic sports in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Upcoming Events
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Event Calendar
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
