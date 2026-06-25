import React, { useState } from 'react'

function App() {
  const [num, setnum] = useState(0);

  function increasing() {
    setnum(num + 1);
  }

  function decreasing() {
    setnum(num - 1);
  }

  function by10() {
    setnum(num + 10);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Counter App
        </h1>

        <div className="text-6xl font-bold text-indigo-600 mb-8">
          {num}
        </div>

        <div className="flex flex-col gap-4">

          <button
            onClick={increasing}
            className="bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            + Increase
          </button>

          <button
            onClick={decreasing}
            className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            - Decrease
          </button>

          <button
            onClick={by10}
            className="bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition"
          >
            +10 Increase
          </button>

        </div>

      </div>
    </div>
  )
}

export default App