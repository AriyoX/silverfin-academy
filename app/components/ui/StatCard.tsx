import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
    <div className="text-4xl font-extrabold tracking-tight text-blue-600 md:text-5xl">{value}</div>
    <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
  </div>
);