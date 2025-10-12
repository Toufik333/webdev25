import React from 'react'

const CelsciusInput = ({ celsius, onCelsiusChange }) => {
  return (
    <div className='mb-4'>
      <label className='block font-semibold'>Celsius:</label>
      <input type='number' name='celsius' id='celsius' placeholder='0°C' className='border rounded p-2 w-full' value={celsius} onChange={(e) => onCelsiusChange(e.target.value)} />
    </div>
  )
}

export default CelsciusInput
