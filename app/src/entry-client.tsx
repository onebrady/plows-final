import React from 'react'
import { createRoot } from 'react-dom/client'
import { KbApp } from './components/KbApp'
import data from './data/kb.json'
import './styles.css'

// Function to initialize the app
function initApp() {
  // Look for all containers with the tc-snow-container class
  const containers = document.querySelectorAll('.tc-snow-container')
  
  containers.forEach((container) => {
    // Get config from data attribute or global variable
    const configAttr = container.getAttribute('data-config')
    let config = {}
    
    if (configAttr) {
      try {
        config = JSON.parse(configAttr)
      } catch (e) {
        console.error('Failed to parse config:', e)
      }
    }
    
    // Check if container has an ID and look for WordPress config
    const containerId = container.id
    if (containerId) {
      const wpConfigName = 'tcSnowConfig_' + containerId.replace(/-/g, '_')
      if ((window as any)[wpConfigName]) {
        config = { ...config, ...(window as any)[wpConfigName] }
      }
    }
    
    // Render the app
    const root = createRoot(container)
    root.render(<KbApp data={data} ssrVisibleQAs={3} />)
  })
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}

// Export for potential use in other contexts
export { KbApp, data }