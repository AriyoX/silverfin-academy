import React from "react";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";

export const HeroSection: React.FC = () => (
  <section className="relative w-full">
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#dbeafe,transparent_40%),radial-gradient(circle_at_80%_0%,#e5e7eb,transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <AnimatedSection animation="slideInLeft">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              Be part of a team that gives you more.
            </h1>
            <p className="mt-4 max-w-xl text-gray-600 md:text-lg">
              Join Silverfin Academy and unlock swimming excellence with world‑class coaching, 
              supportive community, and pathways from learn‑to‑swim to elite squads.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Our Club
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="slideInRight" delay={300}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner md:aspect-[16/10]">
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              Hero Image / Video
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);