import React from 'react'
import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
  return (
    <div>

      <form className='max-w-md mx-auto bg-white text-black p-8 rounded space-y-3' action="">
        <div>
            <label className='block mb-1 font-semibold' htmlFor="inputField">Name: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="inputField" name='inputField' type="text" placeholder="Enter Name" className='border p-2 md:w-64 w-full' />
        </div>

        <div>
            <label className='block mb-1 font-semibold' htmlFor="inputField">Email: </label>
            <input id="inputField" name='inputField' type="text" placeholder="Enter Email" className='border p-2 md:w-64 w-full' />
        </div>

        <div>
                <label className='block mb-1 font-semibold' htmlFor="inputField">Message: </label>
                <textarea name="message" rows='4' id="message" placeholder="Enter Message" className='border p-2 md:w-64 w-full'></textarea>
        </div>

        <button className='bg-blue-500 text-white py-2 px-6 rounded' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
