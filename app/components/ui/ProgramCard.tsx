import React from "react";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  desc: string;
  meta: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ title, desc, meta }) => (
  <div className="flex h-full flex-col justify-between rounded-2xl border border-secondary/20 p-6 shadow-sm bg-white">
    <div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-secondary">{desc}</p>
    </div>
    <div className="mt-6 flex items-center justify-between text-sm text-secondary">
      <span>{meta}</span>
      <a className="inline-flex items-center gap-1 font-medium text-primary hover:underline" href="#contact">
        Enquire <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </div>
);