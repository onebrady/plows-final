// Asset URL resolver for WordPress embedding
export function getAssetUrl(assetPath: string): string {
  let baseUrl = '';
  
  // Try to get base URL from WordPress config first
  const container = document.querySelector('.tc-snow-container');
  if (container) {
    const configAttr = container.getAttribute('data-config');
    if (configAttr) {
      try {
        const config = JSON.parse(configAttr);
        if (config.baseUrl) {
          baseUrl = config.baseUrl;
        }
      } catch (e) {
        console.warn('TruckCorp Snow: Failed to parse config for base URL');
      }
    }
  }
  
  // Fallback: Try to get base URL from the script that loaded this app
  if (!baseUrl) {
    const scripts = document.querySelectorAll('script[src*="truckcorp-kb.js"]');
    if (scripts.length > 0) {
      const scriptSrc = scripts[0].getAttribute('src');
      if (scriptSrc) {
        // Extract base URL from script source
        const url = new URL(scriptSrc, window.location.href);
        baseUrl = `${url.protocol}//${url.host}`;
      }
    }
  }
  
  // Final fallback
  if (!baseUrl) {
    // Check if we're in development
    if (window.location.hostname === 'localhost') {
      baseUrl = 'http://localhost:5173';
    } else {
      // Production fallback
      baseUrl = 'https://plows-final.vercel.app';
    }
  }
  
  // Remove leading slash from asset path if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  console.log(`TruckCorp Snow: Resolving asset ${assetPath} to ${baseUrl}/${cleanPath}`);
  return `${baseUrl}/${cleanPath}`;
}

// Pre-resolved image URLs
export const getImageUrl = (imageName: string) => getAssetUrl(imageName);

// Image constants
export const IMAGES = {
  tripEdge: 'truckcorp-kb.jpg',
  fullTrip: 'truckcorp-kb2.jpg'
} as const;