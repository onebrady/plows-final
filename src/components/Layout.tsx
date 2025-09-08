import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-snow-50 ${className}`}>
      <div className="container-app">
        {children}
      </div>
    </div>
  )
}

export default Layout