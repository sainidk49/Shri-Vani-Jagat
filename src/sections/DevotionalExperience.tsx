import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Music, Users, Camera, Radio } from 'lucide-react';

export const DevotionalExperience: React.FC = () => {
  const experiences = [
    {
      title: 'Bhajan Sandhya',
      description: 'Soulful musical evenings captured with pristine multitrack audio and warm cinematic lighting.',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1604928169128-444f9c8f00db?auto=format&fit=crop&q=80',
    },
    {
      title: 'Sankirtan & Satsang',
      description: 'Uninterrupted devotion broadcasted globally with multi-camera setups ensuring everyone feels present.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1596706030999-5249419163e8?auto=format&fit=crop&q=80',
    },
    {
      title: 'Live Darshan',
      description: 'Bringing the temple to your screens with high-definition, zero-latency continuous live streams.',
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80',
    },
    {
      title: 'Spiritual Events',
      description: 'Documentary-style cinematography that preserves the sacred essence and scale of religious gatherings.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-brand-primary border-t border-white/5 relative overflow-hidden">
      {/* Decorative Indian Pattern Background - Subtle */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30M15 15L45 45M15 45L45 15' stroke='%23C8A45D' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='30' cy='30' r='15' stroke='%23C8A45D' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-accent-gold" />
              <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-[0.2em]">
                Spiritual Essence
              </span>
            </div>
            
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-text-light leading-[1.1] mb-6">
              Experience the Divine, <br />
              <span className="text-accent-gold italic font-light">Wherever You Are.</span>
            </h2>
            
            <p className="text-base text-text-light/70 font-sans leading-relaxed mb-8">
              At Shri Vani Jagat, we understand that devotional events are not just performances—they are sacred offerings. 
              Our broadcast and cinematography teams work silently and respectfully to capture the pure devotion, ensuring 
              that devotees across the world can feel the presence and energy of the event as if they were seated right there.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-primary bg-brand-dark flex items-center justify-center overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1604928169128-444f9c8f00db?auto=format&fit=crop&q=80&w=100&h=100`} alt="" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-sans text-text-light/80">
                <strong className="text-accent-gold font-semibold">1M+ Devotees</strong><br/>
                Connected globally
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden aspect-square sm:aspect-auto sm:h-72"
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                      <div className="w-10 h-10 rounded-full bg-accent-gold/20 backdrop-blur-md border border-accent-gold/30 flex items-center justify-center mb-4 text-accent-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-cormorant text-2xl font-medium text-text-light mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-text-light/70 font-sans leading-relaxed group-hover:text-text-light/90 transition-colors">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
