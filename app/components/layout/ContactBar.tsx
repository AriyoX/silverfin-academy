import React from "react";
import { Phone, Mail } from "lucide-react";

export const ContactBar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-primary/5 border-b border-secondary/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-end gap-6 py-2 text-xs">
          <a 
            href="tel:+256709711797" 
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <Phone className="h-3 w-3" /> +256 709 711 797
          </a>
          <a 
            href="mailto:silverfinacademy@gmail.com" 
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <Mail className="h-3 w-3" /> silverfinacademy@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
