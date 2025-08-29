import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const GallerySection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalImages = 16; // 2x4 grid = 8 images per page, with 2 pages total
  const imagesPerPage = 8;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentImages = () => {
    const startIndex = currentPage * imagesPerPage;
    return Array.from({ length: imagesPerPage }, (_, i) => startIndex + i + 1);
  };

  return (
    <Section id="gallery" className="bg-blue-50/30">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Gallery</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Moments that matter</h2>
      </div>
      
      <div className="relative">
        {/* Carousel Navigation */}
        <div className="flex justify-center mb-6 gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={totalPages <= 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            Previous
          </Button>
          <span className="flex items-center px-4 text-sm text-primary font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={totalPages <= 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight size={16} />
          </Button>
        </div>

        {/* 2x4 Grid with larger images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {getCurrentImages().map((imageNum) => (
            <div 
              key={imageNum} 
              className="aspect-square w-full overflow-hidden rounded-xl bg-secondary/10 border border-secondary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{ minHeight: '200px' }}
            >
              <div className="flex h-full items-center justify-center text-lg font-medium text-secondary group-hover:text-primary transition-colors">
                Photo {imageNum}
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentPage 
                  ? 'bg-primary w-6' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};