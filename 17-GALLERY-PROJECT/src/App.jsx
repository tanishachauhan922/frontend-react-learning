import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    )

    console.log(response.data)
    setuserdata(response.data)
  }

  useEffect(function () {
    getdata()
  }, [index])

  let printuserdata = 'No Images Available'

  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, indx) {
      return (
        <a
          key={indx}
          href={elem.url}
          target="_blank"
          rel="noreferrer"
          className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
        >
          <img
            className="h-64 w-80 object-cover"
            src={elem.download_url}
            alt={elem.author}
          />

          <div className="p-4">
            <h2 className="text-white font-bold text-xl">
              {elem.author}
            </h2>
          </div>
        </a>
      )
    })
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      
      <h1 className="text-5xl font-bold text-center text-white mb-10">
        Picsum Gallery
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {printuserdata}
      </div>

      <div className="flex justify-center gap-6 mt-10">
        
        <button
          className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-xl font-bold text-xl transition"
          onClick={function () {
            if (index > 1) {
              setindex(index - 1)
            }
          }}
        >
          Prev
        </button>

        <div className="text-white text-2xl font-bold flex items-center">
          Page {index}
        </div>

        <button
          className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-xl font-bold text-xl transition"
          onClick={function () {
            setindex(index + 1)
          }}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App