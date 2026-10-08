import React from 'react';
import { Youtube, Play } from 'lucide-react';
import { motion } from 'motion/react';

const YOUTUBE_VIDEOS = [
  {
    id: '1',
    title: 'Divine Kirtan Sandhya - Global Telecast',
    category: 'Sankirtan',
    thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Grand Satsang & Darshan Coverage',
    category: 'Satsang',
    thumbnail: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Beautiful Bhajan Evening Highlights',
    category: 'Bhajan',
    thumbnail: 'https://images.unsplash.com/photo-1596706030999-5249419163e8?auto=format&fit=crop&q=80',
  },
];

export const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="py-20 sm:py-32 bg-brand-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-text-light tracking-tight mb-4">
              From Our YouTube
            </h2>
            <p className="text-base sm:text-lg text-accent-gold font-sans tracking-wide">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 hover:border-accent-gold hover:bg-accent-gold/10 text-text-light font-sans text-sm font-semibold tracking-wide transition-all group"
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
              className="group block rounded-lg overflow-hidden bg-brand-primary border border-white/5 hover:border-accent-gold/30 transition-all hover:shadow-xl hover:shadow-accent-gold/5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-brand-dark">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-accent-gold tracking-widest uppercase border border-white/10">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-sans text-lg font-medium text-text-light group-hover:text-accent-gold transition-colors line-clamp-2 leading-snug">
                  {video.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-text-muted text-xs font-medium uppercase tracking-wider">
                  <span>Watch Video</span>
                  <span className="text-accent-gold">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
