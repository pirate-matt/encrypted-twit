import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '~features': resolve(__dirname, './src/features'),
      '~style.css': resolve(__dirname, './src/style.css'),
    },
  },
})