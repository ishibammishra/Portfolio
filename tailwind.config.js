/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        parchment: '#F6F2E9',
        parchmentDark: '#EAE3D2',
        parchmentLight: '#FAF8F3',
        ink: '#060D1A',
        electricBlue: '#012CEB',
        stampRed: '#DC2626',
        stampYellow: '#D97706',
        stampGreen: '#059669',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        editorial: ['"Plus Jakarta Sans"', 'sans-serif'],
        headline: ['"Bebas Neue"', 'sans-serif'],
        hand: ['"Schoolbell"', '"Gloria Hallelujah"', 'cursive'],
        mono: ['"JetBrains Mono"', '"DM Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
