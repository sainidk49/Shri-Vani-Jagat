import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#F5EFE4' : '#0B0A08';
  const subtextColor = '#C8A45D';

  const petalPrimary = isLight ? '#C8A45D' : '#0B0A08';
  const petalSecondary = isLight ? '#E5C482' : '#15120F';
  const strokeColor = isLight ? '#C8A45D' : '#15120F';

  // Heights based on size prop
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* SVG Emblem + Typography Lockup matching official Shri Vani Jagat identity */}
      <svg
        viewBox="0 0 520 135"
        className={`${heightClasses} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Shri Vani Jagat Logo"
      >
        {/* Circular Mandala Emblem */}
        <g transform="translate(6, 6)">
          {/* Outer Ring */}
          <circle cx="60" cy="60" r="56" fill={petalPrimary} opacity={isLight ? 0.15 : 0.1} />
          
          <g fill={petalPrimary}>
            <circle cx="60" cy="60" r="53" stroke={strokeColor} strokeWidth="3.5" fill="none" />
            {/* 24 Scalloped Floral Petals */}
            {[...Array(24)].map((_, i) => (
              <path
                key={i}
                d="M 60 5 A 7 7 0 0 1 67 12 A 7 7 0 0 1 60 19 A 7 7 0 0 1 53 12 Z"
                transform={`rotate(${i * 15} 60 60)`}
                fill={i % 2 === 0 ? petalPrimary : petalSecondary}
              />
            ))}
          </g>

          {/* Inner Pure White Circular Medallion with Muted Gold Stroke */}
          <circle cx="60" cy="60" r="44" fill={isLight ? '#F5EFE4' : '#FFFFFF'} stroke="#C8A45D" strokeWidth="2" />
          
          {/* Dotted Gold Ring */}
          <circle cx="60" cy="60" r="40" stroke="#C8A45D" strokeWidth="1.5" strokeDasharray="2,3" fill="none" opacity="0.9" />

          {/* Center Emblem: Sacred Mor Pankh & Veena */}
          {/* Peacock Feather (Left) */}
          <g transform="translate(26, 25)">
            <path d="M 32 64 Q 28 35 15 15" stroke="#C8A45D" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 15 15 C 8 8, 2 20, 10 26 C 2 30, 8 40, 18 36 C 12 42, 18 50, 26 46" fill="#0B0A08" opacity="0.95" />
            <path d="M 15 15 C 22 10, 28 20, 22 28 C 30 30, 26 42, 22 46 C 26 50, 22 56, 18 58" fill="#15120F" opacity="0.85" />
            <ellipse cx="16" cy="22" rx="7.5" ry="10.5" transform="rotate(-25 16 22)" fill="#201C17" />
            <ellipse cx="16" cy="22" rx="5" ry="7" transform="rotate(-25 16 22)" fill="#C8A45D" />
            <ellipse cx="16" cy="22" rx="2.5" ry="4" transform="rotate(-25 16 22)" fill="#0B0A08" />
            <circle cx="16" cy="21" r="1.5" fill="#FAF8F2" />
          </g>

          {/* Veena Instrument (Right) */}
          <g transform="translate(42, 29)">
            <path d="M 16 58 L 36 14" stroke="#8A5A24" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 17 57 L 35 15" stroke="#C8A45D" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="20" y1="50" x2="23" y2="48" stroke="#C8A45D" strokeWidth="1.5" />
            <line x1="23" y1="44" x2="26" y2="42" stroke="#C8A45D" strokeWidth="1.5" />
            <line x1="26" y1="38" x2="29" y2="36" stroke="#C8A45D" strokeWidth="1.5" />
            <line x1="29" y1="32" x2="32" y2="30" stroke="#C8A45D" strokeWidth="1.5" />
            <line x1="32" y1="26" x2="35" y2="24" stroke="#C8A45D" strokeWidth="1.5" />
            <circle cx="14" cy="62" r="7" fill="#5C3919" stroke="#C8A45D" strokeWidth="1.2" />
            <path d="M 36 14 Q 42 10 41 6 Q 37 4 34 8" fill="#4A2D13" stroke="#C8A45D" strokeWidth="1" />
            <circle cx="38" cy="11" r="1.8" fill="#C8A45D" />
            <circle cx="34" cy="17" r="1.8" fill="#C8A45D" />
          </g>
        </g>

        {/* Brand Typography */}
        <text
          x="142"
          y="70"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="46"
          fontWeight="600"
          fill={textColor}
          letterSpacing="0"
        >
          Shri Vani Jagat
        </text>

        {/* Subtitle Tagline */}
        {showTagline && (
          <text
            x="145"
            y="98"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="12.5"
            fontWeight="500"
            fill={subtextColor}
            letterSpacing="4.5"
          >
            CAPTURE &bull; CREATE &bull; LIVE
          </text>
        )}
      </svg>
    </div>
  );
};
