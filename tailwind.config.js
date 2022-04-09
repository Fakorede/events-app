module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background': '#E5E5E5',
        'dark-1': '#2F2F2F',
        'gray-1': '#E8E8E8',
        'gray-2': '#6C757D',
        'primary': '#372AA4',
        'orange': '#FF6A2C',
      },
    },
    fontFamily: {
      'inter': "'Inter', serif"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}