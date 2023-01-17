/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/tailwind/**/*.{js,ts,jsx,tsx}',
    './core/components/tailwind/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        site: '1440px',
      },
    },
  },
  plugins: [],
};
