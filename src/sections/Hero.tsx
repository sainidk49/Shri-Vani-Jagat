import React from 'react';
import { ArrowRight, Play, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFilmModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenFilmModal }) => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center bg-brand-primary">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80"
          alt="Shri Vani Jagat professional live multi-camera broadcast"
          className="w-full h-full object-cover object-[center_right] sm:object-[70%_center] opacity-80"
          loading="eager"
        />
      </div>

      {/* OVERLAY LAYERS FOR CINEMATIC EFFECT */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-primary/40 via-transparent to-brand-primary/90" />
      <div className="absolute inset-0 z-[1] bg-black/20 backdrop-blur-[2px] sm:backdrop-blur-sm" />
      
      {/* VIGNETTE AND WARM GLOW */}
      <div className="absolute inset-0 z-[2] shadow-[inset_0_0_150px_rgba(11,10,8,0.9)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-[120px] pointer-events-none" />

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col justify-center min-h-[100svh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-accent-gold" />
            <p className="font-sans text-xs sm:text-sm tracking-[0.3em] text-accent-gold font-medium uppercase">
              SHRI VANI JAGAT
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium text-text-light tracking-tight leading-[1.05] drop-shadow-lg mb-6">
            Capturing Faith.<br />
            <span className="text-accent-gold italic">Broadcasting Devotion.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-text-light/90 font-sans font-light leading-relaxed max-w-xl mb-10 drop-shadow-md">
            Professional live broadcasting, devotional events, Bhajan Sandhya, Sankirtan, Satsang and cinematic event coverage.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={() => {
                const liveSection = document.getElementById('live-now');
                liveSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="min-h-[52px] px-8 py-3.5 rounded bg-accent-gold hover:bg-yellow-600 text-brand-primary font-sans text-sm font-semibold tracking-wide transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
            >
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Watch Live</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="min-h-[52px] px-8 py-3.5 rounded bg-white/5 hover:bg-white/10 backdrop-blur-md text-text-light border border-white/20 font-sans text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Secondary CTA */}
          <a
            href="https://youtube.com/@shreevanijagat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-light/80 hover:text-accent-gold transition-colors font-sans text-sm font-medium group"
          >
            <Youtube className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
            <span>Visit YouTube Channel &rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
