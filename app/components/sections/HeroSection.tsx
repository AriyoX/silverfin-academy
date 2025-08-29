import React from "react";

export const HeroSection: React.FC = () => (
  <section className="relative w-full">
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#dbeafe,transparent_40%),radial-gradient(circle_at_80%_0%,#e5e7eb,transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Be part of a team that gives you more.
          </h1>
          <p className="mt-4 max-w-xl text-gray-600 md:text-lg">
            Join Silverfin Academy and unlock swimming excellence with world‑class coaching, 
            supportive community, and pathways from learn‑to‑swim to elite squads.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Join Our Club
            </a>
            <a href="#programs" className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:border-gray-400">
              Explore Programs
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner md:aspect-[16/10]">
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            Hero Image / Video
          </div>
        </div>
      </div>
    </div>
  </section>
);