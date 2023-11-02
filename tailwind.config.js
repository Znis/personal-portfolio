/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    // colors: {
    //   // ...
    //   'ttahiti': {
        
    //   },
    // },
    extend: {
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

