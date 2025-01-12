/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color-background': 'var(--main-color-background-css)',
        'section-color': 'var(--section-color-css)',
        'main-color': 'var(--main-color-css)',
        'main-color-hover': 'var(--main-color-hover-css)',
        'color-text-1': 'var(--color-text-1-css)',
        'color-text-2': 'var(--color-text-2-css)',
        'color-hover-text-2': 'var(--color-hover-text-2-css)',
        'color-border': 'var(--color-border-css)',
        'button-color': 'var(--button-color-css)',
        'button-hover-color': 'var(--button-hover-color-css)',
      },
    },
  },
  plugins: [],
}
