module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        beige: "#DCC1AB",
        black: "#111111",
        green: "#1B5B31",
        gray: "#F5F0EC",
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
