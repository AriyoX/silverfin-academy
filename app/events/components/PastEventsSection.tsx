"use client"

import React from "react";
import Image from "next/image";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { PAST_EVENTS } from "../../constants";
import { Event } from "../../types";

function PastEventCard({ event }: { event: Event }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image
          src={event.imageUrl || '/hero-images/swimmer_1.jpg'}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-blue-200">{formatDate(event.date)} • {event.venue}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="flex items-center text-gray-700 mb-4">
          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="font-semibold">{event.participants} participants</span>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Event Highlights</h4>
          <ul className="space-y-1">
            {event.highlights?.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {event.results && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Top Results</h4>
            <div className="space-y-2">
              {event.results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded">
                  <div>
                    <div className="font-medium text-gray-900">{result.category}</div>
                    <div className="text-gray-600">{result.winner}</div>
                  </div>
                  <div className="font-bold text-blue-600">{result.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            View Full Results
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors">
            Photos
          </button>
        </div>
      </div>
    </div>
  );
}

export function PastEventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the excitement of our previous swimming events and competitions. 
              See the incredible achievements of our swimmers.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PAST_EVENTS.map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 0.1}>
              <PastEventCard event={event} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Event Archive
            </button>
          </div>
        </AnimatedSection>

        {/* Achievement Stats */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Event Achievements</h3>
              <p className="text-blue-100">Our impact in numbers</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Events Hosted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Total Participants</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-blue-100">Pool Records Set</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-blue-100">Countries Represented</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
