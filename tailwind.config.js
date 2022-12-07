/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        expand: "expand 0.3s ease-in-out",
      },
      keyframes: {
        expand: {
          "0%": {
            transform: "scaleY(0)",
          },
          "80%": {
            transform: "scaleY(1.1)",
          },
          "100%": {
            transform: "scaleY(1.0)",
          },
        },
      },
    },
  },
  plugins: [],
};
