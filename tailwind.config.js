/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rocaone: ["RocaOne", "sans-serif"],
        proxima: ["ProximaNova", "sans-serif"],
      },
      colors: {
        lightGray: "#D2D2D2",
        grayWhite: "#F5F5F5",
      },
      backgroundImage: {
        buttonBg: "linear-gradient(90.32deg, #F56563 0%, #E54988 100%)",
      },
    },
  },
  plugins: [],
};
