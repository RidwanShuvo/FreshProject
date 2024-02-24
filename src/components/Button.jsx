import React from 'react'

const Button = ({text, className}) => {
  return (
   <button className={`${className} font-pop font-semibold text-2xl border border-1 rounded-lg py-2.5 px-7 hover:bg-hoverColor drop-shadow bg-primaryColor`}>{text}</button>
  )
}

export default Button