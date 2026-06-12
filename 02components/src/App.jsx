import React from 'react'
import Card from './innercomponents/card.jsx'
import Navbar from './innercomponents/navbar.jsx'
function App() {
  return (
    <div>
      {Navbar()};
      {Card()};
      {Card()};
      {Card()};
    </div>
  )
}

export default App
