// Import images for Vite to process them
import tripEdgeImg from '../assets/images/trip-edgex.jpg';
import fullTripImg from '../assets/images/full-trip.jpg';

// Asset URL resolver for WordPress embedding
export function getAssetUrl(assetPath: string): string {
  // If already an absolute URL, return as-is
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
    return assetPath;
  }

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
          console.log('TruckCorp Snow: Using WordPress config baseUrl:', baseUrl);
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
        console.log('TruckCorp Snow: Using script src baseUrl:', baseUrl);
      }
    }
  }
  
  // Final fallback
  if (!baseUrl) {
    // Check if we're in development
    if (window.location.hostname === 'localhost') {
      baseUrl = 'http://localhost:5173';
    } else {
      // Production fallback - always use Vercel for assets
      baseUrl = 'https://plows-final.vercel.app';
    }
    console.log('TruckCorp Snow: Using fallback baseUrl:', baseUrl);
  }
  
  // Remove leading slash from asset path if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  const resolvedUrl = `${baseUrl}/${cleanPath}`;
  console.log(`TruckCorp Snow: Resolving asset ${assetPath} to ${resolvedUrl}`);
  return resolvedUrl;
}

// Pre-resolved image URLs - use imported assets in development, dynamic resolution in WordPress
export const getImageUrl = (imageName: string) => {
  // Check if we're in a WordPress context by looking for the container
  const isWordPressContext = document.querySelector('.tc-snow-container') !== null;
  
  // In WordPress context, always use absolute URLs from Vercel
  if (isWordPressContext) {
    return getAssetUrl(imageName);
  }
  
  // In standalone development/production, use imported assets if available
  if (imageName === IMAGES.tripEdge && tripEdgeImg) {
    // If it's already an absolute URL (Vite production build), use it
    if (tripEdgeImg.startsWith('http') || tripEdgeImg.startsWith('/')) {
      return tripEdgeImg;
    }
    return tripEdgeImg;
  }
  if (imageName === IMAGES.fullTrip && fullTripImg) {
    // If it's already an absolute URL (Vite production build), use it
    if (fullTripImg.startsWith('http') || fullTripImg.startsWith('/')) {
      return fullTripImg;
    }
    return fullTripImg;
  }
  
  // Fall back to dynamic resolution
  return getAssetUrl(imageName);
};

// Image constants - these will be resolved to built assets
export const IMAGES = {
  tripEdge: 'truckcorp-kb.jpg',  // trip-edgex.jpg -> truckcorp-kb.jpg in dist
  fullTrip: 'truckcorp-kb2.jpg'  // full-trip.jpg -> truckcorp-kb2.jpg in dist
} as const;