import defaultTheme from 'tailwindcss/defaultTheme';

let containerScreens = Object.assign({}, defaultTheme.screens);

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl'];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: containerScreens
    },
    extend: {}
  },
  plugins: []
};
