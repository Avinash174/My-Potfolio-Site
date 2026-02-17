/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        emerald: {
          400: "#34d399",
          500: "#10b981",
        },
        blue: {
          500: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};
