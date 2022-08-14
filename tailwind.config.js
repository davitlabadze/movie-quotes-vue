/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        right: "0px 10px 10px #808080",
      },
      backgroundPosition: {
        "left-1": "1rem",
      },
      backgroundImage: {
        search: "url('/src/assets/search.svg')",
      },
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
