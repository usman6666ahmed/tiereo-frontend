/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "cupcake",
      {
        tiereo: {
          primary: "#b1cc4f",
          secondary: "#b71d43",
          accent: "#f47733",
          neutral: "#171E27",
          "base-100": "#3D3A45",
          info: "#6F90D8",
          success: "#1B837B",
          warning: "#C3A409",
          error: "#F81C0D",
        },
      },
    ],
  },
};
