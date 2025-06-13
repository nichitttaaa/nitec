/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  ttheme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        background: "#F1F3F2",
        lime: {
          300: "#D9FF50",
          400: "#C7F82E",
        },
      },
    },

  },
  plugins: [],
};
