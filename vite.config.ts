import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: false,
    target: 'es2019',
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'truckcorp-kb.js',
        assetFileNames: 'truckcorp-kb.[ext]',
        format: 'iife', // Immediately Invoked Function Expression - no modules
        name: 'TruckCorpSnowApp' // Global variable name
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})