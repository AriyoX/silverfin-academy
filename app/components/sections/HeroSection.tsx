import React from "react";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";

export const HeroSection: React.FC = () => (
  <section className="relative w-full min-h-screen">
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#17236c20,transparent_40%),radial-gradient(circle_at_80%_0%,#71736f15,transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-16 pb-32 md:grid-cols-2 md:px-6 md:pt-20 md:pb-40 lg:pt-24 lg:pb-48">
        <AnimatedSection animation="slideInLeft">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-primary md:text-7xl lg:text-8xl">
              Be part of a team that gives you more.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-secondary md:text-xl lg:text-2xl">
              Join Silverfin Academy and unlock swimming excellence with world‑class coaching, 
              supportive community, and pathways from learn‑to‑swim to elite squads.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Our Club
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="slideInRight" delay={300}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary/10 shadow-inner md:aspect-[16/10] lg:aspect-[5/3] border border-secondary/20">
            <div className="flex h-full w-full items-center justify-center text-secondary text-xl">
              Hero Image / Video
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);