"use client"

import React from "react";
import Image from "next/image";
import { AnimatedSection } from "../../components/ui/AnimatedSection";

export function FeaturedEventSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Signature Event
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship swimming gala brings together the best swimmers from across the region
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <Image
                src="/hero-images/pentathlon_1.jpg"
                alt="Silverfin Swimming Gala"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Annual Swimming Gala</h3>
                <p className="text-blue-200">March 2025 • Kampala</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Silverfin Swimming Gala 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us for our most prestigious annual event featuring five exciting swimming 
                  events that showcase talent from across Uganda and the East African region.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong>Date:</strong> March 15-16, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Venue:</strong> Kampala Aquatic Center</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span><strong>Participants:</strong> 200+ swimmers</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Featured Events:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• 50m Freestyle</div>
                    <div>• 100m Butterfly</div>
                    <div>• 200m Backstroke</div>
                    <div>• 100m Breaststroke</div>
                    <div>• 4x100m Relay</div>
                    <div>• Mixed Medley Relay</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1">
                    Register Now
                  </button>
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition-colors flex-1">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
