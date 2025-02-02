/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-957': { max: '957px' },
        'max-1150': { max: '1150px' },
        'max-1125': { max: '1125px' },
        'max-850': { max: '850px' },
        'max-875': { max: '875px' },
        'max-780': { max: '780px' },
        'min-740': { min: '740px' },
        'min-957': { min: '957px' },
      },
      keyframes: {
        bounceUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        bounceUp: 'bounceUp 0.3s ease-in-out',
      },
      colors: {
        primary: '#E2211C',
        secondary: '#0E1A77',
        background: '#fcfcfc',
        'pastel-yellow': '#FFE6B3',
        'disabled-50': '#F2F2F2',
        'disabled-font-50': '#e0e0e0',
        'disabled-font': '#727074',
        'disabled-icon': '#cccccc',
        'white-10': 'rgba(255, 255, 255, 0.10)',
        'white-30': 'rgba(255, 255, 255, 0.30)',
        'white-80': 'rgba(255, 255, 255, 0.80)',
        error: '#DA291C',
        success: '#7AC97C',
        'border-input': '#8D8D8D',
        'chart-gray': '#605E5C',
        'helper-text': '#BABABA'
      },
      fontFamily: {
        onest: ['"Onest"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
