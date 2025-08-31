"use client"
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { ContactBar } from "./ContactBar";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects for better stickiness visual feedback
  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold to account for contact bar height (~32px)
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <div className="w-full">
      {/* Non-sticky contact bar */}
      <ContactBar />
      
      {/* Sticky header - now properly isolated */}
      <header
        className={`
          sticky top-0 z-50 w-full transition-all duration-300
          ${isScrolled
            ? 'bg-white shadow-lg border-b border-secondary/30'
            : 'bg-white/95 border-b border-secondary/20'
          }
        `}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transform: 'translateZ(0)', // Good for performance
          backfaceVisibility: 'hidden', // Additional performance optimization
          willChange: 'transform' // Hint for browser optimization
        }}
      >
        <div className={`
          mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6
          transition-all duration-300
          ${isScrolled ? 'py-3 md:py-4' : 'py-4 md:py-5'}
        `}>
          <Logo
            size={isScrolled ? "md" : "lg"}
            textClassName="text-primary transition-all duration-300"
          />

          <DesktopNav />

          <button
            className="md:hidden text-primary hover:bg-gray-100 rounded-md p-2 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
};