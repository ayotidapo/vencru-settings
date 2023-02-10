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
  },
  plugins: [],
}