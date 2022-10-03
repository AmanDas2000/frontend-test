import React from 'react'

const Button = ({children}) => {
  return (
      <button className='flex justify-center align-middle px-8 pt-5 pb-6 w-187 rounded-xl bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white text-2xl font-semibold'>{children}</button>
  )
}

export default Button