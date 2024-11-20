import React from 'react'

export default function AnimateProvider({ children }) {
  return (
    <div className="animate-fade-up animate-duration-150">
      {children}
    </div>
  )
}
