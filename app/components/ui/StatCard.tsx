import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="rounded-2xl border border-secondary/20 p-4 sm:p-6 text-center shadow-sm bg-white">
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary break-words">{value}</div>
    <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-secondary break-words leading-tight">{label}</div>
  </div>
);