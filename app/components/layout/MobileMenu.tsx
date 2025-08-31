import React, { useState } from "react";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { navItems } from "./navData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side Menu */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l border-secondary/20 transform transition-transform z-50 md:hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-secondary/20 flex-shrink-0">
          <Logo size="md" textClassName="text-primary" />
          <button onClick={onClose} aria-label="Close menu" className="text-primary hover:bg-gray-100 rounded-full p-1 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="space-y-1">
              {item.dropdown ? (
                <>
                  <button
                    className="flex justify-between items-center w-full text-left text-secondary py-3 px-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors text-base font-medium"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label} 
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 px-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-md transition-colors text-sm"
                          onClick={onClose}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block py-3 px-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-md transition-colors text-base font-medium"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Footer */}
        <div className="px-6 py-6 border-t border-secondary/20 bg-gray-50/50 flex-shrink-0 space-y-4">
          <div className="space-y-3">
            <a 
              href="tel:+256709711797" 
              className="flex items-center gap-3 text-secondary hover:text-primary transition-colors p-2 hover:bg-white rounded-md"
            >
              <Phone className="h-4 w-4 text-primary flex-shrink-0" /> 
              <span className="text-sm font-medium">+256 709 711 797</span>
            </a>
            <a 
              href="mailto:silverfinacademy@gmail.com" 
              className="flex items-center gap-3 text-secondary hover:text-primary transition-colors p-2 hover:bg-white rounded-md"
            >
              <Mail className="h-4 w-4 text-primary flex-shrink-0" /> 
              <span className="text-sm font-medium break-all">silverfinacademy@gmail.com</span>
            </a>
          </div>
          <Button
            size="sm"
            className="w-full mt-4"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              onClose();
            }}
          >
            Join Now
          </Button>
        </div>
      </div>
    </>
  );
};