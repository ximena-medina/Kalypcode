/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#F4F4F4',
        'secondary-200': '#B9E76E',
        'tertiary-300': '#18090F',
        'blue-500': '#07A9E3'
      }
    },
  },
  plugins: [],
}


