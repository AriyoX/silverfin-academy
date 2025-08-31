"use client"

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { ContactBar } from "./ContactBar";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
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
    <>
      {/* Optional: Slim contact bar at the very top */}
      <ContactBar />
      
      <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
          <Logo size="lg" textClassName="text-primary" />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};