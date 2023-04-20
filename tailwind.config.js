/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#fbdccb",
        main: "#184147",
        "standard-text": "#184147",
      },
    },
  },
  plugins: [],
};
