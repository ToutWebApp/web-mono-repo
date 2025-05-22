import sharedConfig from '@repo/tailwind-config'

export default {
  presets: [sharedConfig],
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}'
  ]
}