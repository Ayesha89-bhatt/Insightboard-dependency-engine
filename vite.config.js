
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  preview: {
    host: true,          // Bind to 0.0.0.0
    allowedHosts: 'all'  // Allow all external hosts (Render compatible)
  }
})