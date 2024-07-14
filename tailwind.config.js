/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homebanner: "url('/src/assets/banner-img/homeBanner.png')",
      },
      container: {
        center: true,
        screens: {
          xl: "1280px",
        },
      },
      colors: {
        primary: "#274C5B",
        secondary: "#7EB693",
        accent: "#EFCF4F",
        gray: "#D4D4D4",
        light: "#F9F8F8",
        lightGreen: "#EFF6F1",
        darkGray: "#525C60",
      },
    },
  },
  plugins: [],
};
