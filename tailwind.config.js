/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "navlink-shadow": " 0px 2px 1px #9946F0",
        "feature-card-shadow": "0 0px 5px 1.5px rgba(0, 0, 0, 0.07)",
        "feature-card-shadow-dark": "0px 0px 5px 1.5px #0E1332",
        "light-container-shadow": "0px 0px 3px 0px #d3dce6",
        "dark-container-shadow": "0px 0px 3px 0px #181C51",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
