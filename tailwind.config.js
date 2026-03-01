/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
        'serif': ['Markazi Text', 'serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'markazi': ['Markazi Text', 'serif'],
      },
    },
  },
  plugins: [],
}