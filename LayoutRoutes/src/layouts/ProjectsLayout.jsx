import React from 'react'
import { Outlet } from 'react-router'

const ProjectsLayout = () => {
  return (
    <div>
      <header className='bg-black text-white p-4 text-center'>
        <h1>Projects Layout</h1>
      </header>
        <main className='py-28 bg-slate-100 '>
            <Outlet />
        </main>
    </div>
  )
}

export default ProjectsLayout
