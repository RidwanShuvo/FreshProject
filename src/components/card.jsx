import React from 'react'

const card = ({text,className}) => {
  return (
    <h4 className={`${className} font-pop text-[22px] font-semibold text-center bg-white h-[100px] w-[366.5px]`}>{text}</h4>
  )
}

export default card