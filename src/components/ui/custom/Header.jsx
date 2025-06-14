import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='p-0.5 shadow-sm bg-gray-100 flex justify-between items-center px-5'>  
        <img src="/logo.png" alt="Logo" width="120" />
        <div>
            <Button className='bg-sky-400 hover:bg-green-400 text-black font-semibold 
         px-5 py-2.5 rounded-md shadow-md hover:shadow-lg 
         transition-all duration-300 ease-in-out'>Sign In</Button>
        </div>
    </div>
  )
}

export default Header