'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ErrorBoundary } from "../../components/ui/ErrorBoundary";
import { ContactSection } from "../../components/sections/ContactSection";
import { Section } from "../../components/ui/Section";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { Button } from "../../components/ui/Button";
import { getCoachesByProgram } from "../../constants";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Waves,
  Trophy,
  Activity
} from "lucide-react";

const DevelopmentSquadsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const program = {
    title: "Development Squads",
    description: "Skill refinement and aerobic base with fun, progressive sets.",
    ageGroup: "9-14 years",
    frequency: "4-6 sessions per week",
    duration: "Monthly",
    levels: ["Development 1", "Development 2", "Pre-Competitive"]
  };

  const features = [
    {
      icon: Target,
      title: "Technique Refinement",
      description: "Focus on perfecting all four competitive strokes with video analysis and expert feedback"
    },
    {
      icon: TrendingUp,
      title: "Aerobic Development",
      description: "Progressive training sets designed to build endurance and cardiovascular fitness"
    },
    {
      icon: Trophy,
      title: "Competition Preparation",
      description: "Introduction to competitive swimming through fun internal galas and local meets"
    },
    {
      icon: Activity,
      title: "Dryland Training",
      description: "Strength and conditioning sessions to complement pool training and prevent injury"
    }
  ];

  const curriculum = [
    {
      level: "Development 1 (Ages 9-11)",
      focus: "Foundation Building",
      sessions: "4 sessions/week",
      skills: [
        "Perfect freestyle and backstroke technique",
        "Introduction to breaststroke and butterfly",
        "Basic diving and racing starts",
        "Aerobic base development (400-800m sets)",
        "Introduction to training equipment (kickboards, pull buoys)"
      ]
    },
    {
      level: "Development 2 (Ages 11-13)",
      focus: "Skill Advancement",
      sessions: "5 sessions/week",
      skills: [
        "Advanced stroke technique in all four strokes",
        "Racing turns and underwater skills",
        "Interval training and set structure",
        "Longer distance training (800-1200m sets)",
        "Goal setting and time standards"
      ]
    },
    {
      level: "Pre-Competitive (Ages 12-14)",
      focus: "Competition Readiness",
      sessions: "6 sessions/week",
      skills: [
        "Race pace training and time trials",
        "Advanced racing strategy",
        "Mental preparation and focus techniques",
        "Individual Medley (IM) training",
        "Regular competition participation"
      ]
    }
  ];

  const weeklySchedule = [
    { day: "Monday", session: "Technique & Aerobic Base", duration: "90 min" },
    { day: "Tuesday", session: "Stroke Development", duration: "90 min" },
    { day: "Wednesday", session: "Endurance Training", duration: "90 min" },
    { day: "Thursday", session: "Speed & Technique", duration: "90 min" },
    { day: "Friday", session: "Distance & Recovery", duration: "90 min" },
    { day: "Saturday", session: "Fun Training & Games", duration: "90 min" }
  ];

  const developmentCoaches = getCoachesByProgram('development-squads');

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
                Advanced Training Program
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Development Squads
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Take your swimming to the next level with structured training that builds technique, 
                endurance, and competitive spirit while maintaining the joy of swimming.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-white/90 mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Age Group</span>
                  </div>
                  <p className="font-semibold">{program.ageGroup}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-white/90 mb-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Training</span>
                  </div>
                  <p className="font-semibold">{program.frequency}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="white" 
                  size="xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Development
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="xl"
                  onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Training Plan
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image 
                  src="/hero-images/swimmer_2.jpg" 
                  alt="Development squad training at Silverfin Academy" 
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image 
                    src="/hero-images/nationals_1.jpg" 
                    alt="Competitive swimming training" 
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image 
                    src="/hero-images/pentathlon_1.jpg" 
                    alt="Team training sessions" 
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Program Features */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Program Features</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Structured Development Approach
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Our development program bridges the gap between learning to swim and competitive racing, 
              focusing on technique perfection and building swimming fitness.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fadeIn" delay={200 + index * 100}>
              <div className="text-center p-6 rounded-2xl bg-slate-50 border border-secondary/20 h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-sm text-secondary">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Training Levels */}
      <Section id="curriculum" className="bg-slate-50">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Training Levels</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Progressive Development Path
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Our three-level system ensures appropriate progression and challenge for every swimmer, 
              from foundation building to competition readiness.
            </p>
          </AnimatedSection>
        </div>

        <div className="space-y-8">
          {curriculum.map((level, index) => (
            <AnimatedSection key={index} animation="fadeIn" delay={200 + index * 100}>
              <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{level.level}</h3>
                        <p className="text-sm text-secondary">{level.focus}</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-semibold text-sm">{level.sessions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h4 className="font-semibold text-primary mb-4">Training Focus Areas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {level.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Weekly Schedule */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Training Schedule</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Weekly Training Program
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Structured weekly training schedule designed to develop all aspects of competitive swimming 
              while maintaining balance and preventing burnout.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn" delay={200}>
            <div className="bg-slate-50 rounded-2xl p-8 border border-secondary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeklySchedule.map((session, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-secondary/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-primary">{session.day}</h4>
                      <span className="text-sm text-secondary bg-primary/10 px-3 py-1 rounded-full">
                        {session.duration}
                      </span>
                    </div>
                    <p className="text-secondary">{session.session}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-secondary mb-4">
                  <strong>Training Times:</strong> Weekdays 5:00-6:30 PM • Saturdays 8:00-9:30 AM
                </p>
                <p className="text-sm text-secondary">
                  Schedule may vary by level. Individual training plans developed for each swimmer.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Coaching Team */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Expert Coaching</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Development Coaching Team
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Our experienced coaches specialize in youth development, combining technical expertise 
              with motivational coaching to inspire excellence.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {developmentCoaches.map((coach, index) => (
            <AnimatedSection key={coach.id} animation="fadeIn" delay={200 + index * 100}>
              <div className="bg-white rounded-2xl p-6 border border-secondary/20 text-center hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={coach.imageUrl || "/hero-images/swimmer_1.jpg"}
                    alt={`${coach.name} - ${coach.title}`}
                    fill
                    className="object-cover rounded-full border-4 border-primary/20"
                    sizes="96px"
                  />
                </div>
                
                <h3 className="font-bold text-primary mb-1">{coach.name}</h3>
                <p className="text-primary/70 text-sm mb-4">{coach.title}</p>
                
                {coach.bio && (
                  <p className="text-secondary text-sm mb-4">{coach.bio}</p>
                )}
                
                {coach.certifications && (
                  <div className="space-y-1">
                    {coach.certifications.slice(0, 2).map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center justify-center gap-2 text-xs text-secondary">
                        <Award className="h-3 w-3 text-primary" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Pricing & Membership */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Membership & Pricing</h3>
              
              <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm mb-8">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-primary mb-2">
                    Contact us for pricing
                  </h4>
                  <p className="text-secondary">per month</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-secondary">4-6 training sessions per week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-secondary">Access to all pool facilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-secondary">Dryland training sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-secondary">Competition entry support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-secondary">Progress tracking & feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-secondary">Team kit and equipment</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Assessment Required</h5>
                  <p className="text-sm text-secondary">
                    All new swimmers must pass a swimming assessment to ensure placement 
                    in the appropriate development level.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  className="flex-1"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Assessment
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="xl" className="flex-1">
                    Get More Info
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight">
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-8 border border-secondary/20">
                <h4 className="font-bold text-primary mb-6">Success Stories</h4>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-secondary text-sm mb-2">
                      &quot;My son joined Development 1 as a beginner and is now competing at national level. 
                      The progression is incredible!&quot;
                    </p>
                    <p className="text-xs text-secondary/70">- Peter M., Parent</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-secondary text-sm mb-2">
                      &quot;The coaches really focus on technique and building confidence. 
                      My daughter loves coming to training!&quot;
                    </p>
                    <p className="text-xs text-secondary/70">- Grace A., Parent</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary rounded-xl p-6 text-white">
                <h4 className="font-bold mb-4">Development Squad Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Waves className="h-4 w-4" />
                    <span>Master all four competitive strokes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    <span>Compete in local and regional meets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Build lifelong friendships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Develop discipline and goal-setting skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-slate-50">
        <AnimatedSection animation="fadeIn">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Take Your Swimming to the Next Level?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our Development Squads and experience structured training that builds champions. 
              Book your assessment today and start your competitive swimming journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="white" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Development - Contact us
              </Button>
              <Link href="/programs">
                <Button variant="hero-outline" size="xl">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Explore Other Programs
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default DevelopmentSquadsPage;
