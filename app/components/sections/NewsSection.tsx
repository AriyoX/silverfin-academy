import React from "react";
import { Section } from "../ui/Section";
import { ArticleCard } from "../ui/ArticleCard";

export const NewsSection: React.FC = () => (
  <Section id="news" className="bg-secondary/5">
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">News & Articles</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Latest from the Club</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-secondary">
        This grid is wired for Sanity integration. Replace the ArticleCard in future with mapped posts from GROQ query.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
    <div className="mt-8 text-center">
      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">
        View all
      </a>
    </div>
  </Section>
);