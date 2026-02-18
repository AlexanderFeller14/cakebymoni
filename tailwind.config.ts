import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif']
      },
      colors: {
        cream: '#fffaf4',
        rose: '#f8e3e8',
        blush: '#f4d4dc',
        berry: '#7c3646',
        cocoa: '#4b2c2f',
        gold: '#caa76b'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      boxShadow: {
        soft: '0 16px 40px rgba(75, 44, 47, 0.12)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
