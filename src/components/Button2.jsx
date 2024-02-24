import React from 'react'

const Button2 = ({text, className}) => {
  return (
    <button className={`${className} font-pop font-normal text-[24px] border border-1 rounded-lg py-2.5 px-7 bg-black text-white drop-shadow `}>{text}</button>
  )
}

export default Button2