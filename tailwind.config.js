/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'poppins': ['Poppins','sans-serif'],
        },
        colors: {
          'text': '#0b0114',
          'background': '#faf5fe',
          'primary': '#7C00FE',
          'secondary': '#f576ef',
          'accent': '#f24fcc',
         },
    },
  },
  plugins: [],
}

