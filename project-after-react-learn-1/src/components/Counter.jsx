import React, { useState } from 'react';


export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <div className='w-full h-screen bg-gray-100 flex flex-col items-center justify-center gap-4'>
            <div className='p-8 bg-white rounded shadow-md flex flex-col items-center gap-4'>
                <div className='text-center'>
                    <h2>My Counter App</h2>
                    <h3>Count: {count}</h3>
                </div>
                <div className='flex gap-4'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setCount(count + 1)}>Increment</button>
                    <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
