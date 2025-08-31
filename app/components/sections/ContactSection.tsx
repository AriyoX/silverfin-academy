import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Section } from "../ui/Section";
import { ContactForm } from "../forms/ContactForm";
import { AnimatedSection } from "../ui/AnimatedSection";

export const ContactSection: React.FC = () => (
  <Section id="contact" className="bg-secondary/5">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <AnimatedSection animation="slideInLeft">
        <div className="flex flex-col h-full">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Get in touch</h2>
          </div>
          
          <div className="mt-6 flex-1">
            <ContactForm />
          </div>
          
          <div className="mt-8 space-y-3 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> 
              +256 709 711 797
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> 
              silverfinacademy@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Hill Preparatory School, Naguru, Kampala
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="rounded-full border border-primary/30 p-2 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="rounded-full border border-primary/30 p-2 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                aria-label="YouTube" 
                className="rounded-full border border-primary/30 p-2 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slideInRight" delay={200}>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-hidden rounded-2xl border border-secondary/20 shadow-lg">
            <iframe
              title="Hill Preparatory School Location"
              className="h-full w-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d384.56445556665983!2d32.609919125081426!3d0.3437383851714451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbc95c54ea5f%3A0x1db791544d93410!2sHill%20Prepaparatory%20School!5e0!3m2!1sen!2sug!4v1756667100228!5m2!1sen!2sug"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  </Section>
);