import React, { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { navItems } from "./navData";

export const DesktopNav: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Split navigation into main items and "everything else"
  const mainNavItems = navItems.slice(0, 3); // About, Programs, News
  const otherNavItems = navItems.slice(3); // Gallery, Events, Coaches, Membership, Contact

  return (
    <div className="hidden items-center gap-8 md:flex">
      <nav className="flex items-center gap-6 text-base font-medium text-secondary">
        {/* Main navigation items */}
        {mainNavItems.map((item) => (
          <div key={item.label} className="relative group">
            {item.dropdown ? (
              <>
                <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                  {item.label} <ChevronDown className="h-4 w-4" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg border border-secondary/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            )}
          </div>
        ))}

        {/* "Everything Else" dropdown */}
        <div className="relative group">
          <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
            More <ChevronDown className="h-4 w-4" />
          </span>
          <div className="absolute top-full right-0 mt-2 w-64 rounded-md bg-white shadow-lg border border-secondary/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {/* Navigation items */}
            <div className="border-b border-secondary/10 p-2">
              <div className="text-xs font-semibold text-secondary/60 px-2 py-1 uppercase tracking-wide">
                Pages
              </div>
              {otherNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-secondary hover:bg-primary/10 hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Contact info in dropdown */}
            <div className="p-2">
              <div className="text-xs font-semibold text-secondary/60 px-2 py-1 uppercase tracking-wide">
                Contact
              </div>
              <a 
                href="tel:+256709711797" 
                className="flex items-center gap-2 px-3 py-2 text-sm text-secondary hover:bg-primary/10 hover:text-primary transition-colors rounded-md"
              >
                <Phone className="h-4 w-4" /> +256 709 711 797
              </a>
              <a 
                href="mailto:silverfinacademy@gmail.com" 
                className="flex items-center gap-2 px-3 py-2 text-sm text-secondary hover:bg-primary/10 hover:text-primary transition-colors rounded-md"
              >
                <Mail className="h-4 w-4" /> silverfinacademy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Button 
        size="sm" 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Join Now
      </Button>
    </div>
  );
};