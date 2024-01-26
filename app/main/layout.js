import Navbar from '@/components/module/Navbar'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <footer className='bg-yellow-300 py-5'>
      <h1>footer @fmw17</h1>
    </footer>
    </>
  )
}

export default MainLayout