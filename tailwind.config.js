/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        xl: '1440px'
      },
      colors: {
        Greenish: '#3c8067', // #Primary
        Cream: '#f2ebe3', // #Primary
        Blackish: '#1c232b', //Neutral
        Grayish: '#6c7289', //Neutral
        White: '#ffffff' //Neutral
      },
      fontFamily: {
        Fraunces: ['Fraunces'],
        Montserrat: ['Montserrat']
      }
    },
    variants: {},
    plugins: []
  }
}
