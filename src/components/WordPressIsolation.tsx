import React from 'react';

interface WordPressIsolationProps {
  children: React.ReactNode;
}

export function WordPressIsolation({ children }: WordPressIsolationProps) {
  return (
    <div 
      className="truckcorp-snow-app-root"
      style={{
        // Complete isolation from external CSS
        all: 'revert',
        isolation: 'isolate',
        position: 'relative',
        boxSizing: 'border-box',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#334155',
        backgroundColor: 'transparent',
      }}
    >
      {children}
    </div>
  );
}