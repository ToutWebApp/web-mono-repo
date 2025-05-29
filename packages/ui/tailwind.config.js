const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    // Inherit the shared configuration
  presets: [sharedConfig],
  // Add/override specific settings for the UI package
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // You might need to adjust this if your components are elsewhere
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
