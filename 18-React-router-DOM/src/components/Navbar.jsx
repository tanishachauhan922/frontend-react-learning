import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <Link  className='m-10 cursor-pointer'  to='/'>Home</Link>
      <Link className='m-10 cursor-pointer'  to='/about'>About</Link>
      <Link  className='m-10 cursor-pointer' to='/contact'>contact</Link>
      
    </div>
  )
}

export default Navbar
