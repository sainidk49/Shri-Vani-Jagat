import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, ChevronRight, Play } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
  onOpenFilmModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenFilmModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Live', href: '#live-now' },
    { label: 'Videos', href: '#youtube' },
    { label: 'Gallery', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string, isExternal = false) => {
    if (isExternal) {
      window.open(href, '_blank');
      return;
    }
    setMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-primary/95 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <BrandLogo variant="light" size="md" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-text-light/80 hover:text-accent-gold transition-colors tracking-wide cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://youtube.com/@shreevanijagat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-light/80 hover:text-accent-gold transition-colors tracking-wide flex items-center gap-1.5"
              >
                <span>YouTube</span>
                <Youtube className="w-4 h-4 text-red-500" />
              </a>
            </nav>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-text-light hover:text-accent-gold transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-brand-primary border-l border-white/5 p-6 flex flex-col shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mt-2">
            <BrandLogo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-text-light hover:text-accent-gold cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2 flex-grow">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between p-3 rounded-lg text-left text-base font-medium text-text-light/90 hover:text-accent-gold hover:bg-white/5 transition-all cursor-pointer"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
            <a
              href="https://youtube.com/@shreevanijagat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg text-left text-base font-medium text-text-light/90 hover:text-accent-gold hover:bg-white/5 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>YouTube</span>
                <Youtube className="w-4 h-4 text-red-500" />
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          </nav>

          <div className="pt-6 border-t border-white/10 mb-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFilmModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-medium text-brand-primary bg-accent-gold hover:bg-yellow-600 rounded shadow-xl active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-brand-primary" />
              <span>Watch Showreel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
