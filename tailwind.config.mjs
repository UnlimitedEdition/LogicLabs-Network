import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class', // Disabled dark mode for now
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Set 'Inter' as the default sans-serif font
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
       colors: {
         // Define the primary color using a CSS variable
         primary: {
           // Using RGB values from the CSS variable --color-primary
           // The <alpha-value> placeholder allows Tailwind to handle opacity (e.g., bg-primary/50)
           DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)', 
         // You can still add shades if needed, perhaps defining more CSS variables
         },
         // You can add other custom colors here
         // secondary: '#...',
       },
       backgroundImage: { // Add backgroundImage extension
         'hero-background': "url('/images/hero-background.jpg')",
       },
       // Removed animation keyframes and utility
     }, // Closing brace for extend
  }, // Closing brace for theme
  plugins: [
    // Add a custom plugin for text-shadow utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '0 1px 3px rgba(0, 0, 0, 0.4)', // Matches the inline style used
        },
        // You could add more text-shadow utilities here if needed
        // '.text-shadow-md': {
        //   'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.5)',
        // },
      }
      addUtilities(newUtilities)
    }
  ],
}
