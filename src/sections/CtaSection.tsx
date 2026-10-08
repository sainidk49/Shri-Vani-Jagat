import React from 'react';
import { motion } from 'motion/react';
import { Mail, Youtube } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="relative py-24 sm:py-32 flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-banner.jpg" 
          alt="Live event production" 
          className="w-full h-full object-cover object-center opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-brand-primary/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/90" />
        <div className="absolute inset-0 bg-brand-deep/25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-text-light tracking-tight mb-6 drop-shadow-xl font-cormorant font-semibold">
            Have an Event to Broadcast?
          </h2>
          <p className="text-lg sm:text-xl text-text-light/90 font-sans font-normal leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
            Let's bring your celebration, devotion and special moments to audiences everywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => {
                const contactForm = document.getElementById('contact');
                contactForm?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded bg-accent-gold hover:bg-gold-soft text-brand-primary font-sans text-sm font-semibold tracking-wide transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
            <a
              href="https://youtube.com/@shreevanijagat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded bg-white/10 hover:bg-white/20 backdrop-blur-md text-text-light border border-white/20 font-sans text-sm tracking-wide transition-all shadow-xl flex items-center justify-center gap-2 font-semibold"
            >
              <Youtube className="w-5 h-5 text-red-500" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
