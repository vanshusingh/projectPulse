/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFAA',
          50: '#E0FFF5',
          100: '#B3FFEA',
          200: '#80FFD9',
          300: '#4DFFC9',
          400: '#1AFFB8',
          500: '#00FFAA',
          600: '#00CC88',
          700: '#009966',
          800: '#006644',
          900: '#003322',
        },
        secondary: {
          DEFAULT: '#FF00AA',
          50: '#FFE0F5',
          100: '#FFB3EA',
          200: '#FF80D9',
          300: '#FF4DC9',
          400: '#FF1AB8',
          500: '#FF00AA',
          600: '#CC0088',
          700: '#990066',
          800: '#660044',
          900: '#330022',
        },
        accent: {
          DEFAULT: '#7850FF',
          50: '#EEE8FF',
          100: '#D1C3FF',
          200: '#B49EFF',
          300: '#9679FF',
          400: '#7850FF',
          500: '#5A28FF',
          600: '#3C00FA',
          700: '#2E00C2',
          800: '#21008A',
          900: '#130052',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};