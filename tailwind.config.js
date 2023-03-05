/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "rgba(214,229,225,255)",
        main: "rgba(2,139,107,255)",
        "standard-text": "#000000",
      },
    },
  },
  plugins: [],
};
