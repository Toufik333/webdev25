import React from 'react'

export default function MembersProfile({name, role, image}) {
    
  return (
    <div>
        <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:ring-2 ring-green-400 cursor-pointer'>
          <img src={image} alt="" className='w-32 h-32 rounded-full mx-auto mb-4 object-cover'/>
          <h2 className='text-xl font-semibold text-gray-800 text-center'> {name} </h2>
          <p className='text-gray-600 text-center'> {role} </p>
        </div>
    </div>
  )
}
