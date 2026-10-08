import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  CheckCircle,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: preselectedService || 'Royal Wedding (Photo + Cinema)',
    eventDate: '',
    venueCity: '',
    guestCount: '250 - 500 Guests',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Royal Wedding (Photo + Cinema)',
    'Spiritual Kirtan / Jagran Live Broadcast',
    'Wedding Live Webcast (NRI Guests)',
    'Destination Pre-Wedding',
    'Grand Milestone Celebration / Gala',
  ];

  const guestRanges = [
    'Under 150 Guests (Intimate)',
    '150 - 400 Guests (Traditional)',
    '400 - 1,000 Guests (Grand Palace)',
    '1,000+ Guests (Arena / Festival)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Shri Vani Jagat!
I would like to inquire about booking your services:
• Name: ${formData.name || 'Inquirer'}
• Event Type: ${formData.eventType}
• Date: ${formData.eventDate || 'To be decided'}
• City/Venue: ${formData.venueCity || 'Not specified'}
• Guests: ${formData.guestCount}
• Phone: ${formData.phone || 'N/A'}`;

    return `https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-brand-primary border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Contact Information & Direct Concierge */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs font-semibold text-accent-gold tracking-[0.2em] uppercase">
                Reserve Your Date
              </span>
              <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-medium text-text-light tracking-tight mt-2">
                Let Us Preserve Your Sacred Celebration
              </h2>
              <p className="mt-4 text-sm sm:text-base text-text-light/70 font-sans leading-relaxed">
                Dates for the prime wedding and devotional season are strictly limited to one master
                production crew per date. Connect directly with our Senior Production Director.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-brand-dark border border-white/5 hover:border-emerald-500/50 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-900/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-text-light/60 font-medium mb-1">Instant WhatsApp Concierge</p>
                  <p className="text-sm font-semibold text-text-light tracking-wide">{BRAND_DATA.phone}</p>
                </div>
              </a>

              <a
                href={`tel:${BRAND_DATA.phone}`}
                className="flex items-center gap-4 p-5 rounded-xl bg-brand-dark border border-white/5 hover:border-accent-gold/50 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-text-light/60 font-medium mb-1">Direct Studio Line</p>
                  <p className="text-sm font-semibold text-text-light tracking-wide">{BRAND_DATA.phone}</p>
                </div>
              </a>
            </div>

            {/* Studio Offices Locations */}
            <div className="p-6 rounded-xl bg-brand-dark border border-white/5 space-y-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-accent-gold">
                Studio Hubs:
              </p>
              {BRAND_DATA.locations.map((loc) => (
                <div key={loc.city} className="flex items-start gap-3 text-sm text-text-light/70">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-text-light font-medium">{loc.city}:</strong> {loc.area}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm text-text-light/60 pt-2">
              <ShieldCheck className="w-5 h-5 text-accent-gold" />
              <span>Full NDA & VIP Privacy Guaranteed</span>
            </div>
          </div>

          {/* Right Side: Interactive Date Availability & Consultation Form */}
          <div className="lg:col-span-7 bg-brand-dark border border-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-cormorant text-3xl font-bold text-text-light">
                  Inquiry Received with Honor
                </h3>
                <p className="text-base text-text-light/70 max-w-md mx-auto">
                  Thank you, <span className="text-accent-gold font-semibold">{formData.name}</span>.
                  Our Creative Director will review your date ({formData.eventDate || 'Requested Date'})
                  and reach out via phone/WhatsApp within 4 business hours.
                </p>
                <div className="pt-6">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-sm font-semibold tracking-wide transition-all shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Open in WhatsApp for Faster Response</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="border-b border-white/10 pb-5 mb-4">
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-text-light">
                    Check Date Availability & Request Quotation
                  </h3>
                  <p className="text-sm text-text-light/60 mt-2">
                    Fill the brief details below for an itemized production quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-text-light/80 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-text-light/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-light/80 mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-text-light/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-text-light/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-text-light/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-light/80 mb-2">
                      Event Date / Window *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-text-light/80 mb-2">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all"
                    >
                      {eventTypes.map((t) => (
                        <option key={t} value={t} className="bg-brand-primary text-text-light">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-light/80 mb-2">
                      Destination City / Venue *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Udaipur / New Delhi"
                      value={formData.venueCity}
                      onChange={(e) => setFormData({ ...formData, venueCity: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-text-light/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-light/80 mb-2">
                    Estimated Guest Count / Scale
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all"
                  >
                    {guestRanges.map((g) => (
                      <option key={g} value={g} className="bg-brand-primary text-text-light">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-light/80 mb-2">
                    Additional Vision or Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the ceremonies, live stream requirements, or preferences..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-brand-primary border border-white/10 text-text-light text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all resize-none placeholder:text-text-light/30"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 rounded bg-accent-gold hover:bg-yellow-600 text-brand-primary font-sans text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                  >
                    <span>BOOK YOUR EVENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto px-8 py-4 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
