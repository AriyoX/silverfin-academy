import React from "react";
import Image from "next/image";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { COACHES } from "../../constants";
import { Award, BookOpen } from "lucide-react";

export const AboutTeamSection: React.FC = () => (
  <Section id="team" className="bg-white">
    <div className="text-center mb-12">
      <AnimatedSection animation="fadeIn">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Expert Coaches & Staff
        </h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
          Our world-class coaching team brings decades of experience, proven expertise, 
          and unwavering dedication to developing swimmers at every level.
        </p>
      </AnimatedSection>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-8">
      {COACHES.map((coach, index) => (
        <AnimatedSection key={coach.id} animation="fadeIn" delay={200 + index * 100}>
          <div className="relative bg-white rounded-2xl p-8 border border-secondary/20 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[550px] flex flex-col">
            <div className="w-40 h-40 mx-auto mb-6 relative group">
              <Image
                src="/hero-images/swimmer_1.jpg"
                alt={`${coach.name} - ${coach.title}`}
                fill
                className="object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                sizes="160px"
              />
              {/* Professional overlay badge */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-3 border-white shadow-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">{coach.name}</h3>
            <p className="text-primary/70 font-medium mb-4 text-lg">{coach.title}</p>
            <p className="text-secondary text-base mb-6 flex-grow">{coach.bio}</p>
            
            <div className="space-y-4 mt-auto">
              <div className="flex items-center justify-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                <span className="text-base font-medium">Certifications</span>
              </div>
              <div className="space-y-2">
                {coach.certifications?.map((cert, certIndex) => (
                  <div key={certIndex} className="bg-slate-50 rounded-lg px-4 py-3">
                    <span className="text-sm text-secondary font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>

   <div className="mt-12">
    <AnimatedSection animation="fadeIn" delay={600}>
      <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-secondary/20 hover:shadow-lg transition-all duration-300">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Excellence</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          Join Our Coaching Excellence
        </h3>
        <p className="text-lg text-secondary mb-6 max-w-2xl mx-auto">
          Our coaching philosophy combines technical expertise with personalized attention,
          ensuring every swimmer receives the guidance they need to excel.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-300">
            <div className="text-3xl font-bold mb-1 text-primary">4</div>
            <div className="text-sm text-secondary">Core Coaches</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-300">
            <div className="text-3xl font-bold mb-1 text-primary">30+</div>
            <div className="text-sm text-secondary">Years Combined Experience</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-300">
            <div className="text-3xl font-bold mb-1 text-primary">100%</div>
            <div className="text-sm text-secondary">Certified Coaches</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-300">
            <div className="text-3xl font-bold mb-1 text-primary">24/7</div>
            <div className="text-sm text-secondary">Support Available</div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
  </Section>
);