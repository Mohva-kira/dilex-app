/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#D98B2B',
      'primary-light': '#D9A25F',
      'light': '#D9CBA0',
      'white': '#ffffff',
      'yellow': '#FFFF00',
      'black' : '#000',
      'mono' : "#fffbc4",
      'secondary': '#F2F2F2',
      'dark-green': '#007160',
      'dark-blue': '#2f4858', 
      'green' : '#008000',
      'red':'FF0000'
    }
  },
  plugins: [],
}

