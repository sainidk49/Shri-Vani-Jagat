import React from 'react';
import { motion } from 'motion/react';
import { Camera, Radio, Users, Film, Video, Monitor, Scissors, Aperture } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

const PREMIUM_SERVICES = [
  { id: '01', title: 'Live Event Broadcasting', desc: 'Professional telecast for spiritual and cultural events.', icon: Radio },
  { id: '02', title: 'Multi-Camera Production', desc: 'Seamless switching between multiple cinematic angles.', icon: Video },
  { id: '03', title: 'Devotional Event Coverage', desc: 'Respectful and comprehensive Bhajan & Satsang coverage.', icon: Users },
  { id: '04', title: 'Wedding Cinematography', desc: 'Luxury wedding films with high-end production value.', icon: Film },
  { id: '05', title: 'Live Streaming', desc: 'High-quality YouTube and Facebook global streaming.', icon: Monitor },
  { id: '06', title: 'Professional Photography', desc: 'Candid and traditional event photography.', icon: Camera },
  { id: '07', title: 'LED / Screen Production', desc: 'Live venue feeds and IMAG screen management.', icon: Aperture },
  { id: '08', title: 'Post Production', desc: 'Cinematic color grading and audio mastering.', icon: Scissors },
];

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-brand-primary relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-accent-gold" />
            <span className="font-sans text-xs text-accent-gold uppercase tracking-[0.2em] font-medium">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-text-light tracking-tight mb-6 font-cormorant font-semibold">
            Professional Production Services
          </h2>
          <p className="text-base sm:text-lg text-text-light/70 font-sans font-normal leading-relaxed max-w-2xl">
            We bring celebrations, devotion, and special moments to audiences everywhere with uncompromising technical excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PREMIUM_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => onOpenBooking(service.title)}
                className="group p-6 sm:p-8 rounded-xl bg-brand-dark border border-white/5 hover:border-accent-gold/40 hover:bg-brand-teal transition-all cursor-pointer flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <Icon className="w-6 h-6 text-accent-gold/80 group-hover:text-accent-gold transition-colors stroke-[1.5]" />
                    <span className="font-cormorant text-xl text-text-muted group-hover:text-accent-gold/60 transition-colors font-semibold">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-2xl text-text-light group-hover:text-accent-gold transition-colors mb-3 font-cormorant font-medium">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-text-light/60 font-normal leading-relaxed group-hover:text-text-light/80 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
