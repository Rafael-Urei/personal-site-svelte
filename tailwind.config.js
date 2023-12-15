/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "base-color": "var(--color-text-base)"
      }
    },
  },
  plugins: [],
}

