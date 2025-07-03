/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode support using class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans your React files for class usage
    "./public/index.html", // Optional: helps with purge if you use HTML templates
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 40s linear infinite", // Your custom slide animation
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
