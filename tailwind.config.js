/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        danger: "#df2d03",
        success: "#03b54a",
        black: "#444444",
        link: "#848484",
        white: "#FFFFFF",
        dark: {
          primary: "#1a1a1a",
          secondary: "#292929",
          100: "#E7E7E7",
          200: "#E8EAED",
          300: "#BDC1C6",
          400: "#80868B",
          500: "#5F6368",
          600: "#2E3134",
          700: "#282A2D",
          800: "#17181B",
          900: "#0E1013",
        },
        light: {
          white: "#fff",
          primary: "#d3d3d3",
          light: "#9ca3b2",
        },
        theme: {
          DEFAULT: "#556ee6",
          400: "#FFC5CA",
        },
      },
      fontWeight: {
        normal: 400,
        semiBold: 500,
        bold: 600,
      },
      boxShadow: {
        light: "0 1px 2px rgba(56,65,74,.15)",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
};
