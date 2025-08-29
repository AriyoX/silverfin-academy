import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Section } from "../ui/Section";
import { ContactForm } from "../forms/ContactForm";
import { AnimatedSection } from "../ui/AnimatedSection";

export const ContactSection: React.FC = () => (
  <Section id="contact" className="bg-secondary/5">
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <AnimatedSection animation="slideInLeft">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Get in touch</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
          <div className="mt-8 grid gap-3 text-sm text-secondary">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +256 700 000 000</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@silverfin.ac.ug</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Silverfin Aquatic Centre, Kampala, Uganda</div>
            <div className="mt-2 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="rounded-full border border-primary/30 p-2 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-primary/30 p-2 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="rounded-full border border-primary/30 p-2 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slideInRight" delay={200}>
        <div className="overflow-hidden rounded-2xl border border-secondary/20">
          <iframe
            title="Map"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31811.679!2d32.582!3d0.347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v00000000000"
          />
        </div>
      </AnimatedSection>
    </div>
  </Section>
);