import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Homepage } from './components/Homepage'
import { Knowledgebase } from './components/knowledgebase/Knowledgebase'
import './styles.css'

// Simple routing component
function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'knowledgebase'>('home')

  // Listen for navigation events
  React.useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      setCurrentPage(event.detail.page)
    }

    window.addEventListener('navigate' as any, handleNavigation)
    return () => window.removeEventListener('navigate' as any, handleNavigation)
  }, [])

  switch (currentPage) {
    case 'knowledgebase':
      return <Knowledgebase />
    default:
      return <Homepage />
  }
}

// Navigation helper function
(window as any).navigateTo = (page: string) => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }))
}

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
    
    // Render the app with routing
    const root = createRoot(container)
    root.render(<App />)
  })
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}

// Export for potential use in other contexts
export { Homepage, Knowledgebase }