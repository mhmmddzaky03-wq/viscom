/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff4d8d',
          'pink-hover': '#e63977',
          'pink-light': '#fff0f5',
          sky: '#e9f5fc',
          'sky-card': '#e0f2fe',
          'sky-accent': '#38bdf8',
          blue: '#0284c7',
          dark: '#1e293b',
          navy: '#0f172a',
          muted: '#64748b',
          bg: '#eef7fc',
          success: '#16a34a',
          'success-bg': '#eafaf1',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        DEFAULT: '12px',
        'md': '14px',
        'lg': '18px',
        'xl': '22px',
        '2xl': '28px',
        '3xl': '34px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 10px 25px -4px rgba(15, 23, 42, 0.08)',
        'pink': '0 4px 14px 0 rgba(255, 77, 141, 0.35)',
      }
    },
  },
  plugins: [],
}
