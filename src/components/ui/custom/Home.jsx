import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col items-center mx-80 gap-9'>
      <h1
      className='font-extrabold text-[50px] text-center mt-10'>
        <span className='bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent'>Say goodbye to stress – </span>
        <br></br> 
        <span className='text-gray-900'>AI crafts your ideal trip in seconds!</span>
      </h1>

      <p className='text-xl text-gray-500 text-center'>Enjoy trips that fit your style, time, and budget – all auto-curated.</p>

      <Link to={'/trip'}>
      <Button className='bg-gradient-to-r from-sky-500 to-cyan-400 hover:scale-105 active:scale-95 shadow-md → hover:shadow-xl → active:shadow-sm text-black font-semibold border-b px-5 py-3 rounded-lg transition-all duration-300 ease-in-out'> Get Started, It's free</Button>
      </Link>
    </div>
  )
}

export default Home