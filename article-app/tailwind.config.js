/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '18': '70px'
      },
      inset:{
        '3full': '300%',
        '1.5full': '150%',
        '5/6': "calc(100% * (5 / 6))",
      },
      width:{
        '9.5/12': '78%',
        '1.5full': '150%',
      },
      borderWidth: { 
        '20': '14px'
      },
      letterSpacing:{ 
        'more-widest': '0.3em'
      },
      fontFamily: { 
        'manrope': 'var(--font-family)',
      },
      fontSize: {
        'font-size': 'var(--font-size)',
        'md': '16px'
      } ,
      fontWeight : { 
        'designNormal': 'var(--weight-normal)',
        'designBold': 'var(--weight-bold)',
      },
      colors: { 
        'Very-Dark-Grayish-Blue': 'var(--Very-Dark-Grayish-Blue)',
        'Desaturated-Dark-Blue': 'var(--Desaturated-Dark-Blue)',
        'Grayish-Blue': 'var(--Grayish-Blue)',
        'Light-Grayish-Blue': 'var(--Light-Grayish-Blue)',
      },
      
    },
  },
  plugins: [],
}

