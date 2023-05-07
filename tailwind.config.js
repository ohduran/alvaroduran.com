/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'palette-grey': '#EAEAEA',
        'palette-teal': '#08D9D6',
        'palette-black': '#252A34',
        'palette-red': '#FF2E63',
        'kiwi-product-light': '#E1F4F3',
        'kiwi-product-normal': '#00A58E',
        'kiwi-product-dark': '#007A69',
        'kiwi-product-darker': '#005C4E',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // https://tailwindcss.com/docs/typography-plugin
  ],
}
