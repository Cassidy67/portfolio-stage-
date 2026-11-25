/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0', // blanc cassé — fond principal
        sand: '#EDE3D6', // beige clair — sections secondaires
        'sand-deep': '#E3D3C1', // beige plus soutenu — section « recherche »
        blush: '#DCC9BA', // beige rosé — cartes, décor
        cocoa: '#49372F', // marron chocolat — titres, boutons
        taupe: '#8C796D', // taupe — textes secondaires (grands textes, décor)
        'taupe-deep': '#6B594E', // taupe renforcé — petits textes (contraste AA)
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -30px rgba(73,55,47,.35)',
        card: '0 1px 0 rgba(73,55,47,.04), 0 18px 40px -28px rgba(73,55,47,.28)',
      },
    },
  },
  plugins: [],
}
