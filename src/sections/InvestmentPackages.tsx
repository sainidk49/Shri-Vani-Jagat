import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA } from '../data/content';
import { motion } from 'motion/react';

interface InvestmentPackagesProps {
  onOpenBooking: (packageName?: string) => void;
}

export const InvestmentPackages: React.FC<InvestmentPackagesProps> = ({ onOpenBooking }) => {
  return (
    <section id="packages" className="py-20 sm:py-32 bg-brand-primary border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-10 h-[1px] bg-accent-gold" />
            <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-[0.2em]">
              Curated Collections
            </span>
            <span className="w-10 h-[1px] bg-accent-gold" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-text-light tracking-tight mt-2">
            Investment & Production Suites
          </h2>
          <p className="mt-6 text-sm sm:text-base text-text-light/70 font-sans">
            Transparently designed production packages tailored for intimate spiritual telecasts to
            grand 4-day destination weddings.
          </p>
        </motion.div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={pkg.id}
              className={`flex flex-col justify-between p-8 sm:p-10 rounded-2xl transition-all duration-300 relative ${
                pkg.highlighted
                  ? 'bg-brand-dark border-2 border-accent-gold/50 shadow-2xl shadow-accent-gold/10 lg:-translate-y-4'
                  : 'bg-brand-dark/50 border border-white/5 hover:border-accent-gold/30 hover:bg-brand-dark shadow-sm'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-accent-gold text-brand-primary text-xs font-bold tracking-[0.2em] uppercase shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Requested
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-text-light">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-text-light/50 mt-2 font-sans">{pkg.tagline}</p>
                </div>

                <div className="py-3 px-4 rounded-lg bg-white/5 border border-white/10 mb-8 flex items-center justify-between">
                  <span className="text-xs text-text-light/70 font-medium uppercase tracking-wider">Production Crew</span>
                  <span className="text-sm font-semibold text-accent-gold">{pkg.crewSize}</span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-4 mb-10">
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-text-light/80">
                      <Check className="w-4 h-4 text-accent-gold shrink-0 mt-1" />
                      <span className="leading-relaxed font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Primary CTA */}
                <button
                  onClick={() => onOpenBooking(pkg.name)}
                  className={`w-full py-4 px-6 rounded text-sans text-sm font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg ${
                    pkg.highlighted
                      ? 'bg-accent-gold hover:bg-yellow-600 text-brand-primary'
                      : 'bg-white/10 hover:bg-white/20 text-text-light border border-white/20'
                  }`}
                >
                  <span>Select Suite</span>
                  <ArrowRight className={`w-4 h-4 ${pkg.highlighted ? 'text-brand-primary' : 'text-accent-gold'}`} />
                </button>
                <p className="text-xs text-center text-text-light/40 mt-4 tracking-wide uppercase">
                  Customizable upon request
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
