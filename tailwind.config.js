/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      100: '100',
      200: '200',
      // 300: '300',
      400: '400',
      500: '500',
      // 600: '600',
      700: '700',
      // 800: '800',
      900: '900',
    },
    colors: {
      primary: 'rgb(22, 32, 95)',
      secondary: 'rgb(255, 248, 86)',
      gray: 'rgb(249, 249, 249)',
      white: 'rgb(255 ,255 ,255)',
      black: 'rgb(0 ,0 ,0)',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(90deg, rgb(255, 153, 0) 0%, rgb(242, 203, 0) 100%)',
      },
      boxShadow: {
        custom: '0 0 8px -3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
