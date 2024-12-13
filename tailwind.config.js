module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--tw-color-primary)',
        secondary: 'var(--tw-color-secondary)',
        'secondary-light': 'var(--tw-color-secondary-light)',
        accent: 'var(--tw-color-accent)',
        'accent-light': 'var(--tw-color-accent-light)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Cardo', 'serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 