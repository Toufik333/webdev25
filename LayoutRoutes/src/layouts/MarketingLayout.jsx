import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router'


const MarketingLayout = () => {
  return (
    <div>
        <header className='py-5 text-center'>
            <ul className='flex justify-center gap-6 font-medium space-x-4'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>Marketing Home</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>Contact</NavLink></li>
            </ul>
        </header>
        <main className='min-h-[80vh] bg-green-300 text-center p-5 flex items-center justify-center font-bold'>
            <Outlet />
        </main>

        <footer className='bg-black text-white text-center py-4'>
            <p>Marketing Footer</p>
        </footer>
    </div>
  )
}

export default MarketingLayout
