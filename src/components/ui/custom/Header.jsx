import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='p-0.5 shadow-sm bg-gray-100 flex justify-between items-center px-5'>  
        <img src="/logo.png" alt="Logo" width="120" />
        <div>
            <Button className='bg-sky-400 text-black font-semibold border-b px-4 py-2 rounded-lg hover:bg-green-400 transition'>Sign In</Button>
        </div>
    </div>
  )
}

export default Header