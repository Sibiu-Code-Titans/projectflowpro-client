/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "rgb(39 39 42);",
      secondary: "#464255",
    },
  },
  plugins: [],
};
