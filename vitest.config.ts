import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})