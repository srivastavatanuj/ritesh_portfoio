// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Yeh hi hona chahiye. Agar ../../dist hai toh error aayega
  }
})
