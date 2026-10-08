import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';
import { motion } from 'motion/react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-32 bg-brand-primary border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-accent-gold tracking-[0.2em] uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-accent-gold" />
            Client Assurance
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-medium text-text-light tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="rounded-xl bg-brand-dark border border-white/10 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-sm sm:text-base font-sans font-medium text-text-light hover:text-accent-gold transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-text-light/70 font-sans font-light leading-relaxed border-t border-white/5 bg-brand-primary">
                    {item.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
