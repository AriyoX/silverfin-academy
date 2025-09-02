import React from "react";
import Image from "next/image";
import { AnimatedSection } from "../../components/ui/AnimatedSection";

export const AboutHeroSection: React.FC = () => (
  <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero-images/nationals_1.jpg"
        alt="Silverfin Academy swimmers in action"
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
          About Silverfin Academy
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/95 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_70%)] font-medium">
          Building Champions, Creating Memories, Inspiring Excellence
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-8 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">
          For over a decade, we&apos;ve been Uganda&apos;s premier swimming academy,
          nurturing talent and fostering a love for aquatic sports in our community.
        </p>
      </AnimatedSection>
    </div>
  </div>
);