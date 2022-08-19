/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary-blue':'#30475E',
        'secondary-blue': '#4C6C98',
        'secondary-bg': 'rgba(76, 108, 152, 0.05)',
        'text-black': '#222222',
        'text-white': '#FFFFFF',
        'slate-gray': '#6C7987',
      },
      fontSize: {
        '3.5xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.625rem', '3.125rem'],
      },
      borderWidth: {
        '3': '3px',        
      },
      backgroundImage: {
        'footer-bg': "url('/src/images/footer-bg.jpg')",
      }

    },
  },
  plugins: [],
}
