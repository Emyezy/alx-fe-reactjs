/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // for Vite root HTML
    "./public/index.html", // required for checklist
    "./src/**/*.{js,ts,jsx,tsx}", // all JS/TS/React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
