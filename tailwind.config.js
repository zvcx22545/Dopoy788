/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary: '#4400A5',
        secondary: '#FF8329',
      },
      maxWidth: {
        'lg': '1024px',
    },
    minWidth:{
      '1230px':'1230px',
    }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animated'),
  ],
}
