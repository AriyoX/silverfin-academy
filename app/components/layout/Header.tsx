"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "../ui/Button";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "News", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" }
  ];
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-3">
          {!logoError && (
            <Image
              src="/logo.png"
              alt="Silverfin Academy"
              width={40}
              height={40}
              className="rounded-full bg-gray-100 object-cover"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="text-xl font-bold tracking-tight text-primary">Silverfin Academy</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-base font-medium text-secondary">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:+256700000000" className="flex items-center gap-2 text-sm text-secondary">
              <Phone className="h-4 w-4 text-primary" /> +256 700 000 000
            </a>
            <a href="mailto:info@silverfinacademy.org" className="flex items-center gap-2 text-sm text-secondary">
              <Mail className="h-4 w-4 text-primary" /> info@silverfinacademy.org
            </a>
            <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Join Now
            </Button>
          </div>
        </div>

        <button className="md:hidden text-primary" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-secondary/20 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5">
            <nav className="grid gap-4 text-base font-medium">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="py-1 transition-colors hover:text-primary text-secondary"
                  onClick={() => toggleMenu()}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="tel:+256700000000" className="flex items-center gap-2 text-secondary">
                <Phone className="h-4 w-4 text-primary" /> +256 700 000 000
              </a>
              <a href="mailto:info@silverfin.ac.ug" className="flex items-center gap-2 text-secondary">
                <Mail className="h-4 w-4 text-primary" /> info@silverfin.ac.ug
              </a>
              <Button 
                size="sm" 
                className="mt-2"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};