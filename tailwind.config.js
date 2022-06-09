module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      spacing: {
        "big": "52rem"
      }
    },
  },
  plugins: [],
}