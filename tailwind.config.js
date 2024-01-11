/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pageColor: 'var(--web-page-bgcolor)',
        baseDark: 'var(--base-dark-color)',
        baseLight: 'var(--base-light-color)',
        specialDark: 'var(--special-dark-color)',
        specialLight: 'var(--special-light-color)',
      }
    }
  },
  plugins: [],
}
