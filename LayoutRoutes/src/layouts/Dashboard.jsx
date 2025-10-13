import React from 'react'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className='flex gap-8 p-5'>
      <header className='w-56 bg-indigo-400 text-white h-screen p-4'>
        <h1 className='mb-5 font-bold'>Dashboard</h1>
        <nav>
            <ul className='space-y-4 mt-8 text-lg'>
                <li><NavLink to="/dashboard/admin" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>Admin</NavLink></li>
                <li><NavLink to="/dashboard/user" className={({ isActive }) => isActive ? 'text-red-500 underline' : ''}>User</NavLink></li>
            </ul>
        </nav>
      </header>

      <main className='flex-1 bg-slate-100 p-4 min-h-screen'>
        <Outlet />
      </main>
    </div>
    
  )
}

export default Dashboard
