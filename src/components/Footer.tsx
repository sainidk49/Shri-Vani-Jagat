import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, Youtube } from 'lucide-react';
import { BRAND_DATA } from '../data/content';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-deep text-text-light border-t-4 border-accent-gold pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-mandala opacity-[0.06] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" className="mb-2" />

            <p className="text-sm text-text-light/70 font-sans leading-relaxed max-w-sm">
              Capture · Create · Live. Event production and live broadcasting — sacred heritage, devotion and celebration captured with broadcast-tier technology and cinematic storytelling.
            </p>

            <div className="flex items-center gap-4">
              <a 
                href="https://youtube.com/@shreevanijagat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-light hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all cursor-pointer"
                aria-label="Official YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs text-accent-gold tracking-widest uppercase font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-text-light/70">
              <li><a href="#" onClick={scrollToTop} className="hover:text-accent-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent-gold transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-accent-gold transition-colors">Gallery</a></li>
              <li><a href="#youtube" className="hover:text-accent-gold transition-colors">Videos</a></li>
              <li><a href="#contact" className="hover:text-accent-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs text-accent-gold tracking-widest uppercase font-medium">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-text-light/70">
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Live Broadcasting</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Multi-Camera Setup</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Event Cinematography</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Bhajan & Satsang</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">LED Production</a></li>
            </ul>
          </div>

          {/* Studio Locations & Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs text-accent-gold tracking-widest uppercase font-medium">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-text-light/70">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-light font-medium">Head Office:</strong> {BRAND_DATA.locations[0]?.city}, India
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <a href={`tel:${BRAND_DATA.phone}`} className="hover:text-accent-gold text-text-light font-medium transition-colors">
                  {BRAND_DATA.phone}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND_DATA.email}`} className="hover:text-accent-gold transition-colors">
                  {BRAND_DATA.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-light/50 font-sans">
          <p>© {new Date().getFullYear()} Shri Vani Jagat. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encodeURIComponent(BRAND_DATA.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:text-gold-soft font-medium transition-colors"
            >
              WhatsApp Support
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-text-light/70 hover:text-accent-gold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
