import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(() => {
    console.log("useEffect is running...");
  }, [num]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[420px] text-center">

        <h1 className="text-4xl font-bold text-gray-800">
          useEffect Demo
        </h1>

        <p className="text-gray-500 mt-3">
          Open the browser console and observe when
          <span className="font-semibold text-blue-600"> useEffect </span>
          executes.
        </p>

        <div className="mt-10 space-y-5">

          <button
            onClick={() => setNum(num + 1)}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl text-xl font-semibold shadow-lg"
          >
            Counter 1 : {num}
          </button>

          <button
            onClick={() => setNum2(num2 + 1)}
            className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-4 rounded-xl text-xl font-semibold shadow-lg"
          >
            Counter 2 : {num2}
          </button>

        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-4 text-left">
          <h2 className="font-semibold text-gray-700">
            📌 Observation
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            <strong>Counter 1</strong> is included in the dependency array,
            so clicking it triggers <code>useEffect</code>.
          </p>

          <p className="text-gray-600 mt-2 text-sm">
            <strong>Counter 2</strong> updates independently and does not
            trigger <code>useEffect</code>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;