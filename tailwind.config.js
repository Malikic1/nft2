/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      esm: "405px",
      sm: "480px",
      es: "605px",
      md: "768px",
      emd: "900px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "black",
        light: "white",
        whitesmoke: "rgba(245, 245, 245, 0.722)",
        pink: "#e04d65",
        pinksmoke: "rgba(56, 23, 29, 0.561)",
        green: " rgb(2, 83, 2, 0.722)",
        red: "rgb(104, 2, 2, 0.72)",
        trans: "rgba(25, 25, 25, 0.522)",
        darkgrey: "rgb(30 30 30)",
      },
    },
  },
  plugins: [],
};
