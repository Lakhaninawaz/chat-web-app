/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {

      colors: {
        "primary-color": "#102F5D;",
        "secondary-color": "#164EA1;",
      },
    },
  },
  plugins: [],
}

