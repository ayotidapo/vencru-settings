/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        customGray: '#D0D5DD',
        vencruGray:{
           100: '#EAECF0'
        }
      }
    },
    screens: {
      'xs': '320px',

      'sm': '640px',

      'md': '768px',


      'lg': '1024px',
     

      'xl': '1280px',
      

      '2xl': '1536px',
 
    }
    
  },
  plugins: [],
}