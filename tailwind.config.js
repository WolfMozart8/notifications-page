/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    colors: {
      "Red": "hsl(1, 90%, 64%)",
      "Blue": "hsl(219, 85%, 26%)",
      "White": "hsl(0, 0%, 100%)",
      "Very-light-grayish-blue": "hsl(210, 60%, 98%)",
      "Light-grayish-blue-1": "hsl(211, 68%, 94%)",
      "Light-grayish-blue-2": "hsl(205, 33%, 90%)",
      "Grayish-blue": "hsl(219, 14%, 63%)",
      "Dark-grayish-blue": "hsl(219, 12%, 42%)",
      "Very-dark-blue": "hsl(224, 21%, 14%)",

      "dark-notification": "hsl(210, 60%, 10%)"
    },
    extend: {

      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
