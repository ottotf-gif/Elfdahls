/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Varmt, rustikt men elegant – jordnära trätoner + mörk grafit + mässing
        ek: {
          50: '#faf6f0',
          100: '#f2e9dc',
          200: '#e4d3bb',
          300: '#d2b48f',
          400: '#bd9264',
          500: '#a87b4b',
          600: '#92653e',
          700: '#765036',
          800: '#604231',
          900: '#52382c',
        },
        grafit: {
          50: '#f6f6f5',
          100: '#e7e7e4',
          200: '#cfcec9',
          300: '#aeaca3',
          400: '#8a887d',
          500: '#6f6d62',
          600: '#57564d',
          700: '#46453f',
          800: '#2e2d29',
          900: '#1d1c1a',
          950: '#131210',
        },
        massing: {
          DEFAULT: '#c9a14a',
          ljus: '#e3c989',
          mork: '#9c7a2e',
        },
      },
      fontFamily: {
        // Serif för rubriker (hantverk, tradition), sans för brödtext (modernt)
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        mjuk: '0 18px 50px -20px rgba(29, 28, 26, 0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};
