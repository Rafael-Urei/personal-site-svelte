/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        slideside: 'slideside 2s ease-out',
        slidedown: 'slidedown 1.5s ease-in-out',
        slidesidefast: 'slidesidefast ease-in-out',
      },
      keyframes: {
        slideside: {
          '0%': {
            left: '200px',
            opacity: 0
          },
          '40%': {
            opacity: 0
          },
          '100%': {
            left: '50px',
            opacity: 1
          }
        },
        slidedown: {
          '0%': {
            top: '-200px',
            opacity: 0
          },
          '40%': {
            opacity: 0
          },
          '100%': {
            top: '0',
            opacity: 1
          }
        },
        slidesidefast: {
          '0%': {
            left: '200px',
            opacity: 0
          },
          '70%': {
            opacity: 0
          },
          '100%': {
            left: '0',
            opacity: 1
          }
        },
      }
    }
  },
  plugins: [],
}

