import React, { useEffect } from 'react';

interface WordPressIsolationProps {
  children: React.ReactNode;
}

export function WordPressIsolation({ children }: WordPressIsolationProps) {
  useEffect(() => {
    // Only add WordPress-specific styles when needed
    const isWordPressContext = document.querySelector('.tc-snow-container') !== null;
    const usingShadow = (window as any).__TC_SNOW_SHADOW__ === true;
    
    // Skip adding extra head styles if Shadow DOM is in use
    if (isWordPressContext && !usingShadow && !document.getElementById('truckcorp-wp-fixes')) {
      const style = document.createElement('style');
      style.id = 'truckcorp-wp-fixes';
      style.textContent = `
        /* WordPress-specific fixes only */
        .truckcorp-snow-app-root {
          background-color: #ffffff !important;
          padding: 2rem !important;
          border-radius: 8px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
        
        /* Protect button text colors in WordPress */
        .truckcorp-snow-app-root .text-white,
        .truckcorp-snow-app-root .bg-truckcorp-orange-500,
        .truckcorp-snow-app-root .bg-truckcorp-orange-600 {
          color: #ffffff !important;
        }
        
        /* Protect against common WordPress theme overrides */
        .truckcorp-snow-app-root * {
          text-shadow: none !important;
        }
        
        .truckcorp-snow-app-root img {
          border: none !important;
          box-shadow: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      if (isWordPressContext && !usingShadow) {
        const existingStyle = document.getElementById('truckcorp-wp-fixes');
        if (existingStyle) {
          existingStyle.remove();
        }
      }
    };
  }, []);

  return (
    <div 
      className="truckcorp-snow-app-root"
      style={{
        isolation: 'isolate',
        position: 'relative',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      }}
    >
      {children}
    </div>
  );
}