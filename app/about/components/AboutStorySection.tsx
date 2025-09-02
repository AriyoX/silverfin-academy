import React from "react";
import Image from "next/image";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";

export const AboutStorySection: React.FC = () => (
  <Section id="story" className="bg-white">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <AnimatedSection animation="slideInLeft">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            A Decade of Excellence in Aquatic Sports
          </h2>
          <div className="mt-6 space-y-4 text-secondary">
            <p>
              Founded in 2015, Silverfin Academy began as a small swimming club with a big dream: 
              to create a world-class aquatic training facility in the heart of Uganda. What started 
              with just a handful of passionate swimmers has grown into the country&apos;s premier swimming academy.
            </p>
            <p>
              Our journey has been marked by countless achievements, from our first regional 
              championship win to representing Uganda at prestigious international competitions. From the 
              vibrant pools of the Dubai Open Championships to the competitive waters of the Kenyan Nationals 
              and the renowned Mako Sharks Gala in Kenya, our swimmers have made their mark on the continental stage.
            </p>
            <p>
              Beyond international competition, we take pride in hosting our own spectacular events, including 
              our celebrated Annual Pentathlon that draws swimmers from across East Africa. These galas have 
              become cornerstone events in Uganda&apos;s aquatic calendar, showcasing not just our swimmers&apos; 
              talents but our commitment to elevating the sport throughout the region.
            </p>
            <p>
              Today, we continue to uphold our founding principles: excellence in training, 
              commitment to safety, and fostering a supportive environment where every swimmer 
              can reach their full potential – whether they&apos;re preparing for their first local gala 
              or aiming for international podiums.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="slideInRight" delay={300}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <Image 
                src="/hero-images/swimmer_2.jpg" 
                alt="Early days of Silverfin Academy" 
                width={300}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden rounded-xl">
              <Image 
                src="/hero-images/parents_1.jpg" 
                alt="Community engagement at Silverfin" 
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-[3/2] overflow-hidden rounded-xl">
              <Image 
                src="/hero-images/pentathlon_1.jpg" 
                alt="Training excellence" 
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <Image 
                src="/hero-images/nationals_1.jpg" 
                alt="Competition success" 
                width={300}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </Section>
);
