import React from "react";
import Image from "next/image";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { MapPin, Trophy, Users } from "lucide-react";

const competitions = [
  {
    name: "Dubai Open Championships",
    location: "Dubai, UAE",
    type: "International",
    description: "Annual participation with our top swimmers competing against world-class athletes",
    icon: MapPin,
    color: "bg-blue-500"
  },
  {
    name: "Kenyan Nationals",
    location: "Nairobi, Kenya",
    type: "Regional",
    description: "Consistent presence with multiple finalists representing Uganda's finest",
    icon: Trophy,
    color: "bg-green-500"
  },
  {
    name: "Mako Sharks Gala",
    location: "Mombasa, Kenya", 
    type: "Invitational",
    description: "Premier East African gala where our swimmers consistently medal",
    icon: Users,
    color: "bg-purple-500"
  }
];

const galas = [
  {
    event: "Annual Pentathlon",
    description: "Our flagship international swimming pentathlon competition bringing together elite swimmers from across East Africa for this prestigious multi-event championship",
    frequency: "Yearly",
    highlight: "3 countries represented",
    stats: "1650+ swimmers competing"
  }
];

export const AboutCompetitionsSection: React.FC = () => (
  <Section id="competitions" className="bg-slate-50">
    <div className="text-center mb-12">
      <AnimatedSection animation="fadeIn">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Competitions & Galas</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Where Champions Are Made
        </h2>
        <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
          From hosting world-class galas in Uganda to competing on international stages across 
          Africa and beyond, we provide our swimmers with unparalleled competitive opportunities.
        </p>
      </AnimatedSection>
    </div>

    {/* International Competitions */}
    <div className="mb-16">
      <AnimatedSection animation="fadeIn" delay={200}>
        <h3 className="text-2xl font-bold text-primary text-center mb-8">International Stage</h3>
      </AnimatedSection>
      
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {competitions.map((comp, index) => (
          <AnimatedSection key={index} animation="fadeIn" delay={300 + index * 100}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary/20 h-full flex flex-col">
              <div className="flex items-start gap-4 flex-1">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${comp.color}/10 flex-shrink-0`}>
                  <comp.icon className={`h-6 w-6 ${comp.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-primary">{comp.name}</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {comp.type}
                    </span>
                  </div>
                  <p className="text-sm text-secondary mb-2 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {comp.location}
                  </p>
                  <p className="text-sm text-secondary flex-1">{comp.description}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="fadeIn" delay={600}>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h4 className="text-xl font-bold mb-2">International Excellence</h4>
          <p className="text-white/90">
            Our swimmers have represented Uganda at 15+ international competitions across Africa and beyond, 
            bringing home 60+ medals and setting new standards for Ugandan swimming excellence.
          </p>
        </div>
      </AnimatedSection>
    </div>

    {/* Hosted Galas */}
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
     <AnimatedSection animation="slideInLeft">
      <div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Annual Silverfin Pentathlon</h3>
          <p className="text-secondary mb-6">
            Our signature swimming gala featuring five events that bring together swimmers from across the region 
            for a day of competitive racing and aquatic excellence.
          </p>
          
          <div className="bg-white rounded-xl p-6 border border-secondary/20 mb-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">650</div>
                <div className="text-sm text-secondary">Athletes</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">31</div>
                <div className="text-sm text-secondary">Swimming Clubs</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-secondary">Countries</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {galas.map((gala, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-secondary/20">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold text-primary text-lg">{gala.event}</h4>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {gala.frequency}
                </span>
              </div>
              <p className="text-secondary mb-4">{gala.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Trophy className="h-4 w-4" />
                  <span>{gala.highlight}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Users className="h-4 w-4" />
                  <span>{gala.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>

      <AnimatedSection animation="slideInRight" delay={300}>
        <div className="space-y-4">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Image 
              src="/hero-images/pentathlon_1.jpg" 
              alt="Annual Pentathlon Gala" 
              width={600}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/2] overflow-hidden rounded-xl">
              <Image 
                src="/hero-images/dubai_1.jpg" 
                alt="Dubai Championships" 
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden rounded-xl">
              <Image 
                src="/hero-images/nationals_1.jpg" 
                alt="Regional Championships" 
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </Section>
);
