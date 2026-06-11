/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf7f4',
          100: '#f3ede6',
          200: '#e6d9ca',
          300: '#d4bea5',
          400: '#c1a07e',
          500: '#b38a63',
          600: '#a67656',
          700: '#8b6048',
          800: '#724f3f',
          900: '#5e4235',
        },
        slate: {
          850: '#1a2332',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
