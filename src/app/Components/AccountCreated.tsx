import React from 'react'
import Button from './Button'

const AccountCreated = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-8 bg-[url("/verified-bg.png")] bg-cover bg-center'>
        <div className='flex flex-col justify-center items-center bg-white bg-opacity-80 rounded-2xl p-10 shadow-lg w-[928px] '>
            <h3 className='text-[#3252DF] text-2xl  mb-6'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
            <img src="/icons/check_circle.svg" alt="Verified Icon" className="w-16 h-16 mb-4" />
            <h4 className='text-[#3252DF] text-2xl mb-4 font-bold'>Account Created Successful</h4>
            <p className='text-[#152C5B] text-[16px] mb-8'>Please Check Your Email</p>
            <Button title='Book Now'
            type='submit' />
        </div>

    </div>
  )
}

export default AccountCreated