import React from 'react';
import { Youtube, Play } from 'lucide-react';
import { motion } from 'motion/react';

const YOUTUBE_VIDEOS = [
  {
    id: '1',
    title: 'Divine Kirtan Sandhya - Global Telecast',
    category: 'Sankirtan',
    thumbnail: 'https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Grand Satsang & Darshan Coverage',
    category: 'Satsang',
    thumbnail: 'https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Beautiful Bhajan Evening Highlights',
    category: 'Bhajan',
    thumbnail: 'https://images.unsplash.com/photo-1657020411310-40e10e211c9d?auto=format&fit=crop&q=80',
  },
];

export const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="py-20 sm:py-32 bg-brand-ivory border-t border-brand-teal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-brand-teal tracking-tight mb-4 font-cormorant font-semibold">
              From Our YouTube
            </h2>
            <p className="text-base sm:text-lg text-gold-deep font-sans tracking-wide">
              Bhajan &bull; Sankirtan &bull; Satsang &bull; Live Events
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://youtube.com/@shreevanijagat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-brand-teal/25 hover:border-accent-gold hover:bg-accent-gold/10 text-brand-teal font-sans text-sm tracking-wide transition-all group font-semibold"
            >
              <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Visit Our YouTube Channel</span>
            </a>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {YOUTUBE_VIDEOS.map((video, index) => (
            <motion.a
              key={video.id}
              href="https://youtube.com/@shreevanijagat"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block rounded-lg overflow-hidden bg-white border border-brand-teal/10 hover:border-accent-gold/60 transition-all hover:shadow-xl hover:shadow-brand-teal/10"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-white">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-accent-gold backdrop-blur-sm flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 fill-brand-primary text-brand-primary ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-brand-primary/85 backdrop-blur-md text-[10px] text-accent-gold tracking-widest uppercase border border-accent-gold/30 font-medium">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl text-brand-teal group-hover:text-gold-deep transition-colors line-clamp-2 leading-snug font-cormorant font-medium">
                  {video.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-brand-ink/55 text-xs uppercase tracking-wider font-medium">
                  <span>Watch Video</span>
                  <span className="text-gold-deep">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
