/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        washi: "#F7F4ED",
        sumi: "#1C1A17",
        torii: "#B23A2E",
        stone: "#8A8578",
        moss: "#3D4A3E",
      },
      fontFamily: {
        display: ["'Shippori Mincho'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};