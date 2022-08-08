/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        dark: "dark .3s ease-in-out ",
        light: "light .3s ease-in-out ",
      },
      keyframes: {
        dark: {
          "0%": {
            transform: "rotate(40deg)",
          },
          "100%": { transform: "rotate(3deg)" },
        },
        light: {
          "0%": {},
          "100%": { transform: "rotate(40deg)" },
        },
      },
    },
  },
  plugins: [],
};
