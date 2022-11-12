/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      transitionDelay: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
