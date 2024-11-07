import React from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <header className='bg-slate-300'>
        <div className="container flex justify-between items-center p-4 ">
            <h1 className='text-2xl font-semibold'>
                <span className='text-slate-700'>Home</span>
                <span className='text-slate-500'>Blocs</span>
            </h1>
            <form className='bg-slate-200 flex items-center justify-between px-3 py-2 rounded-lg w-1/2'>
                <input type="text" placeholder='Search...' className='bg-transparent outline-none flex-1'/>
                <HiMiniMagnifyingGlass className='text-lg'/>
            </form>
            <h1 className='font-semibold text-lg text-slate-400 cursor-pointer hover:text-slate-600 duration-150 '>Sign-In</h1>
        </div>
    </header>
  )
}

export default Header