import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ContextTheme'

function Navbar() {
  const data=useContext(ThemeDataContext);
  console.log(data);
  return (
    <div className='flex   font-bold justify-between
    my-5 w-full h-30 bg-yellow-400 rounded-xl'>
      <h1 className='text-3xl m-6'>{data} </h1>
      <Nav2 />
    </div>
  )
}

export default Navbar
