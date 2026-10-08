import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Video, Radio, Award, Tv, Star } from 'lucide-react';

const REASONS = [
  { id: '01', title: 'Professional Production', icon: Video, desc: 'Industry-standard broadcast equipment and highly trained crew.' },
  { id: '02', title: 'Multi-Camera Coverage', icon: Tv, desc: 'Cinematic angles capturing every emotion and grand scale.' },
  { id: '03', title: 'Live Streaming', icon: Radio, desc: 'Zero-dropout global telecast for thousands of devotees.' },
  { id: '04', title: 'Cinematic Quality', icon: Star, desc: '4K resolution with premium color grading and sharp visuals.' },
  { id: '05', title: 'Reliable Broadcast', icon: ShieldCheck, desc: 'Redundant network bonding ensures the stream never fails.' },
  { id: '06', title: 'Devotional Experience', icon: Award, desc: 'Deep cultural understanding of sacred rituals and moments.' },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-brand-ivory relative border-t border-brand-teal/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-10 h-[1px] bg-accent-gold" />
            <span className="font-sans text-xs text-gold-deep uppercase tracking-[0.2em] font-medium">
              The Gold Standard
            </span>
            <span className="w-10 h-[1px] bg-accent-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-brand-teal tracking-tight font-cormorant font-semibold">
            Why Shri Vani Jagat?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white/70 border border-brand-teal/10 hover:border-accent-gold/30 hover:bg-white transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-[50px] group-hover:bg-accent-gold/10 transition-colors" />
                
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-gold-deep mb-6 stroke-[1.5]" />
                  <h3 className="text-2xl text-brand-teal mb-3 font-cormorant font-medium">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-ink/60 font-normal leading-relaxed group-hover:text-brand-ink/80 transition-colors">
                    {reason.desc}
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
