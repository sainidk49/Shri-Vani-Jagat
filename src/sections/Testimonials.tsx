import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';
import { motion } from 'motion/react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-brand-ivory border-t border-brand-teal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-10 h-[1px] bg-accent-gold" />
            <span className="font-sans text-xs text-gold-deep uppercase tracking-[0.2em] font-medium">
              Testimonials & Endorsements
            </span>
            <span className="w-10 h-[1px] bg-accent-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-brand-teal tracking-tight mt-2 font-cormorant font-semibold">
            Cherished by Royalty & Devotees
          </h2>
          <p className="mt-6 text-sm sm:text-base text-brand-ink/70 font-sans">
            Hear from families and spiritual trusts whose once-in-a-lifetime moments we had the honor of
            preserving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-brand-teal/10 hover:border-accent-gold/30 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-1.5 text-gold-deep">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-deep/20 group-hover:text-gold-deep/40 transition-colors" />
                </div>

                <p className="font-sans text-base sm:text-lg text-brand-ink/90 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-teal/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-cormorant text-xl text-brand-teal font-medium">
                    {t.client}
                  </h4>
                  <p className="text-xs text-brand-ink/50 mt-1 uppercase tracking-wider">{t.role} &bull; {t.event}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-brand-ink/70 bg-brand-teal/5 px-3 py-1.5 rounded border border-brand-teal/15">
                  <MapPin className="w-3.5 h-3.5 text-gold-deep" />
                  <span>{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
