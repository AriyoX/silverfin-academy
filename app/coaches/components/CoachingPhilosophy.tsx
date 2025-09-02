"use client";
import React from 'react';
import { Heart, Target, Shield, Users } from 'lucide-react';
import { AnimatedSection } from '../../components/ui/AnimatedSection';

export const CoachingPhilosophy: React.FC = () => {
  const principles = [
    {
      icon: Heart,
      title: 'Passion for Development',
      description: 'We believe every swimmer has unique potential. Our coaches are passionate about unlocking that potential through personalized attention and encouragement.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'Whether learning to float or training for nationals, we set clear, achievable goals and create structured pathways to success.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Water safety and proper technique form the foundation of everything we teach. We build confidence through competence.'
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Our coaches foster an inclusive environment where every swimmer feels valued, supported, and motivated to achieve their best.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Coaching Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Silverfin Academy, our coaching philosophy centers on developing the whole swimmer - 
              building technical excellence, mental resilience, and life-long love for the sport.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <AnimatedSection key={principle.title} animation="fadeIn" delay={200 + index * 100}>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {principle.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={800}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Why Choose Our Coaching Team?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex flex-col h-full">
                <h4 className="font-semibold text-primary mb-3">Proven Experience</h4>
                <p className="text-gray-600 text-sm flex-grow">
                  Our coaches have trained swimmers who have competed at national and international levels, 
                  bringing championship-level expertise to every lesson.
                </p>
              </div>
              <div className="flex flex-col h-full">
                <h4 className="font-semibold text-primary mb-3">Continuous Learning</h4>
                <p className="text-gray-600 text-sm flex-grow">
                  We stay current with the latest coaching techniques, safety protocols, and swimming 
                  innovations through ongoing professional development.
                </p>
              </div>
              <div className="flex flex-col h-full">
                <h4 className="font-semibold text-primary mb-3">Individual Attention</h4>
                <p className="text-gray-600 text-sm flex-grow">
                  Small coach-to-swimmer ratios ensure personalized feedback, customized training plans, 
                  and the attention every swimmer deserves.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
