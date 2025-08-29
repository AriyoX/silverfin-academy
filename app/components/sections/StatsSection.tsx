import React from "react";
import { Section } from "../ui/Section";
import { StatCard } from "../ui/StatCard";

const stats = [
  { value: "150+", label: "Active Members" },
  { value: "92", label: "Medals Won" },
  { value: "14", label: "Coaches & Staff" },
  { value: "6", label: "Training Squads" }
];

export const StatsSection: React.FC = () => (
  <Section id="stats" className="bg-secondary/5">
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        We&apos;ve got a lot to be proud about
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Club Highlights</h2>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  </Section>
);