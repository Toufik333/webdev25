import React from 'react'
import MembersProfile from './components/MembersProfile'


const members = [
  {
    name: "BoB",
    role: "Softwear Engineer",
    image: 'https://randomuser.me/api/portraits/women/34.jpg'
  },
  {
    name: "Nani",
    role: "Web Developer",
    image: 'https://randomuser.me/api/portraits/women/31.jpg'
  },
  {
    name: "Dadi",
    role: "Marketing Manager",
    image: 'https://randomuser.me/api/portraits/women/32.jpg'
  }
]

export default function App() {
  const [cart, setCart] = React.useState([])
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <div className='min-h-screen p-6'>
      <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Team Members List</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* This is where the team members will be listed. */}

        <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:ring-2 ring-green-400 cursor-pointer'>
          <button onClick={() => addToCart('product1') }>Add to cart</button>
          <h2 className='text-xl font-semibold text-gray-800 text-center'> Product1 </h2>
          <p className='text-gray-600 text-center'> Price = 30tk </p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:ring-2 ring-green-400 cursor-pointer'>
          <button onClick={() => addToCart('product2') }>Add to cart</button>
          <h2 className='text-xl font-semibold text-gray-800 text-center'> Product2 </h2>
          <p className='text-gray-600 text-center'> Price = 30tk </p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:ring-2 ring-green-400 cursor-pointer'>
          <button onClick={() => addToCart('product3') }>Add to cart</button>
          <h2 className='text-xl font-semibold text-gray-800 text-center'> Product3 </h2>
          <p className='text-gray-600 text-center'> Price = 30tk </p>
        </div>

        <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:ring-2 ring-green-400 cursor-pointer'>
          <h1 className='text-lg text-center bg-green-600'>CART</h1>
        {cart.map((item, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:ring-2 ring-green-400 cursor-pointer'>
            <h2 className='text-xl font-semibold text-gray-800 text-center'> {item} </h2>
          </div>
        ))}
        </div>
        <div>
          <button onClick={()=>clearCart() }> Clear</button>
        </div>

      </div>

    </div>
  )
}
