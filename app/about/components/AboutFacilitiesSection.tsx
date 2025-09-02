import React from "react";
import Image from "next/image";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { FACILITIES } from "../../constants";
import { CheckCircle, Waves, Dumbbell, Camera } from "lucide-react";

const facilityIcons = {
  "8‑lane 25m pool": Waves,
  "Strength & Conditioning space": Dumbbell,
  "Video analysis": Camera,
};

export const AboutFacilitiesSection: React.FC = () => (
  <Section id="facilities" className="bg-white">
    <div className="text-center mb-12">
      <AnimatedSection animation="fadeIn">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Facilities</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          World-Class Training Environment
        </h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
          Our state-of-the-art facilities provide everything needed for swimmers to train, 
          compete, and excel at the highest levels.
        </p>
      </AnimatedSection>
    </div>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mb-16">
      <AnimatedSection animation="slideInLeft">
        <div className="space-y-8">
          {FACILITIES.map((facility, index) => {
            const IconComponent = facilityIcons[facility.name as keyof typeof facilityIcons] || Waves;
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-secondary/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">{facility.name}</h3>
                    <p className="text-secondary mb-3">{facility.description}</p>
                    <div className="space-y-1">
                      {facility.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slideInRight" delay={300}>
        <div className="space-y-4">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Image 
              src="/hero-images/swimmer_3.jpg" 
              alt="Silverfin Academy pool facilities" 
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
                alt="Conditioning facilities" 
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>

    <AnimatedSection animation="fadeIn" delay={600}>
      <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-secondary/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Facility Highlights
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">25m</div>
            <div className="text-sm text-secondary">Olympic Standard Pool</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-secondary">Training Lanes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-secondary">Access Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-secondary">Climate Controlled</div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </Section>
);