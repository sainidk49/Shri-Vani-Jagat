import React from 'react';
import { Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export const LiveNow: React.FC = () => {
  return (
    <section id="live-now" className="py-20 sm:py-32 bg-brand-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold/5 via-brand-primary to-brand-primary pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold text-red-400 uppercase tracking-[0.2em]">
              LIVE NOW
            </span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-text-light tracking-tight mb-6">
            Featured Live Broadcast
          </h2>
          <p className="text-base sm:text-lg text-text-light/80 font-sans font-light leading-relaxed">
            Experience the divine energy in real-time. Join our global audience in this beautiful spiritual gathering.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-accent-gold/5 border border-white/10 bg-black"
        >
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/qHOn4IIoMVY?rel=0"
              title="Shri Vani Jagat Live"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/live/qHOn4IIoMVY?si=E8TJY9vb2BYuYU26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-[#FF0000] hover:bg-red-700 text-white font-sans text-sm font-semibold tracking-wide transition-all shadow-xl hover:shadow-red-500/20 group"
          >
            <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Watch Live on YouTube &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
