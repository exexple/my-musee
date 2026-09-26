/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#0a0908',
        'deep-charcoal': '#121110',
        'warm-charcoal': '#1a1815',
        ivory: {
          50:  '#faf9f6',
          100: '#f2efe8',
          200: '#e8e3d8',
          300: '#d4cebb',
          400: '#b8b09a',
          500: '#9a9080',
        },
        gold: {
          200: '#e8d5a0',
          300: '#d4a854',
          400: '#c49030',
          500: '#a87820',
        },
        burgundy: {
          700: '#4a0e1e',
          800: '#3a0c18',
          900: '#2a0810',
        },
        sepia: {
          300: '#c8a882',
          400: '#b89060',
          500: '#a87840',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'slow-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'soft-out':  'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      transitionDuration: {
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
