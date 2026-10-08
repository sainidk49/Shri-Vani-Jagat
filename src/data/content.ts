/**
 * Shri Vani Jagat - Master Website Content & Asset Data
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'prewedding' | 'live-broadcast' | 'drone' | 'social';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  aspectRatio: '16:9' | '4:3' | '3:4';
  description: string;
  client: string;
  equipment: string[];
  metrics?: string;
  videoDuration?: string;
  streamUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  equipment: string[];
  image: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  role: string;
  location: string;
  event: string;
  rating: number;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  priceEstimate: string;
  deliverables: string[];
  crewSize: string;
  highlighted?: boolean;
}

export const BRAND_DATA = {
  name: 'Shri Vani Jagat',
  hindiName: 'श्री वाणी जगत',
  descriptor: 'Wedding Cinema & Live Broadcast',
  tagline: 'Where Sacred Traditions Become Timeless Cinema',
  subTagline:
    'Luxury Wedding Cinematography & High-Definition Multi-Camera Live Broadcasting for Grand Celebrations & Spiritual Gatherings Across India and Worldwide.',
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  whatsappMessage: 'Hello Shri Vani Jagat Team, I would like to inquire about booking your cinematic and live broadcast services.',
  email: 'studio@shrivanijagat.com',
  locations: [
    { city: 'New Delhi', area: 'Connaught Place & South Delhi HQ' },
    { city: 'Jaipur', area: 'Civil Lines Heritage Studio' },
    { city: 'Vrindavan', area: 'Devotional Broadcast Hub' },
  ],
  legacyYears: '15+',
  weddingsCaptured: '1,200+',
  liveBroadcasts: '550+',
  globalStreams: '35+ Countries',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-cinema',
    number: '01',
    title: 'Royal Wedding Cinematography',
    subtitle: 'Feature-Length Cinematic Films & Emotional Teasers',
    description:
      'We treat every wedding as an opulent cinematic production. From the emotional intimacy of the Varmala to the sacred dignity of the Pheras, our cinema lenses and colorists deliver unforgettable visual poetry.',
    features: [
      'Multi-angle 4K 10-bit color graded cinema capture',
      'Exclusive same-day cinematic highlight trailer',
      'High-fidelity directional audio capture during vows & rituals',
      'Custom bespoke musical scoring & archival storage',
    ],
    equipment: ['Sony FX6 Cinema Line', 'Sony FX3', 'G-Master Primes', 'DJI Ronin RS3 Pro'],
    image: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&q=80',
    badge: 'Signature Craft',
  },
  {
    id: 'live-broadcast',
    number: '02',
    title: 'Multi-Cam Live Broadcasting',
    subtitle: 'Zero-Dropout 4K Live Telecasting for Kirtan, Jagran & NRI Weddings',
    description:
      'Engineered for large-scale devotional gatherings and luxury destination weddings. Utilizing broadcast-grade video switchers and bonded multi-SIM cellular uplinks, we stream seamless 4K feeds to YouTube, Facebook, and private guest portals worldwide.',
    features: [
      'Up to 8-Camera broadcast switching with instant replay',
      'Redundant multi-SIM 5G/4G bonded internet (Zero buffering)',
      '32-Channel digital sound mixing for crystal-clear vocals & instruments',
      'Direct LED Wall feeds and crane jimmy-jib aerial perspective',
    ],
    equipment: ['Blackmagic ATEM Constellation 4K', 'Teradek Bolt 4K', 'Sound Devices 833', 'LiveU Solo'],
    image: 'https://images.unsplash.com/photo-1567506476376-1282584643ca?auto=format&fit=crop&q=80',
    badge: 'Broadcast Grade',
  },
  {
    id: 'candid-photography',
    number: '03',
    title: 'Fine-Art Candid Photography',
    subtitle: 'Unobtrusive, Emotion-Driven Storytelling',
    description:
      'Pure, honest human emotion captured in natural light. We preserve the unspoken glances, tears of joy, and spontaneous laughter without staging or interrupting your sacred rituals.',
    features: [
      'Dual senior photojournalists for comprehensive coverage',
      'Handcrafted Italian genuine leather heirloom wedding albums',
      'Bespoke tonal color grading with timeless archival palette',
      'Private password-protected high-resolution cloud gallery',
    ],
    equipment: ['Canon EOS R5C', 'Canon RF 85mm f/1.2L', 'Profoto B10X Lights'],
    image: 'https://images.unsplash.com/photo-1733759414886-6b3a5423ceb3?auto=format&fit=crop&q=80',
    badge: 'Editorial Grade',
  },
  {
    id: 'drone-aerial',
    number: '04',
    title: 'Cinema Drone & Aerial Perspectives',
    subtitle: 'DGCA Certified 4K 60fps Drone Cinematography',
    description:
      'Epic architectural sweeps capturing majestic palace ramparts, lakeside mandaps, and grand baraat processions from high above with gentle, cinematic grace.',
    features: [
      'Certified commercial drone pilots with dual redundancy',
      'Smooth cinematic high-altitude sweeps and sunset tracking',
      'Twilight lantern and fireworks aerial tracking',
      'Integrated live video output directly into broadcast switcher',
    ],
    equipment: ['DJI Inspire 3 Full-Frame', 'DJI Mavic 3 Cine', 'ProRes 422 HQ'],
    image: 'https://images.unsplash.com/photo-1774724773320-7b135ff9ecc9?auto=format&fit=crop&q=80',
    badge: 'Certified Aerial',
  },
  {
    id: 'prewedding',
    number: '05',
    title: 'Destination Pre-Wedding Films',
    subtitle: 'Concept-Driven Romance in Exotic Locations',
    description:
      'A bespoke pre-wedding narrative tailored to your personal love story—whether amidst the snowfields of Kashmir, the golden sands of Jaisalmer, or the regal palace courtyards of Udaipur.',
    features: [
      'Styling & moodboard consultation with creative director',
      'Scripted cinematic narrative with intimate voiceovers',
      'Comprehensive drone and gimbal camera choreography',
      'Short social-ready cinematic reels + 4-minute signature film',
    ],
    equipment: ['Anamorphic Cinema Lenses', 'Sony FX3', 'Wireless Audio Transmitters'],
    image: 'https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?auto=format&fit=crop&q=80',
    badge: 'Destination Film',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'wedding-1',
    title: 'The Royal Pheras at City Palace',
    category: 'weddings',
    categoryLabel: 'Royal Wedding',
    location: 'City Palace, Udaipur',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1741201864879-c5e7f81c98b0?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'An ethereal twilight ceremony illuminated by five thousand oil lamps against the backdrop of Lake Pichola. Captured with dual cinema cameras and live telecast to family across 18 countries.',
    client: 'Ananya & Devendra',
    equipment: ['Sony FX6 Cinema', 'Canon R5C', 'DJI Mavic 3 Cine'],
    videoDuration: '4:15 Film',
  },
  {
    id: 'live-festival-flagship',
    title: 'Grand Devotional Mahotsav & Festival Live Broadcast',
    category: 'live-broadcast',
    categoryLabel: 'Spiritual Live',
    location: 'Shri Dham Vrindavan & Mathura',
    year: '2025',
    image: '/assets/hero-banner.jpg',
    aspectRatio: '16:9',
    description:
      'High-altitude jimmy jib sweeps, multi-angle cinema cameras, and pristine multi-track audio broadcast capturing sacred darshan, grand mandap lighting, and tens of thousands in devotional celebration.',
    client: 'International Devotional Trust',
    equipment: ['Sony FX9 Broadcast', '24ft Jimmy Jib Crane', 'ATEM Constellation 8K', 'LiveU 5G Multi-SIM'],
    metrics: '850K+ Live Viewers',
    videoDuration: 'Full Festival Broadcast',
  },
  {
    id: 'live-kirtan-1',
    title: 'Akhand Kirtan Mahotsav Live Stream',
    category: 'live-broadcast',
    categoryLabel: 'Spiritual Live',
    location: 'Shri Vrindavan Dham',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1657020441669-10a9c43b667e?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'Eight-camera live broadcast of a 3-day spiritual festival with over 450,000 real-time YouTube viewers. Multi-track audio mixed live with zero dropout rate.',
    client: 'Shri Harinaam Trust',
    equipment: ['Blackmagic ATEM 4K', 'LiveU 5G Bonded', 'Sony Broadcast Cams', 'Jimmy Jib 24ft'],
    metrics: '450K+ Live Viewers',
    videoDuration: 'Live Stream Record',
  },
  {
    id: 'prewedding-1',
    title: 'Winter Romance in Gulmarg',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    location: 'Gulmarg, Kashmir',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1715285977619-6d9357168f46?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'Intimate snowscapes captured with vintage anamorphic glass, highlighting delicate warmth against pristine alpine slopes.',
    client: 'Meera & Siddharth',
    equipment: ['Sony FX3', 'Atlas Anamorphic 40mm', 'DJI Ronin RS3'],
    videoDuration: '3:20 Film',
  },
  {
    id: 'drone-1',
    title: 'The Grand Baraat from the Skies',
    category: 'drone',
    categoryLabel: 'Aerial Cinema',
    location: 'Fairmont, Jaipur',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1686477316647-aaf835cf866d?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'Bird-eye aerial cinematography capturing 500 dancing guests, vintage Rolls-Royce fleet, and floral petal showers over the grand palace gates.',
    client: 'Pooja & Rohan',
    equipment: ['DJI Inspire 3 Cinema', 'X9-8K Air Gimbal'],
    metrics: '8K ProRes Capture',
  },
  {
    id: 'wedding-stage-1',
    title: 'The Golden Lotus Mandap',
    category: 'weddings',
    categoryLabel: 'Wedding Design',
    location: 'Umaid Bhawan Palace, Jodhpur',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'Architectural photography and lighting symmetry of a floral lotus mandap built with 50,000 imported marigolds and jasmine garlands.',
    client: 'Rhea & Aditya',
    equipment: ['Canon R5C 50mm f/1.2', 'Profoto B10X Dual Lights'],
  },
  {
    id: 'live-kirtan-2',
    title: 'Devotional Bhajan Sandhya Multi-Cam',
    category: 'live-broadcast',
    categoryLabel: 'Spiritual Live',
    location: 'Birla Mandir, New Delhi',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'Multi-angle telecast with dynamic crane movements and dedicated high-fidelity vocal feeds streamed to global audiences in high dynamic range.',
    client: 'Sant Samaj Committee',
    equipment: ['Sony FX6 Broadcast', 'ATEM Television Studio', 'Sennheiser Wireless'],
    metrics: '280K+ Live Viewers',
  },
  {
    id: 'prewedding-2',
    title: 'Samode Palace Heritage Memoir',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    location: 'Samode Palace, Rajasthan',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1735052712464-9d24b69be5f5?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'Golden hour portraiture through frescoed arches and antique mirror halls, celebrating the grace of royal Rajasthani architecture.',
    client: 'Tanya & Kabir',
    equipment: ['Sony A1', 'GM 50mm f/1.2', 'Reflector Setup'],
  },
  {
    id: 'wedding-candid-1',
    title: 'Sacred Tears of Joy: The Kanyadaan',
    category: 'weddings',
    categoryLabel: 'Royal Wedding',
    location: 'Rambagh Palace, Jaipur',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1733759414886-6b3a5423ceb3?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'A poignant father-daughter embrace captured in quiet black and white tone, highlighting the raw, unscripted beauty of family love.',
    client: 'Isha & Manav',
    equipment: ['Leica SL2', '50mm Summilux'],
  },
  {
    id: 'drone-2',
    title: 'Lakeside Twilight Mandap',
    category: 'drone',
    categoryLabel: 'Aerial Cinema',
    location: 'Jagmandir Island, Udaipur',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1649497539290-f26d2654a258?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'Low-altitude drone glide across the waters of Lake Pichola as the island sanctuary glows with thousands of floating candles.',
    client: 'Kritika & Arjun',
    equipment: ['DJI Mavic 3 Cine', 'ND16 Filter'],
  },
  {
    id: 'prewedding-3',
    title: 'Secret Courtyard at Sundown',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    location: 'Neemrana Fort-Palace',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1767790693205-c9f4df07a234?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'Soft diffused pastel tones framing a romantic stroll through cascading bougainvillea gardens and terraced fortresses.',
    client: 'Simran & Karan',
    equipment: ['Sony FX3', 'Sony 24-70mm GM II'],
  },
  {
    id: 'ritual-detail-1',
    title: 'Sacred Sindoor & Varmala Rites',
    category: 'weddings',
    categoryLabel: 'Ritual Detail',
    location: 'The Oberoi Rajvilas, Jaipur',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1633104502699-b2ecf0fee294?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'Macro lens capture of Vedic fire reflections in heirloom polki diamonds as sacred mantras echo through the palace sanctum.',
    client: 'Aarushi & Varun',
    equipment: ['Sony 90mm Macro f/2.8', 'Cinematic Ring Light'],
  },
  {
    id: 'live-kirtan-3',
    title: 'Maha Jagran & Chowki Global Broadcast',
    category: 'live-broadcast',
    categoryLabel: 'Spiritual Live',
    location: 'Haridwar Ganga Ghats',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1667831617890-458ca443d799?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'All-night live streaming alongside the sacred river with multi-sim redundancy, providing seamless broadcast to over 600,000 households.',
    client: 'Ganga Seva Samiti',
    equipment: ['Blackmagic 4K Studio Cameras', 'LiveU Bonded Cellular', 'Allen & Heath Mix'],
    metrics: '620K+ Live Viewers',
  },
  {
    id: 'social-1',
    title: 'Golden Jubilee Gala Evening',
    category: 'social',
    categoryLabel: 'Celebrations',
    location: 'Taj Palace, New Delhi',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'High-energy multi-camera production covering anniversary celebrations, live orchestra, and celebrity musical performances.',
    client: 'Singhania Family',
    equipment: ['Sony FX6 Dual Setup', 'Ronin Stabilizer'],
  },
  {
    id: 'birthday-1',
    title: 'Fairytale Milestone Celebration',
    category: 'social',
    categoryLabel: 'Celebrations',
    location: 'The Leela Palace, Gurugram',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1699854227507-4b9ff940652a?auto=format&fit=crop&q=80',
    aspectRatio: '4:3',
    description:
      'Candid portraits and joyful video highlights of a grand family gathering with elaborate thematic floral styling.',
    client: 'Kapoor Family',
    equipment: ['Sony A7S III', 'GM Primes'],
  },
  {
    id: 'social-2',
    title: 'Royal Sangeet Musical Night',
    category: 'social',
    categoryLabel: 'Celebrations',
    location: 'Jai Mahal Palace, Jaipur',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1645264090488-a019de493023?auto=format&fit=crop&q=80',
    aspectRatio: '16:9',
    description:
      'Vibrant stage performances captured with high-speed shutter cameras and broadcast simultaneously onto 40ft outdoor LED screens.',
    client: 'Nandini & Harsh',
    equipment: ['Blackmagic Cinema Cameras', 'Wireless Video Links'],
  },
];

export const BROADCAST_SPECS = [
  {
    title: 'Multi-Camera 4K Switcher',
    detail: 'Blackmagic ATEM Constellation 4K with hardware broadcast control panel & multi-view monitors.',
    icon: 'Camera',
  },
  {
    title: 'Zero-Dropout Bonded 5G',
    detail: 'LiveU cellular bonding combining 4 distinct telecom networks for 100% failover redundancy.',
    icon: 'Wifi',
  },
  {
    title: 'Live Jib & Aerial Feeds',
    detail: '24ft Jimmy Jib motorized crane and DJI Inspire 3 wireless video transmitter piped into live mix.',
    icon: 'Radio',
  },
  {
    title: 'Studio Grade Audio Mix',
    detail: 'Dedicated 32-channel digital console with specialized EQ for Kirtan, Tabla, Harmonium, and Vedic chants.',
    icon: 'Mic2',
  },
  {
    title: 'Dual Platform Streaming',
    detail: 'Concurrent 4K output to YouTube, Facebook Live, and private password-protected webcasts for NRI families.',
    icon: 'Share2',
  },
  {
    title: 'Direct LED Wall Output',
    detail: 'Zero-delay HDMI/SDI output for venue LED walls, ensuring live audience visual sync across the entire arena.',
    icon: 'Monitor',
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'broadcast-special',
    name: 'The Sacred Live Broadcast',
    tagline: 'Ideal for Kirtan, Jagran, Katha or Wedding Live Webcast',
    priceEstimate: 'Custom / Event Duration',
    crewSize: '4–6 Technical Engineers',
    deliverables: [
      'Multi-Camera 4K setup (3–5 Cameras including Jimmy Jib Crane)',
      'High-speed bonded multi-SIM cellular internet for 100% uptime',
      'Dual live streaming (YouTube 4K + Facebook HD + Private Link)',
      'Dedicated digital sound engineer with multi-track vocal capture',
      'Instant raw broadcast recording in 4K ProRes on SSD drive',
      'Customized live stream overlays, countdown timer & donor scrolls',
    ],
  },
  {
    id: 'royal-wedding',
    name: 'The Royal Wedding Cinema',
    tagline: 'Our Most Cherished Photography & Film Combination',
    priceEstimate: 'Full 3-Day Wedding Coverage',
    crewSize: '8 Creative Artists & Cinematographers',
    highlighted: true,
    deliverables: [
      'Comprehensive coverage: Mehendi, Sangeet, Haldi, Wedding & Reception',
      '2x Senior Candid Photographers + 2x Traditional Photographers',
      '3x Cinema Line Cinematographers (Sony FX6 / FX3 Cinema Rigs)',
      '1x Certified Commercial Drone Pilot (DJI Mavic 3 Cine)',
      '1x Signature Cinematic Wedding Film (15–20 minutes)',
      '1x Same-Day Highlight Reel for social sharing (60 seconds)',
      '2x Handcrafted Italian Leather Heirloom Photobooks (40 pages each)',
    ],
  },
  {
    id: 'grand-monarch',
    name: 'The Grand Monarch Complete Suite',
    tagline: 'Cinema, Photography, Pre-Wedding & Live Multi-Cam Broadcast',
    priceEstimate: 'The Ultimate Royal Production',
    crewSize: '12 Full-Time Crew & Technical Unit',
    deliverables: [
      'Everything in The Royal Wedding Cinema Suite',
      '2-Day Destination Pre-Wedding Shoot with aerial drone & film styling',
      'Complete Multi-Cam 4K Live Broadcast during Pheras & Reception for global guests',
      'Jimmy Jib motorized 24ft crane for grand baraat and stage entry',
      '3x Premium Heirloom Albums + 2x Parents Miniature Albums',
      'Raw footage delivered on encrypted high-speed 2TB SSD',
      'Dedicated Senior Creative Director overseeing entire storytelling',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'Shri Vani Jagat captured our Udaipur wedding with breathtaking grandeur. When we watched our 20-minute wedding film, we wept with joy. But what truly amazed us was the live broadcast: our relatives in London and California felt as if they were sitting in the front row of the mandap!',
    client: 'Ananya & Devendra Singhal',
    role: 'Bride & Groom',
    location: 'City Palace, Udaipur',
    event: 'Royal Destination Wedding',
    rating: 5,
  },
  {
    id: 't-2',
    quote:
      'We entrusted Shri Vani Jagat with our annual 3-day Akhand Kirtan in Vrindavan. Their broadcast crew operated with deep reverence, unobtrusive camera work, and phenomenal sound quality. Over 400,000 devotees watched the stream smoothly without a single second of buffering.',
    client: 'Mahant Rajeshwar Das Ji',
    role: 'General Secretary',
    location: 'Shri Vrindavan Dham',
    event: 'Akhand Kirtan Mahotsav',
    rating: 5,
  },
  {
    id: 't-3',
    quote:
      'The attention to detail is unmatched. From the drone sweeps over the palace to the candid tears during the Bidaai, they never made us feel staged. Every frame looks like a Sanjay Leela Bhansali film. Truly the finest wedding team in India.',
    client: 'Rhea & Aditya Mehra',
    role: 'Bride & Groom',
    location: 'Umaid Bhawan, Jodhpur',
    event: 'Palace Wedding & Sangeet',
    rating: 5,
  },
  {
    id: 't-4',
    quote:
      'Incredible professionalism during our parents’ 50th Anniversary Gala. They provided live feeds to the banquet LED screens and recorded the entire ceremony with multi-cam perfection. Highly recommend their entire production unit!',
    client: 'Vikram & Radhika Goel',
    role: 'Family Host',
    location: 'Taj Palace, New Delhi',
    event: 'Golden Jubilee Celebration',
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    q: 'How far in advance should we reserve our wedding or live broadcast date?',
    a: 'Because we commit our core senior creative directors and dedicated broadcast hardware to only one grand event per weekend, dates for the auspicious winter wedding season (October to March) are typically booked 6 to 12 months in advance. We recommend checking availability as soon as your venue is confirmed.',
  },
  {
    q: 'How does your live broadcasting work at remote or destination venues?',
    a: 'We bring our own broadcast-grade multi-SIM cellular bonding terminals (LiveU system) that combine multiple 5G and 4G networks simultaneously. This guarantees zero buffering and uninterrupted 4K streaming even in remote palace courtyards, river ghats, or hill stations where standard Wi-Fi is unreliable.',
  },
  {
    q: 'Can family members living abroad interact or leave wishes during the live stream?',
    a: 'Yes! We provide interactive live broadcast portals with real-time prayer and congratulatory guestbooks, live viewer chat moderation, and even custom private password-protected links for families who prefer exclusivity.',
  },
  {
    q: 'What is your turnaround time for wedding films and photo albums?',
    a: 'We deliver a stunning 60-second teaser within 48 to 72 hours of your wedding so you can share the joy immediately on social media. Your complete color-graded cinematic film and full photo gallery are delivered within 4 to 6 weeks, followed by album proofing and luxury Italian printing.',
  },
  {
    q: 'Do you travel across India and internationally for destination events?',
    a: 'Yes. Over 60% of our assignments are destination weddings and spiritual kirtans across Rajasthan, Goa, Kashmir, Uttarakhand, Kerala, as well as international destinations in Dubai, Thailand, and Europe. Our technical and creative gear is flight-cased and ready to deploy anywhere.',
  },
];
