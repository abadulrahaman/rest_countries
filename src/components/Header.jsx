import React from 'react'
import { IoMoonSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex justify-between items-center py-6 px-10 text-2xl shadow-lg'>
        <Link to='/'>
          <div>
              Countries
          </div>
        </Link>
        <div className='flex items-center gap-4'>
            <IoMoonSharp />
            <p>Dark Mode</p>
        </div>
    </div>
  )
}
