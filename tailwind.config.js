/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [],
}