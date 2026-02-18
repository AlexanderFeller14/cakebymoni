type CupcakeOrnamentProps = {
  className?: string;
};

export function CupcakeOrnament({ className = '' }: CupcakeOrnamentProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className} style={{ opacity: 1 }}>
      <path d="M21 27h23l-3.3 17H24.3L21 27Z" fill="#BF5278" stroke="#7A2645" strokeWidth="2.2" />
      <path
        d="M18 28c0-5.4 4.3-9.7 9.7-9.7 1.8 0 3.4.5 4.8 1.3a9.6 9.6 0 0 1 14.5 8.3H18Z"
        fill="#F5C2D3"
        stroke="#9E4665"
        strokeWidth="2.2"
      />
      <circle cx="33.2" cy="14.8" r="3.9" fill="#EC5F88" stroke="#92274C" strokeWidth="2.2" />
      <path d="M30.1 15.1c1.9-2.5 3.4-4.5 6.6-5.8" stroke="#4F7D2D" strokeWidth="2" strokeLinecap="round" />
      <path d="M27.4 33v7.2M32.5 32.4v8.2M37.6 33v7.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
