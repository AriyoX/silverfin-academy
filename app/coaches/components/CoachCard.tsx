"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Coach } from '../../types';

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
          Unified Coaching. Individual Progress. Lasting Results.
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-8 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
          Meet our dedicated team of certified professionals who bring decades of experience 
          and a shared commitment to developing every swimmer&apos;s potential.
        </p>
      </AnimatedSection>
    </div>
  </div>
);

// Detailed Coach Card for featured coaches (first 2)
interface DetailedCoachCardProps {
  coach: Coach;
  isReversed?: boolean;
}

export const DetailedCoachCard: React.FC<DetailedCoachCardProps> = ({ coach, isReversed = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
    {/* Coach Image */}
    <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
          {coach.imageUrl ? (
            <Image
              src={coach.imageUrl}
              alt={`${coach.name} - ${coach.title}`}
              fill
              className="object-cover rounded-2xl"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Coach Details */}
    <div className={`space-y-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {coach.name.toUpperCase()}
        </h2>
        <p className="text-lg text-secondary font-medium mb-4">
          {coach.title}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Email: {coach.email || `${coach.name.toLowerCase().replace(' ', '.')}@silverfin.ac.ug`}
        </p>
      </div>

      {/* Bio/Description */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>{coach.bio}</p>
        
        {coach.background && (
          <div>
            <h4 className="font-semibold text-primary mb-2">Background:</h4>
            <div className="space-y-1 text-sm">
              {coach.background.split('\n').map((line: string, idx: number) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        )}

        {/* Quote */}
        {coach.quote && (
          <div className="border-l-4 border-primary pl-4 italic text-gray-600">
            &ldquo;{coach.quote}&rdquo;
          </div>
        )}
      </div>
    </div>
  </div>
);

// [REVISED] Expandable Coach Card Component
interface ExpandableCoachCardProps {
  coach: Coach;
}

export const ExpandableCoachCard: React.FC<ExpandableCoachCardProps> = ({ coach }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out overflow-hidden group ${isExpanded ? 'shadow-2xl' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      {/* --- COMPACT/HEADER VIEW --- */}
      <div className="relative cursor-pointer">
        {/* Coach Image */}
        <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
          {coach.imageUrl ? (
            <Image
              src={coach.imageUrl}
              alt={`${coach.name} - ${coach.title}`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded-full" />
              </div>
            </div>
          )}
        </div>

        {/* Coach Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
          <p className="text-white/90 text-sm mb-3">{coach.title}</p>
          
          {/* Expand/Collapse Button */}
          <div
            className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          >
            {isExpanded ? <X className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
          </div>
        </div>
      </div>

      {/* --- EXPANDED CONTENT --- */}
      {/* This div's height is animated via `max-h` for a smooth transition */}
      <div 
        className={`transition-all duration-700 ease-in-out grid ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden"> {/* This inner div prevents content from overflowing during the animation */}
          <div className="p-8 space-y-7">
              {/* Contact Section */}
              <section>
                <h3 className="mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase">Contact</h3>
                <p className="text-base text-gray-800 break-words">
                  {coach.email || `${coach.name.toLowerCase().replace(' ', '.')}@silverfin.ac.ug`}
                </p>
              </section>

              {/* About Section */}
              {coach.bio && (
                <section>
                  <h3 className="mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase">About</h3>
                  <p className="text-base leading-relaxed text-gray-700">{coach.bio}</p>
                </section>
              )}

              {/* Background Section */}
              {coach.background && (
                <section>
                  <h3 className="mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase">Background</h3>
                  <div className="space-y-2 text-base leading-relaxed text-gray-700">
                    {coach.background.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Certifications Section */}
              {coach.certifications && coach.certifications.length > 0 && (
                <section>
                  <h3 className="mb-2 text-sm font-bold tracking-widest text-gray-500 uppercase">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {coach.certifications.map((cert, idx) => (
                      <span key={idx} className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Philosophy/Quote Section */}
              {coach.quote && (
                <section>
                  <h3 className="mb-3 text-sm font-bold tracking-widest text-gray-500 uppercase">Philosophy</h3>
                  <blockquote className="p-4 italic text-gray-800 border-l-4 border-gray-300 bg-gray-50">
                    &ldquo;{coach.quote}&rdquo;
                  </blockquote>
                </section>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};