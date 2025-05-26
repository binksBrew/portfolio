/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
        ibm: ['var(--font-ibm)'],
      },
    },
  },
  plugins: [],
}
