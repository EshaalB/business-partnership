/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#23235E",
        grey: "#424242",
        black: "#000000",
        white: "#FCFCFC",
        // These color names can be changed as per your preference
      },
      fontFamily: {
        sans: ["DM Sans", "Oxygen", "sans-serif"],
        // Adding your fonts here
      },
    },
  },
  plugins: [],
};
