type CakeOrnamentProps = {
  className?: string;
};

export function CakeOrnament({ className = '' }: CakeOrnamentProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="torte-top" x1="24" y1="14" x2="48" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE7EF" />
          <stop offset="1" stopColor="#F8C6D7" />
        </linearGradient>
        <linearGradient id="torte-mid" x1="18" y1="28" x2="54" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6C2D2" />
          <stop offset="1" stopColor="#C2708C" />
        </linearGradient>
        <linearGradient id="torte-base" x1="14" y1="42" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECA8BC" />
          <stop offset="1" stopColor="#9C4C66" />
        </linearGradient>
        <linearGradient id="plate" x1="10" y1="56" x2="62" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4DEE5" />
          <stop offset="1" stopColor="#E8C9D3" />
        </linearGradient>
      </defs>

      <ellipse cx="36" cy="60" rx="27" ry="4.8" fill="url(#plate)" />
      <rect x="13" y="56" width="46" height="5" rx="2.5" fill="#E8CCD5" stroke="#C68AA0" strokeWidth="1.4" />

      <rect x="21" y="15" width="30" height="12" rx="5.5" fill="url(#torte-top)" stroke="#B45B78" strokeWidth="1.7" />
      <path d="M22.5 26.8h27" stroke="#FFF3F7" strokeWidth="1.6" strokeLinecap="round" />

      <rect x="18" y="27" width="36" height="15" rx="6" fill="url(#torte-mid)" stroke="#A85673" strokeWidth="1.7" />
      <path d="M19.5 34.5h33" stroke="#FFEAF1" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 27v3.5M36 27v3.8M48 27v3.5" stroke="#FFF4F8" strokeWidth="1.5" strokeLinecap="round" />

      <rect x="14" y="42" width="44" height="14" rx="6.5" fill="url(#torte-base)" stroke="#7C3646" strokeWidth="1.8" />
      <path d="M16 48.7h40" stroke="#FFE8F0" strokeWidth="1.7" strokeLinecap="round" />

      <circle cx="27" cy="13.8" r="2.5" fill="#E65A7E" stroke="#9F2E52" strokeWidth="1.4" />
      <circle cx="36" cy="11.6" r="3" fill="#E65A7E" stroke="#9F2E52" strokeWidth="1.4" />
      <circle cx="45" cy="13.8" r="2.5" fill="#E65A7E" stroke="#9F2E52" strokeWidth="1.4" />

      <path d="M36 15v-6.5" stroke="#FFDFA0" strokeWidth="1.9" strokeLinecap="round" />
      <path
        d="M36 7.8c1.8 0 3.2-1.3 3.2-2.9S37.8 2 36 2s-3.2 1.3-3.2 2.9 1.4 2.9 3.2 2.9Z"
        fill="#FFC857"
      />
    </svg>
  );
}
