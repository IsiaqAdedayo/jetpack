module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "Proxima_Nova": ['Proxima_Nova', "sans-serif"],
        "Proxima_Nova_New": ['Proxima_Nova_New', 'Proxima_Nova' ,"sans-serif"],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'darkBlue': '#1D3EDE',
        'lightBlue': '#01E4F8',
       }),
       colors:{
         "gradient_blue":"#01E5F8",
         'darkBlue': '#1D3EDE',
        'lightBlue': '#01E4F8',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

