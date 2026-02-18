type CupcakeOrnamentProps = {
  className?: string;
};

export function CupcakeOrnament({ className = '' }: CupcakeOrnamentProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="liner" x1="20" y1="28" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1B6C8" />
          <stop offset="1" stopColor="#A64D67" />
        </linearGradient>
        <linearGradient id="icing" x1="17" y1="16" x2="46" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE8EF" />
          <stop offset="1" stopColor="#F8C8D8" />
        </linearGradient>
      </defs>
      <path d="M21 27h23l-3.3 17H24.3L21 27Z" fill="url(#liner)" stroke="#7C3646" strokeWidth="1.7" />
      <path
        d="M18 28c0-5.4 4.3-9.7 9.7-9.7 1.8 0 3.4.5 4.8 1.3a9.6 9.6 0 0 1 14.5 8.3H18Z"
        fill="url(#icing)"
        stroke="#B45B78"
        strokeWidth="1.7"
      />
      <circle cx="33.2" cy="14.8" r="3.9" fill="#E65A7E" stroke="#9F2E52" strokeWidth="1.7" />
      <path d="M30.1 15.1c1.9-2.5 3.4-4.5 6.6-5.8" stroke="#709A4B" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M27.4 33v7.2M32.5 32.4v8.2M37.6 33v7.2" stroke="#F9ECF1" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
