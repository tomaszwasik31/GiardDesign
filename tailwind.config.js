/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      beige: "#DCC1AB",
      black: "#111111",
      green: "#1B5B31",
      grey: "#F5F0EC",
      white: "#FFF"
    },

    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class",
  },
};
