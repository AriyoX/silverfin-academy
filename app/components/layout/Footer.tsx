import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-100" />
            <span className="text-lg font-bold">Silverfin Academy</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Building swimmers for life.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +256 700 000 000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@silverfin.ac.ug</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Silverfin Aquatic Centre, Kampala</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
            <li><a href="#news" className="hover:text-blue-600">News</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow</h4>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" className="rounded-full border border-gray-300 p-2 hover:border-gray-400" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-gray-300 p-2 hover:border-gray-400" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-gray-300 p-2 hover:border-gray-400" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Silverfin Academy. All rights reserved.
      </div>
    </div>
  </footer>
);