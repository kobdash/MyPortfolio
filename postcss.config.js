// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {},  // Add this line for nesting support
    'autoprefixer': {},     // Place autoprefixer before tailwindcss
    'tailwindcss': {},
  },
};

