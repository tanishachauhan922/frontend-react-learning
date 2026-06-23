import React from 'react'

function Card(props) {
  return (
     <div className="relative w-56 h-[500px] rounded-3xl overflow-hidden">

  {/* Background Image */}
  <img
    src={props.img}
    alt="card"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative h-full flex flex-col justify-between p-6 text-white">

    {/* Top Number */}
    <div>
      <h1 className="text-4xl font-bold">{props.number}</h1>
    </div>

    {/* Middle Content */}
    <div>
      <h2 className="text-2xl font-semibold mb-3">
        {props.title}
      </h2>

      <p className="text-sm text-gray-200">
        {props.content}
      </p>
    </div>

    {/* Bottom Button */}
    <div className="flex justify-end">
      <button className=" px-5 py-3
      rounded-xl
      bg-white/90 font-semibold  text-gray-800  shadow-md hover:shadow-xl
      hover:scale-105  flex items-center gap-2 cursor-pointer">
        {props.btn}→
      </button>
    </div>

  </div>
</div>
  )
}

export default Card
