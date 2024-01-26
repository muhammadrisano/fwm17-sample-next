import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-yellow-300'>
      <ul className='flex justify-end gap-x-4'>
        <li>
          <a href="" className='inline-block px-3 py-4'>Home</a>
        </li>
        <li>
          <a href="" className='inline-block px-3 py-4'>Profile</a>
        </li>
        <li>
          <a href="" className='inline-block px-3 py-4'>Setting</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar