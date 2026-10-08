import React from 'react';
import { Camera, Radio, Mic2, Plane, Cpu, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const GearRig: React.FC = () => {
  const gearCategories = [
    {
      category: 'Cinema Line & Anamorphic Glass',
      icon: Camera,
      items: [
        { name: 'Sony FX6 Full-Frame Cinema Line', role: 'Primary Ceremonial & A-Cam' },
        { name: 'Sony FX3 Cinema Rigs (Dual)', role: 'Gimbal & Motion Steadicam' },
        { name: 'Canon EOS R5C 8K', role: 'Heirloom Stills & Macro Rituals' },
        { name: 'Atlas Anamorphic & G-Master Primes', role: 'Creamy Optical Bokeh & Flares' },
      ],
    },
    {
      category: 'Live Broadcast & Multi-Cam Switchers',
      icon: Radio,
      items: [
        { name: 'Blackmagic ATEM Constellation 4K', role: '8-Channel Live Program Switcher' },
        { name: 'LiveU 5G Cellular Bonded Unit', role: 'Multi-SIM Redundant Internet Feed' },
        { name: 'Teradek Bolt 4K Wireless Video', role: 'Zero-Latency Wireless Transmission' },
        { name: 'HyperDeck Studio 4K Recorders', role: 'Simultaneous SSD Master Archiving' },
      ],
    },
    {
      category: 'Acoustic Mastery & Vocal Mix',
      icon: Mic2,
      items: [
        { name: 'Sound Devices 833 Digital Mixer', role: 'Vocal Master & Multitrack Record' },
        { name: 'Allen & Heath 32-Ch Digital Console', role: 'Live Kirtan & Instrumental Mixing' },
        { name: 'Sennheiser G4 & Shure Axient Wireless', role: 'Interference-Free Vocal Microphones' },
        { name: 'Rode NTG5 Shotgun Arrays', role: 'Vows & Mantra Directional Capture' },
      ],
    },
    {
      category: 'Aerial Cinema & Dynamic Grip',
      icon: Plane,
      items: [
        { name: 'DJI Inspire 3 Full-Frame 8K Drone', role: 'Palace Sweeps & Twilight Flight' },
        { name: '24ft Jimmy Jib Motorized Crane', role: 'Grand Stage & Baraat Overhead Arc' },
        { name: 'DJI Ronin RS3 Pro & Steadicam', role: 'Floating Cinematic Movement' },
        { name: 'Profoto B10X Location Lighting', role: 'Soft Editorial Night Illumination' },
      ],
    },
  ];

  return (
    <section id="equipment" className="py-20 sm:py-32 bg-brand-primary border-t border-white/5 relative">
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
              Technical Architecture
            </span>
            <span className="w-10 h-[1px] bg-accent-gold" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-text-light tracking-tight mt-2">
            The Production Rig
          </h2>
          <p className="mt-6 text-sm sm:text-base text-text-light/70 font-sans">
            We invest in the gold standard of global cinema and television broadcast hardware. Every
            camera, lens, and bonded transmitter is redundant-backed to ensure flawless execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {gearCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={group.category}
                className="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-accent-gold/40 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-cormorant text-xl sm:text-2xl font-medium text-text-light">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((gear) => (
                    <div
                      key={gear.name}
                      className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      <div>
                        <p className="text-sm font-medium text-text-light">{gear.name}</p>
                        <p className="text-xs text-text-light/50 mt-1 font-sans font-light uppercase tracking-wider">{gear.role}</p>
                      </div>
                      <span className="text-[10px] font-mono text-accent-gold px-2.5 py-1 rounded bg-accent-gold/10 border border-accent-gold/20 whitespace-nowrap shrink-0 font-medium tracking-widest">
                        PRO TIER
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-xl bg-brand-dark border border-white/5 shadow-sm flex flex-wrap items-center justify-center sm:justify-around gap-6 sm:gap-4 text-xs sm:text-sm text-text-light/80 font-sans tracking-wide"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent-gold" />
            <span>Dual Backup Camera Bodies</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/10" />
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-accent-gold" />
            <span>Simultaneous 10-Bit Recording</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/10" />
          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-accent-gold" />
            <span>Encrypted Feed Protection</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
