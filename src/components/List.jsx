import React from 'react'

const List = ({text,href,className}) => {
  return (
    
  
    <li><a href={href} className={`${className} font-pop font-semibold text-2xl`}>{text}</a></li>
  
    
    
    
  
  )
}

export default List