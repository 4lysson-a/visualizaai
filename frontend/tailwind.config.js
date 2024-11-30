/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xm: '340px'
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        foreground: 'var(--foreground)',
        texts: 'var(--texts)',
        'smooth-contrast': 'var(--smooth-contrast)',
        card: 'var(--card)',
        background: 'var(--background)',
        colorBorder: 'var(--color-border)',
        colorBorderContrsat: 'var(--color-border-contrast)',
        floatingButtonBackground: 'var(--floating-button-background)'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
};
