import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use the PORT environment variable or default to 3000
  },
  preview: {
    port: process.env.PORT || 3000, // Ensure preview mode also uses the correct port
  }
})
