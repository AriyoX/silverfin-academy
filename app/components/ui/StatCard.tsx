import React, { useState, useEffect, useRef } from "react";

interface StatCardProps {
  value: string;
  label: string;
  animate?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, animate = false }) => {
  const [displayValue, setDisplayValue] = useState(animate ? "0" : value);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const isBronzeMedal = value === "3rd";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!animate || !isVisible) return;

    // Extract numeric value from the string
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetValue = parseInt(numericMatch[1]);
    const prefix = value.substring(0, numericMatch.index || 0);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[1].length);
    
    let current = 0;
    const increment = Math.ceil(targetValue / 60); // Animate over ~1 second at 60fps
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(timer);
      }
      setDisplayValue(`${prefix}${current}${suffix}`);
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [animate, isVisible, value]);

  return (
    <div 
      ref={cardRef} 
      className={`rounded-2xl border border-secondary/20 p-4 sm:p-6 text-center shadow-sm bg-white transition-all duration-300 ${
        isBronzeMedal ? 'hover:bg-gradient-to-br hover:from-amber-100 hover:to-amber-200 hover:border-amber-300 hover:shadow-lg hover:scale-105 cursor-pointer' : ''
      }`}
      onMouseEnter={() => isBronzeMedal && setIsHovered(true)}
      onMouseLeave={() => isBronzeMedal && setIsHovered(false)}
    >
      <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight break-words transition-all duration-300 ${
        isBronzeMedal && isHovered 
          ? 'text-amber-700 transform scale-110' 
          : 'text-primary'
      }`}>
        {isBronzeMedal && isHovered ? '🥉' : displayValue}
      </div>
      <div className={`mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium break-words leading-tight transition-all duration-300 ${
        isBronzeMedal && isHovered 
          ? 'text-amber-800 font-semibold' 
          : 'text-secondary'
      }`}>
        {label}
      </div>
    </div>
  );
};