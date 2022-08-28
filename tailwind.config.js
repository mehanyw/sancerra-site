/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue':'#30475E',
        'secondary-blue': '#4C6C98',
        'secondary-bg': 'rgba(76, 108, 152, 0.05)',
        'sc-black': '#222222',
        'sc-white': '#FFFFFF',
        'sc-slate-gray': '#6C7987',
        'sc-gold': '#EfE9DB',
      },
      fontSize: {
        '3.5xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.625rem', '3.125rem'],
      },
      borderWidth: {
        '3': '3px',        
      },
      backgroundImage: {
        'footer-bg': "url('../src/images/footer-bg.jpg')",
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
        '260': '65rem',
      },
      screens: {
        '1.5xl': {'max': '39rem'},
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
