module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      spacing: {
        "big": "52rem"
      }
    },
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
  },
  plugins: [],
}