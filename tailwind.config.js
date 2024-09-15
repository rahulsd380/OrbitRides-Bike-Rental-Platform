/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'], // For headings
        Nunito: ['Nunito', 'sans-serif'],  // For description/body text
      },
      primary: {
        10: '#85A98D',
        20: '#517970',
      },
      neutral: {
        5: '#f5f5f5',
        10 : '#F6F6F6',
        15: '#E9ECF2',
        20: '#DCDFE5',
        25: '#202635',
        30: '#C4C7CC',
        35: '#D9D9D9',
        40: '#ABAEB2', //For Dark theme/Body Text
        45: '#252525',
        55: '#4B494D',
        60: '#333333', //For Light theme/Body Text
        70 : '#364F53',
        80: '#2f3d46', //For Light theme/Heading
      },
    },
  },
  plugins: [],
}