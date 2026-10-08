import React from 'react';
import { motion } from 'motion/react';
import { Camera, Users, Video } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-brand-dark relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596706030999-5249419163e8?auto=format&fit=crop&q=80" 
                alt="Devotional event production" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-brand-primary border border-accent-gold/30 p-6 rounded-xl shadow-xl hidden sm:block">
              <div className="text-4xl font-cormorant font-medium text-accent-gold mb-1">10+</div>
              <div className="text-sm font-sans text-text-light/80">Years of Devotion</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-accent-gold" />
              <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-[0.2em]">
                About Shri Vani Jagat
              </span>
            </div>
            
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-text-light tracking-tight mb-8 leading-tight">
              Stories of Faith,<br />
              <span className="italic text-accent-gold">Captured with Emotion.</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-text-light/80 font-sans font-light leading-relaxed mb-12">
              <p>
                Shri Vani Jagat is a premier media and live event production platform dedicated to bringing the divine closer to devotees across the globe. 
              </p>
              <p>
                From massive Sankirtan festivals to intimate Satsangs and luxury weddings, we blend broadcast-grade technical precision with a deep cultural understanding of sacred moments.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/10 py-8">
              <div>
                <div className="flex items-center gap-2 mb-2 text-accent-gold">
                  <Video className="w-5 h-5" />
                  <span className="font-sans text-sm font-semibold uppercase tracking-wider">Live Broadcasts</span>
                </div>
                <div className="font-cormorant text-3xl text-text-light">50+</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-accent-gold">
                  <Camera className="w-5 h-5" />
                  <span className="font-sans text-sm font-semibold uppercase tracking-wider">Production</span>
                </div>
                <div className="font-cormorant text-3xl text-text-light">Multi-Camera</div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 px-8 py-4 rounded bg-white text-brand-primary font-sans text-sm font-semibold tracking-wide hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <span>Work With Us</span>
              <span className="text-xl leading-none">&rarr;</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
