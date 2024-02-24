/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
    colors:{
      primaryColor:"#FAE3B6",
      hoverColor: "#FDBB57",
      backgnd: "#CFA485",
},
fontFamily: {
  'pop': ['Poppins','sans'],
  'Frank':['Frank Ruhl Libre']
},


      
 },
  },
  plugins: [],
}

