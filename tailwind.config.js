/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem'
      }
    },
    extend: {
      boxShadow: {
        'logoShadow': '8px 8px 0px lightblue',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

