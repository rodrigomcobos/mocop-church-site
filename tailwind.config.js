import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        allison: ['Allison', 'sans-serif'],
        seaweed: ['Seaweed Script', 'cursive'],
        neuehaas: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        sanfrancisco: ['San Francisco', 'sans-serif'],
      },
      backgroundImage: {
        background: "url('/src/assets/images/bg.png')",
      },
      colors: {
        primary: '#f4ebdc',
        yellowBtn: '#ffc360',
        yellowBtnHover: '#b66a25',
        footer: '#2A2928',
        bottomBar: '#7B6458',
        lightGray: '#a9a8a6',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply uppercase bg-yellowBtn text-footer hover:bg-yellowBtnHover hover:text-white text-sm md:text-base tracking-wide px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:ring-white font-bold inline-block w-fit mx-auto cursor-pointer':
            {},
        },
      });
    }),
  ],
};
