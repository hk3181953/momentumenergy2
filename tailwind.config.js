/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-800': '#004d00', // Dark green color
        'green-700': '#006400', // Slightly lighter dark green
        'blue-800': '#003366', // Dark blue color
        'scrolling-text': '#E2E8F0', // Light gray for scrolling text
      },
      keyframes: {
        scrollText: {
          '0%': { transform: 'translateX(100%)' }, // Start off-screen on the right
          '100%': { transform: 'translateX(-100%)' }, // End off-screen on the left
        },
      },
      animation: {
        scroll: 'scrollText 10s linear infinite', // Adjust speed as needed
      },
    },
  },
  plugins: [],
};
