import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='bg-gray-800 text-white p-4'>
            <ul className='flex justify-center gap-6 font-medium space-x-4'>
                <li><a href="/" className='hover:text-blue-500 underline'>Home</a></li>
                <li><a href="/about" className='hover:text-blue-500 underline'>About</a></li>
                <li><a href="/contact" className='hover:text-blue-500 underline'>Contact</a></li>
                <li><a href="/services" className='hover:text-blue-500 underline'>Services</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
