/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'text-main': '#e8e8e8',
        'text-placeholder': '#6f7070',
        'accent': '#ffbb00',
        'border-color': '#29292a',
        'bg-main': '#0e0e0e',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'form': ['Form Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

