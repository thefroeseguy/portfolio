/** @type {import('tailwindcss').Config} */
import breakpoints from "./tailwind-configs/tailwind.breakpoints";
import safelist from "./tailwind-configs/tailwind.safelist";
import {fontSizes} from "./tailwind-configs/tailwind.typography";
import plugins from "./tailwind-configs/tailwind.plugins";
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: breakpoints,
    fontFamily: {
      primary: ['Roboto', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        black: "#222222",
        grey: "#333333",
        blue: "#3498db",
        red: "#e74c3c"

      },
      fontSize: fontSizes,
      containers: breakpoints,
    },
  },
  safelist: safelist,
  plugins: plugins,
}

