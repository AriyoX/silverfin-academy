import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export const Footer: React.FC = () => (
  <footer className="border-t border-secondary/20 bg-primary overflow-x-hidden">
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 w-full">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white/20 flex-shrink-0" />
            <span className="text-lg font-bold text-white break-words">Silverfin Academy</span>
          </div>
          <p className="mt-3 text-sm text-white/80">Building swimmers for life.</p>
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2 break-all"><Phone className="h-4 w-4 flex-shrink-0" /> +256 700 000 000</li>
            <li className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 flex-shrink-0" /> info@silverfinacademy.org</li>
            <li className="flex items-center gap-2 break-words"><MapPin className="h-4 w-4 flex-shrink-0" /> Hill Preparatry School, Kampala</li>
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
            <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white">Follow</h4>
          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <a href="#" className="rounded-full border border-white/30 p-2 text-white/80 hover:border-white hover:text-white transition-all flex-shrink-0" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-white/30 p-2 text-white/80 hover:border-white hover:text-white transition-all flex-shrink-0" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-white/30 p-2 text-white/80 hover:border-white hover:text-white transition-all flex-shrink-0" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/60">
        © {new Date().getFullYear()} Silverfin Academy. All rights reserved.
      </div>
    </div>
  </footer>
);