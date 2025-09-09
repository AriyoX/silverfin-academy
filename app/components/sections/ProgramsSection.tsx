import React from "react";
import Link from "next/link";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { PROGRAMS } from "../../constants";
import { ArrowRight } from "lucide-react";

export const ProgramsSection: React.FC = () => (
  <Section id="programs" className="bg-primary/3">
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Programs</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Training Pathways</h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          From first splash to elite competition, discover the perfect program to unlock your swimming potential.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/programs">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            All Programs
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden md:inline-flex"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Assessment
        </Button>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {PROGRAMS.map((program) => (
        <div key={program.id} className="group">
          <Link href={`/programs/${program.id}`}>
            <div className="bg-white rounded-2xl p-6 border border-secondary/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full cursor-pointer group-hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {program.title}
              </h3>
              <p className="text-secondary mb-4">{program.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">{program.meta}</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-4 pt-4 border-t border-secondary/10">
                <span className="text-primary font-semibold">
                  Learn More
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-secondary/20 p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-primary">Our Coaches</h3>
        <p className="mt-2 text-sm text-secondary">
          Experienced, accredited coaches dedicated to athlete wellbeing and long‑term development.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-secondary">
          <li>Head Coach – Ezra Kakali</li>
          <li>Assistant Head Coach – Vincent Kabira</li>
          <li>Learn to Swim Coach – Mugisha Jacob</li>
        </ul>
        <Link href="/about#team">
          <Button variant="outline" size="sm" className="mt-4">
            Meet Our Team
          </Button>
        </Link>
      </div>
      <div className="rounded-2xl border border-secondary/20 p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-primary">Facilities</h3>
        <p className="mt-2 text-sm text-secondary">
          Access to 25m indoor pool, gym, and recovery area with planned upgrades.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-secondary">
          <li>8‑lane 25m pool</li>
          <li>Strength & Conditioning space</li>
          <li>Video analysis</li>
        </ul>
        <Link href="/about#facilities">
          <Button variant="outline" size="sm" className="mt-4">
            Tour Facilities
          </Button>
        </Link>
      </div>
    </div>
    
    {/* Mobile CTA */}
    <div className="mt-8 text-center md:hidden">
      <Link href="/programs">
        <Button size="lg" className="w-full sm:w-auto">
          Explore All Programs
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </div>
  </Section>
);