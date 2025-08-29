import React from "react";
import { Section } from "../ui/Section";

export const AboutSection: React.FC = () => (
  <Section id="about">
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">About Us</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Silverfin Academy is a new, exciting swimming club
        </h2>
        <p className="mt-4 text-gray-600">
          Founded to nurture swimmers at every level, our mission is to develop confident, 
          resilient athletes through excellent coaching and a positive team culture. Our vision 
          is to become a leading academy in the region, producing champions in and out of the pool.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-5">
            <h4 className="font-semibold text-gray-900">Mission</h4>
            <p className="mt-2 text-sm text-gray-600">
              Deliver high‑quality training in a safe, inclusive environment that inspires lifelong love of swimming.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h4 className="font-semibold text-gray-900">Vision</h4>
            <p className="mt-2 text-sm text-gray-600">
              Empower swimmers to achieve personal excellence and represent our club proudly at every level.
            </p>
          </div>
        </div>
      </div>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
        <div className="flex h-full items-center justify-center text-gray-400">About Image</div>
      </div>
    </div>
  </Section>
);