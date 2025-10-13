import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <header>
        <nav className='bg-gray-800 text-white p-4'>
            <ul className='flex justify-center gap-6 font-medium space-x-4'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>Contact</NavLink></li>
                <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>Services</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
