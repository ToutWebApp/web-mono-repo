import sharedConfig from '@repo/tailwind-config'

export default {
  presets: [sharedConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Standard Next.js app directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Local components
    '../../packages/ui/src/**/*.{ts,tsx}' // Components from the UI package
  ]
}