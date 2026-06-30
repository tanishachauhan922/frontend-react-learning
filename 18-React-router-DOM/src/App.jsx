import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import  Contact  from './pages/contact'
import  About from './pages/about'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <div className=' w-full h-24 flex gap-10
      justify-end p-4 bg-[oklch(0.68_0.07_262.45)] '>
        <Navbar />
        </div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/About' element={<About/>}/>
      </Routes>
      </div>
      
    
  )
}

export default App