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
  // Ensure assets are handled with absolute paths for WordPress compatibility
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        // For JS imports, use dynamic asset resolution
        return { js: `getAssetUrl('${filename}')` }
      }
      // For other assets, return the filename as-is (will be resolved dynamically)
      return filename
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})