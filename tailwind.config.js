/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/js/app.js", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        bluenew: "#65DAFF",
        primary: "#2F327D",
        secondary: "#F48C06",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
