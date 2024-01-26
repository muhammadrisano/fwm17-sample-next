import React from 'react'

const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick} className='px-5 py-3 rounded-md bg-yellow-200 text-black'>{title}</button>
  )
}

export default Button