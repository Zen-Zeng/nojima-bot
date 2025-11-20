/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colour palette inspired by Nojima corporate hues and a robotics theme.
        primary: '#0A1931',      // deep navy blue for backgrounds
        secondary: '#185ADB',    // vibrant azure for highlights and links
        accent: '#FFC947',       // warm amber for key numbers and badges
        surface: '#112D4E',      // dark panel backgrounds
        textPrimary: '#F5F7FA',  // light text on dark backgrounds
        textSecondary: '#A5B2C4' // muted text for secondary information
      }
    }
  },
  plugins: []
};
