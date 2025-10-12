import React from 'react'

const FahrenheitInput = ({ fahrenheit, onFahrenheitChange }) => {
  return (
    <div>
      <div className='mb-4'>
      <label className='block font-semibold'>Fahrenheit:</label>
      <input type='number' name='fahrenheit' id='fahrenheit' placeholder='0°F' className='border rounded p-2 w-full' value={fahrenheit} onChange={(e) => onFahrenheitChange(e.target.value)} />
    </div>
    </div>)
}

export default FahrenheitInput
