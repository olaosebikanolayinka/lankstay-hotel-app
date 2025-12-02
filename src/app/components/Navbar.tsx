"use client"

import React, { useState } from 'react'
import Button from './Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const Navlinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '../hotels/details' },
    { name: 'Rooms', path: '/Components/BookingPage3' },
    { name: 'About', path: '/#' },
    { name: 'Contact', path: '/#' },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className='w-full bg-white border-b shadow-md flex items-center justify-between h-20 px-4 sm:px-6 lg:px-20 relative'>
      <div className='text-2xl font-semi-bold px-2 sm:px-4'>
        <h3 className='text-[#3252DF]'>Lanka<span className='text-[#152C5B]'>Stay</span></h3>
      </div>

      
      <ul className='hidden lg:flex gap-8 text-sm text-[#152C5B]'>
        {Navlinks.map((link, index) => {
          const isActive = pathname === link.path
          return (
            <li key={index}>
              <Link
                href={link.path}
                className={`transition duration-200 ease-in-out ${isActive ? 'underline decoration-2 decoration-[#3252DF] text-[#3252DF]' : 'hover:text-[#3252DF]'}`}
              >
                {link.name}
              </Link>
            </li>
          )
        })}

        <div className='hidden lg:flex gap-8'>
          <Button type='submit' title='Log in' href="/login" className='block w-full text-center' />
        </div>
      </ul>

    
      <div className='lg:hidden'>
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-label='Toggle menu'
          aria-expanded={menuOpen}
          className='p-2 rounded-md text-[#3252DF] hover:bg-gray-100'
        >
          {menuOpen ? (
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
      </div>


      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-40'>
          <div className='px-4 py-4 space-y-3'>
            {Navlinks.map((link, idx) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={idx}
                  href={link.path}
                  className={`block text-gray-800 py-2 px-2 rounded transition-colors ${isActive ? 'underline decoration-2 decoration-[#3252DF] text-[#3252DF]' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className='pt-2 space-y-2'>
              <Button title="Log in" href="/login" className='w-full text-center items-center' />

              <Link href="/register" className='block w-full text-center bg-white text-[#3252DF] border border-[#3252DF] px-4 py-2 rounded-md font-medium hover:bg-[#f8fbff]'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar