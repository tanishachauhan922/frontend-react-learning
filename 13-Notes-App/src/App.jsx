import React, { useState } from 'react'
import Cards from './components/Cards'
function App() {
  const [Title, setTitle] = useState('');
  const [Details, setDetails] = useState('');
  const [Task, setTask] = useState([]);
  const formsubmitted=((e)=>{
    e.preventDefault();
    console.log("form is submitted");
    const copytask=[...Task];
    copytask.push({Title,Details});
    setTask(copytask);
    setTitle('')
    setDetails('')
  })
  const deletetask=((indx)=>{
  const newtasks= Task.filter((elem,i)=>i!==indx);
     setTask(newtasks);
  })
  return (
    <div className="min-h-screen bg-black flex flex-row gap-5 ">
      
      <form className="w-1/2 max-w-lg bg-zinc-900 p-8 rounded-2xl shadow-xl"
      onSubmit={(e)=>{formsubmitted(e)}}>
        <h1 className="text-white text-3xl font-bold mb-6">
          Add New Note
        </h1>
        <div className="flex flex-col gap-4">
          {/* heading input */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="w-full p-4 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-lg outline-none focus:border-blue-500"
            value={Title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
           {/* Detailed input */}
          <textarea
            placeholder="Enter Details"
            rows="5"
            className="w-full p-4 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-lg outline-none resize-none focus:border-blue-500"
            value={Details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button
          type='submit'
            className="bg-white text-black font-bold py-3 rounded-lg 
            cursor-pointer hover:scale-105 transition duration-200"
          >
            Add Note
          </button>

      </div>
       </form>
      <div className="bg-zinc-900 text-white p-4 w-full ">
  <h2 className=' font-bold text-4xl text-center '>Recent Notes</h2>
  <div className='flex flex-wrap gap-6'>
  {Task.map(function(elem,indx){
    return <  Cards key={indx} title={elem.Title}
    details={elem.Details}
    deletetask={() => deletetask(indx)}/>
  })}
  </div>
</div>
    </div>
  )
}

export default App