import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className='flex h-screen justify-center items-center text-3xl font-bold'>
        <Outlet />
      </main>
    </>
  )
}

export default App
