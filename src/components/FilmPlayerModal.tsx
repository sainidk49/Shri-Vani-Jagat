import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

interface FilmPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (filmName?: string) => void;
}

export const FilmPlayerModal: React.FC<FilmPlayerModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeReel, setActiveReel] = useState(0);
  const [progress, setProgress] = useState(15);

  const reels = [
    {
      title: 'The Royal Sovereign: Udaipur Palace Wedding Film',
      category: 'Signature 4K Cinema',
      duration: '4:35',
      image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80',
      description: 'Shot on Sony FX6 Cinema Cameras with Atlas Anamorphic Prime Lenses. Edited and color-graded in DaVinci Resolve.',
    },
    {
      title: 'Devotional Maha Kirtan 4K Live Broadcast Showcase',
      category: 'Multi-Cam Broadcast',
      duration: '6:12',
      image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80',
      description: '8-Camera live telecast from Shri Vrindavan Dham with 24ft motorized crane and studio sound mix.',
    },
    {
      title: 'Snow & Marble: Kashmir & Rajasthan Pre-Wedding Reel',
      category: 'Destination Story',
      duration: '3:45',
      image: 'https://images.unsplash.com/photo-1616428751508-4d56d4df6469?auto=format&fit=crop&q=80',
      description: 'A poetic cinematic journey celebrating contrasting elements of frozen snowpeaks and sunlit Rajasthani palaces.',
    },
  ];

  // Auto increment simulated progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0c181b] border border-[#005162]/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 bg-[#081214] border-b border-[#173036]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9973E] animate-pulse" />
            <span className="font-royal text-xs sm:text-sm font-bold text-white tracking-wider">
              SHRI VANI JAGAT · CINEMA THEATRE
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Showreel Player"
          >
            <X className="w-5 h-5 text-[#C9973E]" />
          </button>
        </div>

        {/* 16:9 Screen Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={reels[activeReel].image}
            alt={reels[activeReel].title}
            className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700"
          />

          {/* Cinematic Letterbox Bars Overlay */}
          <div className="absolute top-0 left-0 right-0 h-4 sm:h-8 bg-black/80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-8 bg-black/80 pointer-events-none" />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play Button Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md border border-[#C9973E] flex items-center justify-center text-[#C9973E] hover:scale-110 transition-all cursor-pointer shadow-2xl"
            aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-[#C9973E]" />
            ) : (
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#C9973E] ml-1" />
            )}
          </button>

          {/* Screen Bottom Controls Bar */}
          <div className="absolute bottom-2 sm:bottom-4 left-3 right-3 sm:left-6 sm:right-6 flex flex-col gap-2">
            {/* Scrubber Progress Bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#C9973E] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#C9973E] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#C9973E] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#C9973E]" />}
                </button>
                <span className="font-mono text-[11px] text-stone-300">
                  {Math.floor((progress / 100) * 240)}s / {reels[activeReel].duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[#C9973E]">
                <span>MASTER 4K DCI · 24FPS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reel Selector Tabs & Info */}
        <div className="p-4 sm:p-5 bg-[#0a1518]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#005162]/40 text-[#C9973E] border border-[#005162]">
                {reels[activeReel].category}
              </span>
              <h3 className="font-royal text-base sm:text-lg font-bold text-white mt-1">
                {reels[activeReel].title}
              </h3>
              <p className="text-xs text-stone-300 mt-0.5 font-sans">
                {reels[activeReel].description}
              </p>
            </div>

            {/* CTA Button in #005162 */}
            <button
              onClick={() => {
                const title = reels[activeReel].title;
                onClose();
                onOpenBooking(title);
              }}
              className="px-5 py-2.5 rounded-md text-xs font-semibold text-white bg-[#005162] hover:bg-[#003E4B] transition-colors whitespace-nowrap cursor-pointer shrink-0 border border-[#005162] shadow-md shadow-[#005162]/30"
            >
              BOOK SIMILAR COVERAGE →
            </button>
          </div>

          {/* Switch Reels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-[#173036]">
            {reels.map((reel, idx) => (
              <button
                key={reel.title}
                onClick={() => {
                  setActiveReel(idx);
                  setProgress(5);
                  setIsPlaying(true);
                }}
                className={`p-2.5 rounded-lg text-left border transition-all cursor-pointer ${
                  activeReel === idx
                    ? 'bg-[#003E4B] border-[#C9973E] ring-1 ring-[#C9973E]'
                    : 'bg-[#08171b] border-[#143239] hover:border-[#005162] text-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#C9973E] mb-1">
                  <span>REEL 0{idx + 1}</span>
                  <span>{reel.duration}</span>
                </div>
                <p className="text-xs font-medium text-white truncate">{reel.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
