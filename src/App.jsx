import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-800 text-slate-200 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-4'>Vite + React</h1>
      <div className='text-2xl mb-4'>Count is: {count}</div>
    </div>
  )
}

export default App
