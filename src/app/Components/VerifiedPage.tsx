import React from 'react'
import Button from './Button'

const VerifiedPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-6 sm:gap-8 px-4 bg-[url("/verified-bg.png")] bg-cover bg-center'>
        <div className='flex flex-col justify-center items-center bg-white bg-opacity-80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg max-w-sm w-full'>
            <h3 className='text-[#3252DF] text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
            <img src="/icons/check_circle.svg" alt="Verified Icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6" />
            <p className='text-[#3252DF] text-base sm:text-lg md:text-xl font-semibold text-center mb-6 sm:mb-8'>Once we verified, You can Access Dashboard</p>
            <Button title='Go to Dashboard' type='submit' className='w-full' />
        </div>

    </div>
  )
}

export default VerifiedPage