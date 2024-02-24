import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} font-pop`}>{text}</p>
  )
}

export default Paragraph