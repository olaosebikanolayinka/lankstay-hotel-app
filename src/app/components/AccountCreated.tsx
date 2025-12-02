"use client"

import React from 'react'
import Button from './Button'
import { Link } from 'lucide-react'
import NextLink from 'next/link'

const AccountCreated = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded-2xl p-3 sm:p-8 md:p-5 shadow-lg w-full max-w-sm mx-auto'>
      
            <h3 className='text-[#3252DF] text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
            <img src="/icons/check_circle.svg" alt="Verified Icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6" />
            <h4 className='text-[#3252DF] text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-center'>Account Created Successful</h4>
            <p className='text-[#152C5B] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-center'>Please Check Your Email</p>
           
            <Button title='Book Now'
            type='submit' className='w-full text-center justify-center items-center' href="/login" />
         
    </div>
  )
}

export default AccountCreated