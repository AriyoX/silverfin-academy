import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";

const heroImages = [
  {
    id: 1,
    url: "/hero-images/dubai_1.jpg",
    alt: "Silverfin Academy swimmers in Dubai competition"
  },
  {
    id: 2,
    url: "/hero-images/dubai_2.jpg", 
    alt: "Dubai swimming championship event"
  },
  {
    id: 3,
    url: "/hero-images/dubai_3.jpg",
    alt: "Team Dubai swimming competition"
  },
  {
    id: 4,
    url: "/hero-images/fun_day_1.jpg",
    alt: "Silverfin Academy fun day activities"
  },
  {
    id: 5,
    url: "/hero-images/nationals_1.jpg",
    alt: "National swimming championship competition"
  },
  {
    id: 6,
    url: "/hero-images/rwanda_1.jpg",
    alt: "Silverfin Academy team in Rwanda"
  },
  {
    id: 7,
    url: "/hero-images/rwanda_2.jpg",
    alt: "Rwanda swimming competition event"
  },
  {
    id: 8,
    url: "/hero-images/rwanda_3.jpg",
    alt: "Team Rwanda swimming championship"
  }
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance required to trigger navigation
  const minSwipeDistance = 50;

  // Auto-advance carousel every 4 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Massive Hero Carousel Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out carousel-image ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat hero-carousel-bg"
                style={{
                  backgroundImage: `linear-gradient(rgba(23, 35, 108, 0.4), rgba(23, 35, 108, 0.6)), url('${image.url}')`
                }}
                role="img"
                aria-label={image.alt}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls - Only visible on hover */}
        <div className={`absolute inset-0 flex items-center justify-between px-4 md:px-8 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 carousel-control rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30 carousel-nav-button"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 carousel-control rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30 carousel-nav-button"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators - Only visible on hover */}
        <div className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 border border-white/50 carousel-nav-button ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <AnimatedSection animation="slideInLeft">
            <div className="max-w-full">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl break-words drop-shadow-lg">
                Be part of a team that gives you more.
              </h1>
              <p className="mt-6 max-w-xl text-base text-white/90 sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
                Join Silverfin Academy and unlock swimming excellence with world‑class coaching, 
                supportive community, and pathways from learn‑to‑swim to elite squads.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button 
                  variant="white"
                  size="xl" 
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Club
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Programs
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right side can be used for additional content or kept empty for full image impact */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};