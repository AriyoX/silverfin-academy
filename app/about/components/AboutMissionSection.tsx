import React from "react";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { Target, Heart, Trophy, Users } from "lucide-react";

export const AboutMissionSection: React.FC = () => (
  <Section id="mission" className="bg-slate-50">
    <div className="text-center mb-12">
      <AnimatedSection animation="fadeIn">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Purpose</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Mission, Vision & Values
        </h2>
      </AnimatedSection>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <AnimatedSection animation="fadeIn" delay={200}>
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-secondary/20">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-3">Mission</h3>
          <p className="text-secondary text-sm">
            To nurture high performing athletes, promote health and fitness through excellence in aquatic sports.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={300}>
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-secondary/20">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-3">Vision</h3>
          <p className="text-secondary text-sm">
            To be Africa&apos;s leading swimming academy, developing world-class athletes and inspiring lifelong aquatic excellence.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={400}>
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-secondary/20">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-3">Excellence</h3>
          <p className="text-secondary text-sm">
            We strive for the highest standards in coaching, training, and athlete development at every level.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={500}>
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-secondary/20">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-3">Community</h3>
          <p className="text-secondary text-sm">
            We foster an inclusive, supportive environment where every swimmer can thrive and reach their potential.
          </p>
        </div>
      </AnimatedSection>
    </div>

    <div className="mt-16">
      <AnimatedSection animation="fadeIn" delay={600}>
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Building Champions for Life
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our commitment extends beyond the pool. We develop not just exceptional swimmers, 
            but confident, disciplined individuals who carry the values of hard work, 
            perseverance, and teamwork into every aspect of their lives.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </Section>
);
