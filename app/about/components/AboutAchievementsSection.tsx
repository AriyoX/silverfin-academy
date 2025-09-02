import React from "react";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { Button } from "../../components/ui/Button";
import { CLUB_STATS } from "../../constants";
import { Trophy, Medal, Star, Calendar, Plane, Users } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "Dubai Open Championships",
    description: "8 swimmers qualified, 3 finals reached",
    icon: Plane
  },
  {
    year: "2024", 
    title: "Annual Pentathlon Gala",
    description: "Hosted 200+ swimmers from 6 countries",
    icon: Users
  },
  {
    year: "2023",
    title: "Mako Sharks Gala, Kenya",
    description: "12 medals including 5 gold medals",
    icon: Trophy
  },
  {
    year: "2023",
    title: "Kenyan Nationals",
    description: "First Ugandan club with 6 finalists",
    icon: Medal
  },
  {
    year: "2022",
    title: "Regional Excellence Award",
    description: "Best Swimming Academy in East Africa",
    icon: Star
  },
  {
    year: "2021",
    title: "International Debut",
    description: "First overseas competition participation",
    icon: Calendar
  }
];

export const AboutAchievementsSection: React.FC = () => (
  <Section id="achievements" className="bg-slate-50">
    <div className="text-center mb-12">
      <AnimatedSection animation="fadeIn">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Achievements</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          A Legacy of Excellence
        </h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
          From hosting prestigious galas like our Annual Pentathlon to competing internationally 
          at Dubai Open Championships, Kenyan Nationals, and Mako Sharks Gala, our achievements 
          reflect our commitment to excellence both locally and globally.
        </p>
      </AnimatedSection>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-16">
      {CLUB_STATS.map((stat, index) => (
        <AnimatedSection key={index} animation="fadeIn" delay={200 + index * 100}>
          <div className="text-center bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-secondary">{stat.label}</div>
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* Timeline of Achievements */}
    <div className="mb-16">
      <AnimatedSection animation="fadeIn" delay={400}>
        <h3 className="text-2xl font-bold text-primary text-center mb-8">Recent Milestones</h3>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <AnimatedSection key={index} animation="fadeIn" delay={500 + index * 100}>
            <div className="bg-white rounded-2xl p-6 border border-secondary/20 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">{achievement.year}</div>
              <h4 className="font-semibold text-primary mb-2">{achievement.title}</h4>
              <p className="text-sm text-secondary">{achievement.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>

    <AnimatedSection animation="fadeIn" delay={800}>
  <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-secondary/20 hover:shadow-lg transition-all duration-300">
    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Your Future</p>
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
      Ready to Create Your Swimming Legacy?
    </h3>
    <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
      Join Silverfin Academy and become part of Uganda&apos;s most successful swimming program.
      From your first stroke to international competitions – we&apos;ll guide you every step of the way.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <Button 
        size="xl"
        className="w-full sm:w-auto"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="flex items-center justify-center gap-2">
          Start Your Journey
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </Button>
      <Button 
        variant="outline"
        size="xl"
        className="w-full sm:w-auto"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="flex items-center justify-center gap-2">
          Schedule a Trial
          <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>
      </Button>
    </div>
    <div className="text-center bg-slate-50 rounded-lg p-6 max-w-lg mx-auto">
      <p className="text-secondary text-base italic">
        &quot;Every champion was once a beginner who refused to give up&quot;
      </p>
    </div>
  </div>
</AnimatedSection>
  </Section>
);