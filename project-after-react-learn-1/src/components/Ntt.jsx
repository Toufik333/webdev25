const Ntt = ({ title, subTitle, descrip }) => {
  return (
    <div className='w-6 h-3 object-cover'>
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/40'></div>
        <h1 className="py-4 text-white text-5xl md:text-6xl font-serif font-extrabold mb-4 text-center drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white text-xl md:text-2xl font-thin text-center max-w-2xl drop-shadow">
          {subTitle}
        </p>
        <p className="text-white text-xl md:text-2xl font-thin text-center max-w-2xl drop-shadow">
          {descrip}
        </p>
    </div>
  )
}

export default Ntt
