/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#1f261d',
        'default-300': '#4e7661',
        'default-700': '#2f473a',
        'default-800': '#2a3428',
      },
      textColor: {
        'default': '#1f261d',
        'default-300': '#4e7661',
        'default-700': '#2f473a',
        'default-800': '#2a3428',
      },
      borderColor: {
        'default': '#1f261d',
        'default-300': '#4e7661',
        'default-700': '#2f473a',
        'default-800': '#2a3428',
      },
      outlineColor: {
        'default': '#1f261d',
        'default-300': '#4e7661',
        'default-700': '#2f473a',
        'default-800': '#2a3428',

      }
    },
  },
  plugins: [],
}