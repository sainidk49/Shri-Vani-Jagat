import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/AboutSection';
import { Services } from './sections/Services';
import { DevotionalExperience } from './sections/DevotionalExperience';
import { LiveNow } from './sections/LiveNow';
import { YouTubeSection } from './sections/YouTubeSection';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { PortfolioGallery } from './sections/PortfolioGallery';
import { GearRig } from './sections/GearRig';
import { InvestmentPackages } from './sections/InvestmentPackages';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { BookingSection } from './sections/BookingSection';
import { CtaSection } from './sections/CtaSection';
import { Footer } from './components/Footer';
import { FilmPlayerModal } from './components/FilmPlayerModal';
import { MessageCircle, Calendar } from 'lucide-react';
import { BRAND_DATA } from './data/content';

export default function App() {
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedBookingService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFilmModal = () => {
    setFilmModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-primary text-text-light font-sans overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenFilmModal={handleOpenFilmModal}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenFilmModal={handleOpenFilmModal}
        />

        {/* About Section */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* Live Now Section */}
        <LiveNow />

        {/* Dedicated YouTube Section */}
        <YouTubeSection />

        {/* Core Production Services */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Devotional Spiritual Experience */}
        <DevotionalExperience />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Curated Portfolio Gallery */}
        <PortfolioGallery
          onOpenBooking={handleOpenBooking}
          onOpenFilmModal={handleOpenFilmModal}
        />

        {/* Technical Cinema & Broadcast Gear Rig */}
        <GearRig />

        {/* Transparent Investment & Package Suites */}
        <InvestmentPackages onOpenBooking={handleOpenBooking} />

        {/* Client Reviews & Spiritual Trust Endorsements */}
        <Testimonials />

        {/* Pre-Booking FAQ & Assurance */}
        <FAQ />

        {/* Interactive Booking & Date Availability Checker */}
        <BookingSection preselectedService={preselectedBookingService} />

        {/* Final CTA */}
        <CtaSection />
      </main>

      <Footer />

      <FilmPlayerModal
        isOpen={filmModalOpen}
        onClose={() => setFilmModalOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center gap-2.5">
        <a
          href={`https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encodeURIComponent(BRAND_DATA.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-accent-gold hover:bg-gold-soft text-brand-primary font-semibold text-xs shadow-xl transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK YOUR EVENT →</span>
        </button>
      </div>
    </div>
  );
}
