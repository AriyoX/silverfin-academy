import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Section } from "../ui/Section";

export const ContactSection: React.FC = () => (
  <Section id="contact" className="bg-gray-50">
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Get in touch</h2>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 gap-4">
          <input 
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="Full name" 
            required 
          />
          <input 
            type="email" 
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="Email" 
            required 
          />
          <input 
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="Phone" 
          />
          <textarea 
            className="min-h-[120px] rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="How can we help?" 
          />
          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Send enquiry
          </button>
        </form>
        <div className="mt-8 grid gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +256 700 000 000</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@silverfin.ac.ug</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Silverfin Aquatic Centre, Kampala, Uganda</div>
          <div className="mt-2 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="rounded-full border border-gray-300 p-2 hover:border-gray-400">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-gray-300 p-2 hover:border-gray-400">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-gray-300 p-2 hover:border-gray-400">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <iframe
          title="Map"
          className="h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31811.679!2d32.582!3d0.347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v00000000000"
        />
      </div>
    </div>
  </Section>
);