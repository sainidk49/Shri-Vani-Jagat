import React, { useState } from 'react';
import {
  Radio,
  Wifi,
  Users,
  Volume2,
  CheckCircle2,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { BROADCAST_SPECS } from '../data/content';

interface LiveBroadcastStudioProps {
  onOpenBooking: (service?: string) => void;
}

export const LiveBroadcastStudio: React.FC<LiveBroadcastStudioProps> = ({ onOpenBooking }) => {
  const [activeCam, setActiveCam] = useState<number>(0);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [viewerCount] = useState('24,810');

  const cameraFeeds = [
    {
      id: 0,
      label: 'CAM 1: Stage & Sanctum',
      sub: '4K Studio Telecast',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80',
      lens: '85mm Cinema Prime',
      tag: 'Main Sanctum',
    },
    {
      id: 1,
      label: 'CAM 2: 24ft Jimmy Jib Crane',
      sub: 'Dynamic Arena Sweeps',
      image: 'https://images.unsplash.com/photo-1567506476376-1282584643ca?auto=format&fit=crop&q=80',
      lens: '24-70mm GM II',
      tag: 'Wide Atmosphere',
    },
    {
      id: 2,
      label: 'CAM 3: Aerial Drone Skyfeed',
      sub: '4K 60fps Wireless Uplink',
      image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80',
      lens: 'Inspire 3 Cinema Air',
      tag: 'Aerial Overview',
    },
    {
      id: 3,
      label: 'CAM 4: Devotee & Close-up',
      sub: 'Emotional Candid Angle',
      image: 'https://images.unsplash.com/photo-1657020441669-10a9c43b667e?auto=format&fit=crop&q=80',
      lens: '135mm f/1.8 G-Master',
      tag: 'Spiritual Portrait',
    },
  ];

  return (
    <section id="live-broadcast" className="py-16 sm:py-24 bg-[#F7F3EA] border-t border-[#005162]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#005162]/30 bg-white shadow-xs mb-3.5">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span className="text-xs font-semibold text-[#005162] uppercase tracking-wider">
              Broadcast Division
            </span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
            Multi-Camera 4K Live Broadcasting
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#444444] font-sans leading-relaxed">
            Zero-dropout telecasting for Kirtans, Jagrans, Katha, and Grand Destination Weddings.
            Connecting hundreds of thousands of devotees and global NRI guests in real-time.
          </p>
        </div>

        {/* Live Broadcast Studio Simulation Monitor */}
        <div className="bg-[#0c181b] rounded-xl sm:rounded-2xl border border-[#005162]/40 p-3 sm:p-5 shadow-2xl overflow-hidden">
          {/* Virtual Monitor Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-[#173036]">
            <div className="flex items-center gap-3">
              {/* Tally Light Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>ON AIR · 4K 60FPS</span>
              </div>
              <span className="text-xs text-[#D4A72C] hidden md:inline font-mono">
                ATEM Constellation 4K Switcher Unit
              </span>
            </div>

            {/* Live Stats Bar */}
            <div className="flex items-center gap-4 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-1.5 bg-[#00262e] px-2.5 py-1 rounded border border-[#005162]/40">
                <Users className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span className="tabular-nums font-semibold text-white">{viewerCount}</span>
                <span className="text-stone-400 hidden sm:inline">Active Viewers</span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 bg-[#00262e] px-2.5 py-1 rounded border border-[#005162]/40">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">5G Bonded: 84 Mbps</span>
              </div>
            </div>
          </div>

          {/* Interactive Screen Container (Guaranteed 16:9 Aspect Ratio) */}
          <div className="relative aspect-video w-full rounded-lg sm:rounded-xl overflow-hidden bg-black mt-3 sm:mt-4 shadow-inner">
            <img
              src={cameraFeeds[activeCam].image}
              alt={cameraFeeds[activeCam].label}
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />

            {/* Broadcast Overlay Graphics */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Top-Left Live Watermark with #005162 Brand Identity */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-2 pointer-events-none">
              <div className="px-2.5 py-1 rounded bg-[#005162]/90 backdrop-blur-md border border-[#D4A72C]/60 text-white font-royal text-xs font-bold tracking-wider">
                SHRI VANI JAGAT LIVE
              </div>
              <span className="text-[11px] font-mono text-white/95 bg-red-600 px-2 py-0.5 rounded">
                {cameraFeeds[activeCam].tag}
              </span>
            </div>

            {/* Bottom Screen Live Details */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between gap-3 text-white">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-md">
                  {cameraFeeds[activeCam].label}
                </p>
                <p className="text-[11px] sm:text-xs text-[#D4A72C] font-mono drop-shadow">
                  {cameraFeeds[activeCam].lens} · Low-Latency SDI Wireless
                </p>
              </div>

              {/* Player Audio Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAudioMuted(!isAudioMuted)}
                  className="p-2 sm:p-2.5 rounded-lg bg-black/70 hover:bg-[#005162] hover:text-white text-white border border-white/20 transition-colors cursor-pointer"
                  aria-label={isAudioMuted ? 'Unmute Live Audio' : 'Mute Live Audio'}
                >
                  <Volume2 className={`w-4 h-4 ${isAudioMuted ? 'text-gray-400' : 'text-[#D4A72C]'}`} />
                </button>
                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 border border-white/20 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AUDIO: 48kHz STEREO
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Camera Angle Switcher Controls */}
          <div className="mt-4 sm:mt-5 pt-4 border-t border-[#173036]">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-[#D4A72C] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Live Camera Angle Switcher (Click to Switch Feed):
              </span>
              <span className="text-[11px] text-stone-400 hidden sm:inline font-mono">
                Active Angle: {activeCam + 1} of 4
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {cameraFeeds.map((cam) => (
                <button
                  key={cam.id}
                  onClick={() => setActiveCam(cam.id)}
                  className={`text-left p-2.5 sm:p-3 rounded-lg border transition-all flex flex-col justify-between group cursor-pointer ${
                    activeCam === cam.id
                      ? 'bg-[#003E4B] border-[#D4A72C] shadow-md shadow-[#D4A72C]/20 ring-1 ring-[#D4A72C]'
                      : 'bg-[#0e2126] border-[#183942] hover:border-[#005162]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-xs font-bold font-mono ${
                        activeCam === cam.id ? 'text-[#D4A72C]' : 'text-stone-300'
                      }`}
                    >
                      FEED {cam.id + 1}
                    </span>
                    {activeCam === cam.id && (
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white truncate">{cam.label}</p>
                  <p className="text-[10px] text-stone-300 truncate mt-0.5">{cam.sub}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Broadcasting Rigor Grid (White Cards on Warm Ivory) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {BROADCAST_SPECS.map((spec) => (
            <div
              key={spec.title}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#005162]/15 hover:border-[#005162] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#005162]/10 border border-[#005162]/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform text-[#005162]">
                <CheckCircle2 className="w-5 h-5 text-[#005162]" />
              </div>
              <h3 className="font-royal text-base sm:text-lg font-bold text-[#111111]">
                {spec.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                {spec.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Live Broadcast Booking Banner with Primary CTA */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-xl bg-white border border-[#005162]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-royal text-xl sm:text-2xl font-bold text-[#111111]">
              Need Professional Live Broadcast for Kirtan, Jagran, or Wedding?
            </h3>
            <p className="text-xs sm:text-sm text-[#444444] max-w-xl">
              We deploy complete flight-cased mobile production setups with bonded satellite/cellular
              uplink anywhere across India within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            {/* Primary CTA in #005162 */}
            <button
              onClick={() => onOpenBooking('Multi-Cam Live Broadcasting')}
              className="px-6 py-3 rounded-md font-sans text-xs sm:text-sm font-semibold text-white bg-[#005162] hover:bg-[#003E4B] transition-colors flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-md shadow-[#005162]/25 border border-[#005162]"
            >
              <span>BOOK BROADCAST UNIT</span>
              <ArrowRight className="w-4 h-4 text-[#D4A72C]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
