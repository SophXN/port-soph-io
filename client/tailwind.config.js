/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      green: colors.emerald,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      mono: ["SFMono-Regular"],
    },
    extend: {
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
          "65%, 70%": { transform: "translateX(7ch)" },
          "75%, 80%": { transform: "translateX(8ch)" },
          "85%, 90%": { transform: "translateX(9ch)" },
          "95%, 100%": { transform: "translateX(11ch)" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
