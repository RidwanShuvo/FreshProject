import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className='max-w-container mx-auto'>{children}</div>
  )
}

export default Container