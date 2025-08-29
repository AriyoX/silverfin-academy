import React from "react";
import { Section } from "../ui/Section";
import { ProgramCard } from "../ui/ProgramCard";

const programs = [
  {
    title: "Learn to Swim",
    desc: "Water confidence, safety, and foundational technique for beginners.",
    meta: "Ages 4–10 • Weekdays"
  },
  {
    title: "Development Squads",
    desc: "Skill refinement and aerobic base with fun, progressive sets.",
    meta: "Ages 9–14 • 4–6 sessions/week"
  },
  {
    title: "Performance / Senior",
    desc: "High‑performance training targeting national and international meets.",
    meta: "Ages 13+ • 7–9 sessions/week"
  }
];

export const ProgramsSection: React.FC = () => (
  <Section id="programs">
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Programs</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Training Pathways</h2>
      </div>
      <a href="#contact" className="hidden rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all md:inline-flex">
        Book Assessment
      </a>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {programs.map((program, index) => (
        <ProgramCard key={index} {...program} />
      ))}
    </div>
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-secondary/20 p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-primary">Our Coaches</h3>
        <p className="mt-2 text-sm text-secondary">
          Experienced, accredited coaches dedicated to athlete wellbeing and long‑term development.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-secondary">
          <li>Head Coach – Exra Kakali</li>
          <li>Assistant Head Coach – Coach Vincent</li>
          <li>Learn to Swim Coach – Mugisha Jacob</li>
        </ul>
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
      </div>
    </div>
  </Section>
);