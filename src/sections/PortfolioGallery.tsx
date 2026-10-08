import React, { useState } from 'react';
import {
  Film,
  Camera,
  MapPin,
  X,
  MessageCircle,
  Eye,
  Radio,
} from 'lucide-react';
import { PORTFOLIO_DATA, PortfolioItem, BRAND_DATA } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioGalleryProps {
  onOpenBooking: (eventName?: string) => void;
  onOpenFilmModal: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onOpenBooking,
  onOpenFilmModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Creations' },
    { id: 'weddings', label: 'Royal Weddings' },
    { id: 'live-broadcast', label: 'Live Broadcast & Kirtan' },
    { id: 'prewedding', label: 'Pre-Wedding' },
    { id: 'drone', label: 'Drone & Aerial' },
    { id: 'social', label: 'Celebrations' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-brand-primary border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-10 h-[1px] bg-accent-gold" />
            <span className="font-sans text-xs text-accent-gold uppercase tracking-[0.2em] font-medium">
              Curated Archives
            </span>
            <span className="w-10 h-[1px] bg-accent-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-text-light tracking-tight mt-2 font-cormorant font-semibold">
            Selected Works & Broadcast Films
          </h2>
          <p className="mt-6 text-sm sm:text-base text-text-light/70 font-sans">
            A tapestry of royal wedding ceremonies, devotional kirtan broadcasts, and destination
            cinema captured across India's most iconic palaces and sanctuaries.
          </p>
        </motion.div>

        {/* Interactive Filter Controls */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 sm:mb-16 no-scrollbar gap-2 sm:gap-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-accent-gold text-brand-primary'
                  : 'bg-white/5 text-text-light/70 hover:text-text-light hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Portfolio Grid - Masonry style feel with different aspect ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className={`group rounded-xl overflow-hidden bg-brand-dark border border-white/5 hover:border-accent-gold/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent-gold/10 ${index % 4 === 0 || index % 4 === 3 ? 'lg:col-span-2 sm:aspect-[2/1]' : 'aspect-square sm:aspect-[4/5]'} relative flex flex-col justify-between`}
              >
                {/* Media Preview Box */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-brand-deep">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Top Overlay Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] font-sans px-3 py-1 rounded bg-black/60 backdrop-blur-md text-accent-gold uppercase tracking-widest border border-white/10 font-medium">
                      {item.categoryLabel}
                    </span>
                    {item.metrics && (
                      <span className="text-[10px] font-sans px-3 py-1 rounded bg-red-600/90 text-white flex items-center gap-1.5 uppercase tracking-widest font-medium">
                        <Radio className="w-3 h-3 animate-pulse" />
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-accent-gold/90 backdrop-blur-sm flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Eye className="w-6 h-6 text-brand-primary" />
                    </div>
                  </div>
                </div>

                {/* Card Meta Content on Dark */}
                <div className="p-6 relative z-10 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-text-light/60 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                    <span className="truncate">{item.location}</span>
                    <span className="text-accent-gold">&bull;</span>
                    <span className="tabular-nums font-semibold">{item.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl text-text-light group-hover:text-accent-gold transition-colors leading-snug drop-shadow-md font-cormorant font-medium">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Reel CTA */}
        <div className="mt-16 sm:mt-24 text-center">
          <button
            onClick={() => onOpenFilmModal()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded border border-white/20 hover:border-accent-gold hover:bg-accent-gold/10 text-text-light font-sans text-sm font-semibold tracking-wide transition-all group"
          >
            <Film className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
            <span>Watch Full Cinema Showreel</span>
          </button>
        </div>
      </div>

      {/* High-Resolution Portfolio Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedItem(null)}
          />

          <div className="relative w-full max-w-5xl max-h-[90vh] bg-brand-primary border border-white/10 rounded-2xl overflow-y-auto shadow-2xl z-10 flex flex-col text-text-light custom-scrollbar">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 sticky top-0 bg-brand-primary/95 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-sans uppercase px-3 py-1 rounded bg-accent-gold/10 text-accent-gold border border-accent-gold/30 tracking-widest font-medium">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-sm text-text-light/60 hidden sm:inline font-medium">
                  {selectedItem.location}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded text-text-light/60 hover:text-accent-gold hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Media Showcase */}
            <div className="relative aspect-video w-full bg-black shrink-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-text-light">
                <h3 className="text-3xl sm:text-4xl text-text-light drop-shadow-xl mb-2 font-cormorant font-medium">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-accent-gold font-sans tracking-wide">
                  Client: {selectedItem.client} &bull; {selectedItem.location} ({selectedItem.year})
                </p>
              </div>
            </div>

            {/* Modal Body Info on Dark */}
            <div className="p-6 sm:p-8 space-y-8 bg-brand-dark">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-accent-gold mb-3 font-medium">
                  Production Overview
                </h4>
                <p className="text-sm sm:text-base text-text-light/80 font-sans leading-relaxed font-normal">
                  {selectedItem.description}
                </p>
              </div>

              {/* Equipment Breakdown */}
              <div className="p-6 rounded-xl bg-brand-primary border border-white/5">
                <h4 className="text-xs uppercase tracking-[0.2em] text-accent-gold mb-4 flex items-center gap-2 font-medium">
                  <Camera className="w-4 h-4" />
                  Equipment & Technology Deployed
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedItem.equipment.map((eq) => (
                    <span
                      key={eq}
                      className="text-xs font-sans px-3 py-1.5 rounded bg-white/5 text-text-light/80 border border-white/10"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Shri Vani Jagat! I was admiring your work "${selectedItem.title}" and would love to inquire about booking similar coverage.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded text-sm text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Inquire via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const itemTitle = selectedItem.title;
                    setSelectedItem(null);
                    onOpenBooking(itemTitle);
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded text-sm font-semibold text-brand-primary bg-accent-gold hover:bg-gold-soft transition-colors cursor-pointer shadow-lg"
                >
                  BOOK SIMILAR PRODUCTION &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
