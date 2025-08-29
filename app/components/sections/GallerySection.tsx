import React from "react";
import { Section } from "../ui/Section";

export const GallerySection: React.FC = () => (
  <Section id="gallery">
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Gallery</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Moments that matter</h2>
    </div>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="aspect-square w-full overflow-hidden rounded-xl bg-secondary/10 border border-secondary/20">
          <div className="flex h-full items-center justify-center text-xs text-secondary">
            Photo {i + 1}
          </div>
        </div>
      ))}
    </div>
  </Section>
);