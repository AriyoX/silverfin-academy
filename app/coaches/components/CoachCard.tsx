"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Plus } from 'lucide-react';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Coach } from '../../types';

// Updated Hero Section - Simple image with text
export const CoachesHeroSection: React.FC = () => (
  <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero-images/coaches_hero.jpg"
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

// Detailed Coach Card for featured coaches (first 2)
interface DetailedCoachCardProps {
  coach: Coach;
  isReversed?: boolean;
}

export const DetailedCoachCard: React.FC<DetailedCoachCardProps> = ({ coach, isReversed = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
    {/* Coach Image */}
    <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
      <div className="relative w-full max-w-md mx-auto">
        <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          {coach.imageUrl ? (
            <Image
              src={coach.imageUrl}
              alt={`${coach.name} - ${coach.title}`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <Star className="w-12 h-12 text-primary" />
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
        
        {/* Star Icon */}
        <div className="mb-6">
          <Star className="w-8 h-8 text-red-500 fill-current" />
        </div>
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

// Expandable Coach Card for other coaches
interface ExpandableCoachCardProps {
  coach: Coach;
}

export const ExpandableCoachCard: React.FC<ExpandableCoachCardProps> = ({ coach }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Collapsed View */}
      <div className="relative">
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
                <Star className="w-10 h-10 text-primary" />
              </div>
            </div>
          )}
        </div>

        {/* Coach Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
          <p className="text-white/90 text-sm mb-3">{coach.title}</p>
          
          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <Plus className={`w-5 h-5 text-primary transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 border-t border-gray-100">
          <div className="space-y-4">
            {/* Bio */}
            {coach.bio && (
              <p className="text-gray-600 leading-relaxed">{coach.bio}</p>
            )}

            {/* Background */}
            {coach.background && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Background:</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  {coach.background.split('\n').map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {coach.certifications && coach.certifications.length > 0 && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Certifications:</h4>
                <div className="space-y-1">
                  {coach.certifications.slice(0, 3).map((cert: string, certIndex: number) => (
                    <div
                      key={certIndex}
                      className="text-sm bg-gray-50 px-3 py-1 rounded text-gray-700"
                    >
                      {cert}
                    </div>
                  ))}
                  {coach.certifications.length > 3 && (
                    <p className="text-sm text-gray-500">
                      +{coach.certifications.length - 3} more certifications
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};