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
  Trophy,
  Target,
  Zap,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Activity,
  Medal
} from "lucide-react";

const PerformancePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const program = {
    title: "Performance / Senior",
    description: "High‑performance training targeting national and international meets.",
    ageGroup: "13+ years",
    frequency: "7-9 sessions per week",
    duration: "Monthly",
    levels: ["Performance", "Senior Elite", "National Team"]
  };

  const features = [
    {
      icon: Trophy,
      title: "Elite Competition",
      description: "Training for national championships, international meets, and continental competitions"
    },
    {
      icon: Target,
      title: "Personalized Programs",
      description: "Individual training plans tailored to each swimmer's goals and competitive calendar"
    },
    {
      icon: Zap,
      title: "High-Performance Training",
      description: "Advanced training methodologies including altitude simulation and recovery protocols"
    },
    {
      icon: Globe,
      title: "International Exposure",
      description: "Opportunities to compete internationally and train with world-class athletes"
    }
  ];

  const achievements = [
    { metric: "15+", label: "International Competitions" },
    { metric: "60+", label: "National Medals" },
    { metric: "8", label: "National Records" },
    { metric: "3", label: "Commonwealth Qualifiers" }
  ];

  const trainingComponents = [
    {
      category: "Pool Training",
      sessions: "5-6 per week",
      description: "High-intensity interval training, race pace sets, and technique refinement",
      details: [
        "Morning and evening sessions",
        "Race pace and threshold training",
        "Stroke technique optimization",
        "Start and turn analysis"
      ]
    },
    {
      category: "Dryland Training",
      sessions: "3-4 per week",
      description: "Strength & conditioning, flexibility, and injury prevention programs",
      details: [
        "Olympic lifting and strength training",
        "Core stability and mobility work",
        "Injury prevention protocols",
        "Recovery and regeneration"
      ]
    },
    {
      category: "Mental Performance",
      sessions: "Weekly",
      description: "Sports psychology, goal setting, and mental preparation for competition",
      details: [
        "Visualization and mental rehearsal",
        "Competition anxiety management",
        "Goal setting and planning",
        "Performance analysis and feedback"
      ]
    }
  ];

  const weeklySchedule = [
    { time: "5:30-7:00 AM", session: "Morning Pool Training", type: "pool" },
    { time: "6:00-7:30 PM", session: "Evening Pool Training", type: "pool" },
    { time: "7:00-8:30 AM", session: "Dryland Training", type: "dryland" },
    { time: "4:00-5:00 PM", session: "Recovery Session", type: "recovery" }
  ];

  const performanceCoaches = getCoachesByProgram('performance-senior');

  return (
    <ErrorBoundary>
      <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-x-hidden w-full">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="min-h-screen">
          {/* Hero Section */}
          <Section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideInLeft">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
                    Elite Training Program
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Performance & Senior Squad
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Train at the highest level with Uganda&apos;s most elite swimmers. Our performance program
                    develops national and international competitors through world-class coaching and facilities.
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
                      Apply Now
                    </Button>
                    <Button
                      variant="hero-outline"
                      size="xl"
                      onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Training Program
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideInRight">
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src="/hero-images/nationals_1.jpg"
                      alt="Elite swimmers training at Silverfin Academy"
                      width={600}
                      height={450}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/hero-images/dubai_1.jpg"
                        alt="International competition"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/hero-images/dubai_2.jpg"
                        alt="Elite training environment"
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

          {/* Achievements Banner */}
          <Section className="bg-white border-b border-secondary/20">
            <AnimatedSection animation="fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Championship Results</h3>
                <p className="text-secondary max-w-2xl mx-auto">
                  Our Performance squad swimmers have achieved remarkable success on national and international stages
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-secondary font-medium">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </Section>

          {/* Program Features */}
          <Section className="bg-slate-50">
            <div className="text-center mb-16">
              <AnimatedSection animation="fadeIn">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Elite Training</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  World-Class Training Environment
                </h2>
                <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
                  Our performance program combines cutting-edge training methods with proven coaching
                  experience to develop champions at the highest level.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} animation="fadeIn" delay={200 + index * 100}>
                  <div className="text-center p-6 rounded-2xl bg-white border border-secondary/20 h-full shadow-sm">
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

          {/* Training Components */}
          <Section id="training" className="bg-white">
            <div className="text-center mb-16">
              <AnimatedSection animation="fadeIn">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Training Program</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  Comprehensive Performance Development
                </h2>
                <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
                  Our holistic approach combines pool training, dryland conditioning, and mental performance
                  to develop complete athletes ready for elite competition.
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              {trainingComponents.map((component, index) => (
                <AnimatedSection key={index} animation="fadeIn" delay={200 + index * 100}>
                  <div className="bg-slate-50 rounded-2xl p-8 border border-secondary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-primary">{component.category}</h3>
                            <p className="text-sm text-secondary">{component.sessions}</p>
                          </div>
                        </div>
                        <p className="text-secondary">{component.description}</p>
                      </div>

                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-primary mb-4">Training Focus:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {component.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-secondary">{detail}</span>
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

          {/* Training Schedule */}
          <Section className="bg-slate-50">
            <div className="text-center mb-16">
              <AnimatedSection animation="fadeIn">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Daily Schedule</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  Elite Training Schedule
                </h2>
                <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
                  Our performance swimmers train twice daily with structured sessions designed
                  to optimize adaptation and performance gains.
                </p>
              </AnimatedSection>
            </div>

            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fadeIn" delay={200}>
                <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-primary mb-6">Typical Training Day</h4>
                      <div className="space-y-4">
                        {weeklySchedule.map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                            <div>
                              <div className="font-semibold text-primary">{session.time}</div>
                              <div className="text-secondary text-sm">{session.session}</div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${session.type === 'pool' ? 'bg-blue-100 text-blue-700' :
                                session.type === 'dryland' ? 'bg-green-100 text-green-700' :
                                  'bg-purple-100 text-purple-700'
                              }`}>
                              {session.type}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary mb-6">Weekly Structure</h4>
                      <div className="space-y-4">
                        <div className="bg-slate-50 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">Monday - Wednesday</h5>
                          <p className="text-secondary text-sm">High-intensity training blocks</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">Thursday - Friday</h5>
                          <p className="text-secondary text-sm">Race pace and technique focus</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">Saturday</h5>
                          <p className="text-secondary text-sm">Competition simulation</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">Sunday</h5>
                          <p className="text-secondary text-sm">Active recovery / Rest</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center bg-primary/10 rounded-lg p-6">
                    <p className="text-primary font-semibold mb-2">Total Weekly Training Volume</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-bold text-primary">15-20 hours</div>
                        <div className="text-secondary">Pool Training</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">4-6 hours</div>
                        <div className="text-secondary">Dryland Training</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">2-3 hours</div>
                        <div className="text-secondary">Recovery/Mental</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Section>

          {/* Head Coach */}
          <Section className="bg-white">
            <div className="text-center mb-16">
              <AnimatedSection animation="fadeIn">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Elite Coaching</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  Led by Uganda&apos;s Top Coaches
                </h2>
                <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
                  Our Performance squad is guided by experienced coaches with proven track records
                  in developing national and international level swimmers.
                </p>
              </AnimatedSection>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {performanceCoaches.map((coach, index) => (
                <AnimatedSection key={coach.id} animation="fadeIn" delay={200 + index * 100}>
                  <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-secondary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="text-center lg:text-left">
                        <div className="w-40 h-40 mx-auto lg:mx-0 mb-12 relative">
                          <Image
                            src={coach.imageUrl || '/placeholder-coach.jpg'}
                            alt={`${coach.name} - ${coach.title}`}
                            fill
                            className="object-cover rounded-full border-4 border-primary/20"
                            sizes="160px"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{coach.name}</h3>
                        <p className="text-primary/70 mb-4">{coach.title}</p>

                        {coach.certifications && (
                          <div className="space-y-2">
                            {coach.certifications.map((cert, certIndex) => (
                              <div key={certIndex} className="flex items-center justify-center lg:justify-start gap-2 text-sm text-secondary">
                                <Award className="h-4 w-4 text-primary" />
                                <span>{cert}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="lg:col-span-2">
                        {coach.bio && (
                          <p className="text-secondary mb-6 text-lg">{coach.bio}</p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-primary mb-3">Coaching Achievements</h4>
                            <ul className="space-y-2 text-sm text-secondary">
                              <li className="flex items-center gap-2">
                                <Medal className="h-4 w-4 text-primary" />
                                15+ years coaching experience
                              </li>
                              <li className="flex items-center gap-2">
                                <Medal className="h-4 w-4 text-primary" />
                                National team coaching experience
                              </li>
                              <li className="flex items-center gap-2">
                                <Medal className="h-4 w-4 text-primary" />
                                International competition experience
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary mb-3">Coaching Philosophy</h4>
                            <p className="text-secondary text-sm">
                              &quot;Excellence is not a skill, it&apos;s an attitude. I believe in developing complete athletes
                              who excel not just in the pool, but in life. Every swimmer has unique potential
                              waiting to be unlocked.&quot;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Section>

          {/* Membership Requirements */}
          <Section className="bg-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideInLeft">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Membership Requirements</h3>

                  <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm mb-8">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-primary mb-2">
                        Contact us for pricing
                      </h4>
                      <p className="text-secondary">per month</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h5 className="font-semibold text-primary">Entry Requirements:</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Minimum age: 13 years</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Proven competitive times</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Commitment to training schedule</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Coach recommendation required</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h5 className="font-semibold text-primary">What&apos;s Included:</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">7-9 training sessions per week</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Dryland training program</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Competition support & entries</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Sports psychology support</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Team kit & equipment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-secondary text-sm">Video analysis technology</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="xl"
                      className="flex-1"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply for Assessment
                    </Button>
                    <Link href="/contact">
                      <Button variant="outline" size="xl" className="flex-1">
                        Contact Coach
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideInRight">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 border border-secondary/20">
                    <h4 className="font-bold text-primary mb-6">Performance Standards</h4>

                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-primary mb-3">Entry Times (25m)</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-secondary">Freestyle 50m</div>
                            <div className="text-primary">29.00 (M) / 32.00 (F)</div>
                          </div>
                          <div>
                            <div className="font-medium text-secondary">Backstroke 50m</div>
                            <div className="text-primary">32.00 (M) / 36.00 (F)</div>
                          </div>
                          <div>
                            <div className="font-medium text-secondary">Breaststroke 50m</div>
                            <div className="text-primary">35.00 (M) / 40.00 (F)</div>
                          </div>
                          <div>
                            <div className="font-medium text-secondary">Butterfly 50m</div>
                            <div className="text-primary">30.00 (M) / 34.00 (F)</div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-secondary/20 pt-4">
                        <p className="text-secondary text-sm">
                          Times are guidelines. Swimmers showing exceptional potential or commitment
                          may be considered on individual basis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h4 className="font-bold mb-4">Elite Swimmer Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>International competition opportunities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Trophy className="h-4 w-4" />
                        <span>National team pathway</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>Scholarship opportunities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        <span>Professional athlete development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Section>

          {/* Call to Action */}
          <Section className="bg-white">
            <AnimatedSection animation="fadeIn">
              <div className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Compete at the Highest Level?
                </h3>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join Uganda&apos;s premier performance squad and train alongside national-level athletes.
                  Take the first step towards international competition excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="white"
                    size="xl"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now - Contact us
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

export default PerformancePage;