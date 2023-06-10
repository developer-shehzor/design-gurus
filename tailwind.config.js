/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        '23': '23px',
      },
      letterSpacing: {
        '0.29': '0.29em',
      },
      boxShadow: {
        'custom': '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

