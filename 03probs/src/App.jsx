import React from 'react'
import Card from './components/Card.jsx'
function App() {
  return (
    <div className='container'>
   <Card user='Tanisha' age={18} />
   <Card user='aman' age={88}/>
   <Card user='Shannaya' age={20} />
    </div>
  )
}

export default App
