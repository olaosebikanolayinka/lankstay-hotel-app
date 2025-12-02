import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
        <div className='bg-white py-10 mt-20 border-t border-gray-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl mb-4 text-[#3252DF]'>Lanka<span className='text-[#152C5B]'>Stay</span></h3>
                        <p className='text-sm text-[#B0B0B0] md:max-w-[258px]'>We kaboom your beauty holiday instantly and memorable.</p>
                    </div>

                    <div className='flex flex-col items-start md:items-end gap-4'>
                        <p className='font-bold text-[#152C5B]'>Become hotel owner</p>
                        <Button title='Register Now' type='submit' />
                    </div>
                </div>
            </div>

            <div className='bg-[#3252DF] text-white text-center mt-6'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3 text-sm'>
                    <p>Copyright 2024 • All rights reserved • Salman Faris</p>
                </div>
            </div>
        </div>
  )
}

export default Footer
