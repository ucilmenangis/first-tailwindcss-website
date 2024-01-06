/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Test/**/*.{html,js}"],
  theme: {
    extend: {
<<<<<<< HEAD
      
    },
    fontFamily: {
      'roboto': ['Roboto'],
=======
      backgroundImage: {
        'img-tampilan' : "url(img/blue-gradient.avif)",
      }
    },
    fontFamily: {
      'roboto': ['Roboto'],
    },
    textShadow: {
      'text-shadow' : '0 2px 4px var(--tw-shadow-color)',
>>>>>>> 4582d98 (add some features)
    }
  },
  plugins: [],
}

