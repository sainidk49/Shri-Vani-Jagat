import React from 'react';
import { ArrowRight, Radio, Camera, Plane, Monitor, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFilmModal?: () => void;
}

const HIGHLIGHTS = [
  { label: 'Live Streaming', icon: Radio },
  { label: 'Photo & Video', icon: Camera },
  { label: 'Drone Shoot', icon: Plane },
  { label: 'LED Wall Setup', icon: Monitor },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-ivory pt-[76px] lg:pt-0 lg:min-h-[100svh] lg:flex">
      {/* PHOTO — top on mobile, right side with curved edge on desktop */}
      <div className="relative order-1 lg:order-2 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[54%] h-[280px] sm:h-[380px] lg:h-auto">
        <img
          src="/assets/hero-banner.jpg"
          alt="Shri Vani Jagat live multi-camera broadcast of a devotional festival"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-primary/25 lg:via-transparent lg:to-transparent" />

        {/* Curved ivory edge + gold line, desktop */}
        <svg
          className="hidden lg:block absolute inset-y-0 left-0 h-full w-28 -translate-x-[1px]"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0 H30 C90 250 90 750 30 1000 H0 Z" fill="#F7F1E3" />
          <path d="M30 0 C90 250 90 750 30 1000" fill="none" stroke="#D4A72C" strokeWidth="5" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Gold rule on mobile */}
        <div className="lg:hidden absolute bottom-0 inset-x-0 h-1 bg-accent-gold" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 order-2 w-full lg:w-[48%] flex items-center">
        <div className="w-full max-w-2xl mx-auto lg:mx-0 px-5 sm:px-8 lg:pl-10 lg:pr-12 xl:pl-20 py-12 sm:py-16 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-gold-deep" />
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.3em] text-gold-deep uppercase font-medium">
                Event Production · Live Broadcasting
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[60px] xl:text-[72px] text-brand-teal leading-[1.02] mb-6 font-cormorant font-bold">
              Capturing Faith.
              <br />
              <span className="font-medium text-gold-deep">Broadcasting Devotion.</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm tracking-[0.35em] text-brand-teal uppercase mb-6 font-medium">
              Capture &bull; Create &bull; Live
            </p>

            <p className="text-base sm:text-lg text-brand-ink/75 font-sans font-normal leading-relaxed max-w-xl mb-9">
              Professional live broadcasting, devotional events, Bhajan Sandhya, Sankirtan, Satsang and cinematic event coverage.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <button
                onClick={() => document.getElementById('live-now')?.scrollIntoView({ behavior: 'smooth' })}
                className="min-h-[52px] px-8 py-3.5 rounded bg-brand-teal hover:bg-brand-primary text-brand-ivory font-sans text-sm font-semibold tracking-wide transition-colors shadow-lg shadow-brand-teal/20 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Watch Live</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="min-h-[52px] px-8 py-3.5 rounded border border-accent-gold bg-accent-gold/10 hover:bg-accent-gold text-brand-teal font-sans text-sm tracking-wide transition-colors flex items-center justify-center gap-3 cursor-pointer group font-semibold"
              >
                <span>Book Your Event</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <a
              href="https://youtube.com/@shreevanijagat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-teal/80 hover:text-gold-deep transition-colors font-sans text-sm font-medium"
            >
              <Youtube className="w-5 h-5 text-red-600" />
              <span>Visit YouTube Channel &rarr;</span>
            </a>

            {/* Service highlights — from the brand presentation cover */}
            <ul className="mt-10 pt-8 border-t border-brand-teal/15 grid grid-cols-4 gap-2 sm:gap-4">
              {HIGHLIGHTS.map(({ label, icon: Icon }) => (
                <li key={label} className="flex flex-col items-center text-center gap-2">
                  <span className="w-11 h-11 rounded-lg border border-brand-teal/20 bg-white/60 flex items-center justify-center text-brand-teal">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-teal/80 leading-tight font-medium">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
