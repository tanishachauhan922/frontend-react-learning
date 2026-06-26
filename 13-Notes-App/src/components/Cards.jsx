import React from 'react'
import { X } from "lucide-react";

function Cards(props) {
  return (
    <div className="bg-amber-100 h-80 w-70 rounded-xl shadow-lg p-4 text-black mt-16 ml-4">

      <div className="flex justify-between items-start">
        <h1 className="font-bold text-2xl">
          {props.title}
        </h1>

        <button onClick={props.deletetask}
          className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer hover:bg-red-500 transition"
        >
          <X size={20} />
        </button>
      </div>

      <p className="mt-5 text-gray-600 text-lg break-words">
        {props.details}
      </p>

    </div>
  )
}

export default Cards