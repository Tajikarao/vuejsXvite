module.exports = {
  content: [
    "./index.html",
    "./src/components/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor : {
        'dark': '#292929',
        'yellow': '#FDE46080',
        'yellow-light': '#fde360'
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
