/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      "mini": "320px",
      // => @media (min-width: 320px)

      "xs": "376px",
      // => @media (min-width: 376px)

      "ss": "464px",
      // => @media (min-width: 464px)

      "sm": "640px",
      // => @media (min-width: 640px)

      "md": "768px",
      // => @media (min-width: 768px)

      "xm": "828px",
      // => @media (min-width: 828px)

      "lg": "1024px",
      // => @media (min-width: 1024px)

      "xl": "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1536px",
      // => @media (min-width: 1536px)
    },

    fontFamily: {
      sans: ["Montserrat, sans-serif",]
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      blue: "#5c80bc",
      yellow: "#e8c547",
      pink: "#FF1B6B",

      gray: {
        100: "#eeeeee",
        300: "#cdd1c4",
        600: "#4d5061",
        900: "#30323d",
      },

      extend: {
        spacing: {
          "90": "90%",
        }
      },

    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],

};

