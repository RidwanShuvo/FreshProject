import React from 'react'

 export const Flex = ({children,className}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>

  )
}

