import React from "react";
import { Section } from "../ui/Section";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Phone } from "lucide-react";

export const AboutSection: React.FC = () => (
  <Section id="about">
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
      <AnimatedSection animation="slideInLeft">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">About Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            We are a swimming club in Uganda
          </h2>
          <p className="mt-4 text-gray-600">
            With 10 years of excellence in aquatic sports, Silverfin Academy has been nurturing swimmers 
            and building champions across Uganda. We are dedicated to developing high-performing athletes 
            while promoting health, fitness, and a lifelong love for swimming in our community.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimatedSection animation="fadeIn" delay={200}>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h4 className="font-semibold text-gray-900">Mission</h4>
                <p className="mt-2 text-sm text-gray-600">
                  To nurture high performing athletes, promote health and fitness through excellence in aquatic sports.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" delay={400}>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h4 className="font-semibold text-gray-900">Experience</h4>
                <p className="mt-2 text-sm text-gray-600">
                  10 years of developing champions and building Uganda&apos;s premier swimming community.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-6 flex items-center gap-2 text-blue-600">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">More Info: +256 709 711 797</span>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slideInRight" delay={300}>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
          <div className="flex h-full items-center justify-center text-gray-400">About Image</div>
        </div>
      </AnimatedSection>
    </div>
  </Section>
);