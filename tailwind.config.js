/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html", "**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "home-bg": "rgb(236, 236, 236)",
        "cards-bg": "rgb(31, 56, 50)",
        'custome-cream': "rgb(230, 197, 159)"
      },
    },
  },
  plugins: [],
};
