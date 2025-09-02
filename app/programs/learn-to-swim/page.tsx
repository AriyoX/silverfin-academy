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
import { COACHES } from "../../constants";
import { 
  Waves, 
  Shield, 
  Heart, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const LearnToSwimPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const program = {
    title: "Learn to Swim",
    description: "Water confidence, safety, and foundational technique for beginners.",
    ageGroup: "4-10 years",
    frequency: "Weekdays",
    price: 150000,
    duration: "4 weeks",
    sessions: "3 sessions per week"
  };

  const features = [
    {
      icon: Shield,
      title: "Water Safety First",
      description: "Comprehensive water safety education and confidence building in aquatic environments"
    },
    {
      icon: Heart,
      title: "Patient Instruction",
      description: "Gentle, encouraging teaching methods designed specifically for young learners"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 6 students per instructor ensuring personalized attention for every child"
    },
    {
      icon: Waves,
      title: "Fun Learning Environment",
      description: "Games and activities that make learning to swim enjoyable and stress-free"
    }
  ];

  const curriculum = [
    {
      level: "Level 1: Water Familiarization",
      skills: [
        "Entering and exiting the pool safely",
        "Floating on back and front with support",
        "Submersion and blowing bubbles",
        "Basic water safety rules"
      ]
    },
    {
      level: "Level 2: Basic Swimming",
      skills: [
        "Independent floating",
        "Basic freestyle arm movements",
        "Kicking techniques",
        "Treading water basics"
      ]
    },
    {
      level: "Level 3: Stroke Development",
      skills: [
        "Coordinated freestyle swimming",
        "Introduction to backstroke",
        "Breathing techniques",
        "Swimming 10-15 meters independently"
      ]
    },
    {
      level: "Level 4: Confidence Building",
      skills: [
        "Swimming 25 meters continuously",
        "Basic rescue techniques",
        "Introduction to breaststroke",
        "Diving from pool edge"
      ]
    }
  ];

  const learnToSwimCoaches = COACHES.filter(coach => 
    coach.title.includes('Learn to Swim') || coach.name === 'Mugisha Jacob'
  );

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
                Swimming Program
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Learn to Swim
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Build water confidence, master essential safety skills, and develop foundational 
                swimming techniques in our supportive, fun-filled learning environment.
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
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-semibold">{program.duration} course</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="white" 
                  size="xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enroll Now
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="xl"
                  onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Curriculum
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image 
                  src="/hero-images/swimmer_1.jpg" 
                  alt="Children learning to swim at Silverfin Academy" 
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image 
                    src="/hero-images/parents_1.jpg" 
                    alt="Safe swimming environment" 
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image 
                    src="/hero-images/parents_2.jpg" 
                    alt="Fun swimming lessons" 
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
              Why Choose Our Learn to Swim Program?
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Our proven methodology combines safety, fun, and progressive skill development 
              to give your child the best possible start in swimming.
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

      {/* Curriculum */}
      <Section id="curriculum" className="bg-slate-50">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Curriculum</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Progressive Learning Path
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Our structured curriculum ensures steady progress from first splash to confident swimming, 
              with each level building upon the previous one.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {curriculum.map((level, index) => (
            <AnimatedSection key={index} animation="fadeIn" delay={200 + index * 100}>
              <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-primary">{level.level}</h3>
                </div>
                
                <div className="space-y-3">
                  {level.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Instructors */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Expert Instructors</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Meet Your Swimming Instructors
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
              Our certified instructors specialize in teaching children and beginners, 
              creating a safe and encouraging environment for learning.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {learnToSwimCoaches.map((coach, index) => (
            <AnimatedSection key={coach.id} animation="fadeIn" delay={200 + index * 100}>
              <div className="bg-white rounded-2xl p-6 border border-secondary/20 text-center hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/hero-images/swimmer_1.jpg"
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

      {/* Schedule & Pricing */}
      <Section className="bg-primary/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Schedule & Pricing</h3>
              
              <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm mb-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Duration</h4>
                    <p className="text-secondary">{program.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Frequency</h4>
                    <p className="text-secondary">{program.sessions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Schedule</h4>
                    <p className="text-secondary">{program.frequency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Price</h4>
                    <p className="text-xl font-bold text-primary">
                      UGX {program.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-secondary/20 pt-6">
                  <h4 className="font-semibold text-primary mb-3">What&apos;s Included:</h4>
                  <div className="space-y-2">
                    {[
                      "12 professional swimming lessons",
                      "Small class sizes (max 6 students)",
                      "Safety equipment provided",
                      "Progress assessment",
                      "Certificate upon completion"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-secondary text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  className="flex-1"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Register Today
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="xl" className="flex-1">
                    Ask Questions
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInRight">
            <div className="bg-white rounded-2xl p-8 border border-secondary/20">
              <h4 className="font-bold text-primary mb-6">Parent Testimonials</h4>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-secondary text-sm mb-2">
                    &quot;My daughter went from being afraid of water to swimming confidently in just 4 weeks. 
                    The instructors are amazing with children!&quot;
                  </p>
                  <p className="text-xs text-secondary/70">- Sarah M., Parent</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-secondary text-sm mb-2">
                    &quot;The small class sizes and patient teaching approach made all the difference. 
                    Highly recommend Silverfin&apos;s Learn to Swim program.&quot;
                  </p>
                  <p className="text-xs text-secondary/70">- James K., Parent</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <AnimatedSection animation="fadeIn">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Child&apos;s Swimming Journey?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Give your child the gift of water confidence and swimming skills that will last a lifetime. 
              Our next Learn to Swim course starts soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="white" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enroll Now - UGX {program.price.toLocaleString()}
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

export default LearnToSwimPage;
