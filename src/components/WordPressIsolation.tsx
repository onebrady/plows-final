import React from 'react';

interface WordPressIsolationProps {
  children: React.ReactNode;
}

export function WordPressIsolation({ children }: WordPressIsolationProps) {
  return (
    <div 
      className="truckcorp-snow-app-root"
      style={{
        // Reset common WordPress theme conflicts
        all: 'initial',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#334155',
        // Ensure proper isolation
        isolation: 'isolate',
        position: 'relative',
        // Prevent WordPress themes from affecting us
        textAlign: 'left',
        direction: 'ltr',
        // Reset box model
        boxSizing: 'border-box',
      }}
    >
      <style>{`
        /* CSS Reset and Isolation for TruckCorp Snow App */
        .truckcorp-snow-app-root,
        .truckcorp-snow-app-root *,
        .truckcorp-snow-app-root *::before,
        .truckcorp-snow-app-root *::after {
          box-sizing: border-box !important;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          font-size: inherit !important;
          font-family: inherit !important;
          vertical-align: baseline !important;
          background: transparent !important;
          text-decoration: none !important;
          list-style: none !important;
          quotes: none !important;
          outline: 0 !important;
          font-weight: inherit !important;
          font-style: inherit !important;
          text-transform: inherit !important;
          letter-spacing: inherit !important;
          word-spacing: inherit !important;
          line-height: inherit !important;
          text-align: inherit !important;
          color: inherit !important;
          text-shadow: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
          position: static !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          left: auto !important;
          z-index: auto !important;
          width: auto !important;
          height: auto !important;
          min-width: 0 !important;
          min-height: 0 !important;
          max-width: none !important;
          max-height: none !important;
          overflow: visible !important;
          transform: none !important;
          transition: none !important;
          animation: none !important;
          filter: none !important;
          backdrop-filter: none !important;
          clip: auto !important;
          clip-path: none !important;
          mask: none !important;
          float: none !important;
          clear: none !important;
          resize: none !important;
          cursor: auto !important;
          pointer-events: auto !important;
          user-select: auto !important;
          touch-action: auto !important;
          will-change: auto !important;
          content: none !important;
        }

        /* Re-enable necessary properties for our app */
        .truckcorp-snow-app-root {
          all: initial !important;
          font-family: ui-sans-serif, system-ui, sans-serif !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          color: #334155 !important;
          isolation: isolate !important;
          position: relative !important;
          text-align: left !important;
          direction: ltr !important;
          box-sizing: border-box !important;
          display: block !important;
          width: auto !important;
          height: auto !important;
        }

        /* Re-enable display properties we need */
        .truckcorp-snow-app-root .flex { display: flex !important; }
        .truckcorp-snow-app-root .grid { display: grid !important; }
        .truckcorp-snow-app-root .block { display: block !important; }
        .truckcorp-snow-app-root .inline { display: inline !important; }
        .truckcorp-snow-app-root .inline-block { display: inline-block !important; }
        .truckcorp-snow-app-root .inline-flex { display: inline-flex !important; }
        .truckcorp-snow-app-root .hidden { display: none !important; }

        /* Re-enable positioning we need */
        .truckcorp-snow-app-root .relative { position: relative !important; }
        .truckcorp-snow-app-root .absolute { position: absolute !important; }
        .truckcorp-snow-app-root .fixed { position: fixed !important; }
        .truckcorp-snow-app-root .sticky { position: sticky !important; }

        /* Ensure Tailwind classes work properly */
        .truckcorp-snow-app-root [class*="bg-"] { background: var(--tw-bg-opacity, 1) !important; }
        .truckcorp-snow-app-root [class*="text-"] { color: inherit !important; }
        .truckcorp-snow-app-root [class*="border"] { border: var(--tw-border-width, 1px) solid !important; }
        .truckcorp-snow-app-root [class*="rounded"] { border-radius: var(--tw-rounded, 0.25rem) !important; }
        .truckcorp-snow-app-root [class*="shadow"] { box-shadow: var(--tw-shadow, 0 1px 3px 0 rgba(0, 0, 0, 0.1)) !important; }
        .truckcorp-snow-app-root [class*="p-"] { padding: var(--tw-spacing, 0.25rem) !important; }
        .truckcorp-snow-app-root [class*="m-"] { margin: var(--tw-spacing, 0.25rem) !important; }
        .truckcorp-snow-app-root [class*="w-"] { width: var(--tw-width, auto) !important; }
        .truckcorp-snow-app-root [class*="h-"] { height: var(--tw-height, auto) !important; }
        .truckcorp-snow-app-root [class*="font-"] { font-weight: var(--tw-font-weight, inherit) !important; }
        .truckcorp-snow-app-root [class*="text-"] { font-size: var(--tw-text-size, inherit) !important; }
        
        /* Ensure our images and buttons work */
        .truckcorp-snow-app-root img {
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
        }
        
        .truckcorp-snow-app-root button {
          cursor: pointer !important;
          background: none !important;
          border: none !important;
          padding: 0 !important;
          font: inherit !important;
        }
        
        .truckcorp-snow-app-root a {
          color: inherit !important;
          text-decoration: none !important;
        }
      `}</style>
      {children}
    </div>
  );
}