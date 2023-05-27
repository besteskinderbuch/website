/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    
    extend: {
      colors: {
        backgroundColor1: "#E0FBFC", // light-blue
        secondary1: '#98C1D9',
        hoverPrimary1: '#4690c9', // ??
        primary1: '#3D5A80', // dark-blue
        tertiary1: '#b38e0e', // ??
        primary2: '#EE896F',//'#EE6C4D', //orange
        secondary2: '#293241',
        tertiary2: '#b38e0e', // ??
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
 
}

