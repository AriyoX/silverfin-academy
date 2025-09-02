import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "../ui/Logo";

export const Footer: React.FC = () => (
  <footer className="border-t border-secondary/20 bg-primary overflow-x-hidden">
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 w-full">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <Logo size="md" textClassName="text-white" />
          <p className="mt-3 text-sm text-white/80">Building swimmers for life through excellence, dedication, and community.</p>
        </div>
        
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white mb-3">About</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/about#mission" className="hover:text-white transition-colors">Mission & Vision</Link></li>
            <li><Link href="/about#team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="/about#facilities" className="hover:text-white transition-colors">Facilities</Link></li>
            <li><Link href="/coaches" className="hover:text-white transition-colors">Coaches</Link></li>
          </ul>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white mb-3">Programs</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/programs/beginners" className="hover:text-white transition-colors">Beginners</Link></li>
            <li><Link href="/programs/intermediate" className="hover:text-white transition-colors">Intermediate</Link></li>
            <li><Link href="/programs/advanced" className="hover:text-white transition-colors">Advanced</Link></li>
            <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
          </ul>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/news/announcements" className="hover:text-white transition-colors">Announcements</Link></li>
            <li><Link href="/news/competitions" className="hover:text-white transition-colors">Competitions</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm text-white/80 mb-4">
            <li className="flex items-center gap-2 break-all">
              <Phone className="h-4 w-4 flex-shrink-0" /> 
              <a href="tel:+256709711797" className="hover:text-white transition-colors">+256 709 711 797</a>
            </li>
            <li className="flex items-center gap-2 break-all">
              <Mail className="h-4 w-4 flex-shrink-0" /> 
              <a href="mailto:silverfinacademy@gmail.com" className="hover:text-white transition-colors">silverfinacademy@gmail.com</a>
            </li>
            <li className="flex items-start gap-2 break-words">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /> 
              <span>Hill Preparatory School, Naguru, Kampala</span>
            </li>
          </ul>
          
          <h5 className="text-sm font-semibold text-white mb-2">Follow Us</h5>
          <div className="flex items-center gap-3 flex-wrap">
            <a href="https://instagram.com/silverfinacademy" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 p-2 text-white/80 hover:border-white hover:text-white transition-all flex-shrink-0" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/silverfinacademy" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 p-2 text-white/80 hover:border-white hover:text-white transition-all flex-shrink-0" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://youtube.com/@silverfinacademy" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 p-2 text-white/80 hover:border-white hover:text-white transition-all flex-shrink-0" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Silverfin Academy. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);