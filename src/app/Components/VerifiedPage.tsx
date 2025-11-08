import React from 'react'
import Button from '../Components/Button'

const VerifiedPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-8 bg-[url("/verified-bg.png")] bg-cover bg-center'>
        <div className='flex flex-col justify-center items-center bg-white bg-opacity-80 rounded-2xl p-10 shadow-lg'>
            <h3 className='text-[#3252DF] text-2xl  mb-6'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
            <img src="/icons/check_circle.svg" alt="Verified Icon" className="w-16 h-16 mb-4" />
            <p className='text-[#3252DF] text-2xl mb-8'>Once we verified, You can Access Dashboard</p>
            <Button title='Go to Dashboard'
            type='submit' />
        </div>

    </div>
  )
}

export default VerifiedPage