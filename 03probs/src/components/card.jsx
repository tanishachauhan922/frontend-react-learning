import React from 'react'

const Card=(props)=> {
    console.log(props)
  return (
    <div className='card'>
      <h1>{props.user}</h1>
      <h3>{props.age}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button>view profile</button>
    </div>
  )
}

export default Card



