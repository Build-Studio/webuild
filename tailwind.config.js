/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./configs/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1860px",
        "4xl": "2500px",
      },
      fontFamily: {
        primary: "Roboto",
      },
      colors: {
        primary: {
          DEFAULT: "#F1566A",
        },
        secondary: {
          DEFAULT: '#9B52E8'
        },
        blue: {
          DEFAULT: '#4A61DB',
        },
        fuchsia: {
          DEFAULT: '#BA54BC',
        },
        gray: {
          900: "#101828",
          800: "#1D2939",
          700: "#344054",
          600: "#475467",
          500: "#667085",
          200: "#EAECF0",
          25: "#FCFCFD",
        },
        warning: {
          600: "#DC6803",
          300: "#FEC84B",
        },
        success: {
          600: "#039855",
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
};
