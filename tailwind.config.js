/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Quicksand", "sans-serif"],
      },
      borderRadius: {
        "1/2": "50%",
      }
    },
  },
  plugins: [],
}

