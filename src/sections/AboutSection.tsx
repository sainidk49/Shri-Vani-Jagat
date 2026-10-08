import React from 'react';
import { motion } from 'motion/react';
import { Camera, Users, Video } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative border-t border-brand-teal/10 overflow-hidden">
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
                src="https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80" 
                alt="Devotional event production" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-brand-primary border-2 border-accent-gold p-6 rounded-xl shadow-xl hidden sm:block">
              <div className="text-4xl font-cormorant text-accent-gold mb-1 font-semibold">10+</div>
              <div className="text-sm font-sans text-text-light/90">Years of Devotion</div>
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
              <span className="font-sans text-xs text-gold-deep uppercase tracking-[0.2em] font-medium">
                About Shri Vani Jagat
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-brand-teal tracking-tight mb-8 leading-tight font-cormorant font-semibold">
              Stories of Faith,<br />
              <span className="text-gold-deep">Captured with Emotion.</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-brand-ink/80 font-sans font-normal leading-relaxed mb-12">
              <p>
                Shri Vani Jagat is a premier media and live event production platform dedicated to bringing the divine closer to devotees across the globe. 
              </p>
              <p>
                From massive Sankirtan festivals to intimate Satsangs and luxury weddings, we blend broadcast-grade technical precision with a deep cultural understanding of sacred moments.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-brand-teal/15 py-8">
              <div>
                <div className="flex items-center gap-2 mb-2 text-gold-deep">
                  <Video className="w-5 h-5" />
                  <span className="font-sans text-sm uppercase tracking-wider font-medium">Live Broadcasts</span>
                </div>
                <div className="font-cormorant text-3xl text-brand-teal font-semibold">50+</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-gold-deep">
                  <Camera className="w-5 h-5" />
                  <span className="font-sans text-sm uppercase tracking-wider font-medium">Production</span>
                </div>
                <div className="font-cormorant text-3xl text-brand-teal font-semibold">Multi-Camera</div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-teal text-brand-ivory font-sans text-sm tracking-wide hover:bg-brand-primary transition-colors cursor-pointer font-semibold"
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
