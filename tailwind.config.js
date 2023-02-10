/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "796px",
      xl: "1440px",
    },
    extend: {
      colors: {
        headingColor: "#34313D",
        textColor: "#9E9AA8",
        btnBg: "#2BD0D0",
        grayBg: "#EFF1F7",
        purpleBg: "#3A3054",
        btHover: "#9AE3E3",
        darkBg: "#232127",
      },
    },
  },
  plugins: [],
};
