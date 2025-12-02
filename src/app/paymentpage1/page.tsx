"use client";
import React from 'react'
import { useState } from 'react';
import Button from '../components/Button';
import Link from 'next/link';

const BookingPage = () => {
        const [days, setDays] = useState(2);
        const pricePerDay = 200;
        const total = days * pricePerDay;
    

  return (

    <div>
        <nav className='items-center flex justify-center border-b-2 border-gray-200 shadow-sm h-16 sm:h-20 px-4'>
            <h3 className='text-[#3252DF] text-lg sm:text-2xl font-semibold'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
        </nav>

        <div className='flex flex-col justify-center items-center mt-8 md:mt-15 px-4'>
            <div className='flex flex-row mb-4 md:mb-6 gap-2 md:gap-4 items-center'>
             <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-green-500 text-white rounded-full text-xs md:text-sm">✔</div>
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 text-gray-500 rounded-full text-xs md:text-sm">2</div>
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 text-gray-400 rounded-full text-xs md:text-sm">3</div>
            </div>

        <div className='flex flex-col items-center '>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#152C5B]'>Booking Information</h2>
            <p className='text-[#B0B0B0] text-xs sm:text-sm mb-6'>Please fill up the blank fields below</p>
        </div>
        </div>

    <div className='flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-start md:items-center px-4 py-8'>
        <div className='flex flex-col justify-center gap-4 md:gap-6 items-center w-full lg:w-auto'>
            <div className='flex flex-col gap-4 md:gap-6'>
                <img src="/booking-image.png" alt="building" className='w-full md:w-[360px] lg:w-[420px] h-auto aspect-video md:aspect-auto md:h-[220px] lg:h-[270px] rounded-lg object-cover'/>
              <div className='flex flex-row gap-4 md:gap-8 justify-between items-center'>
                <p className='text-[#152C5B] text-sm md:text-base font-semibold'>Blue Origin Fams</p>
                <p className='text-[#B0B0B0] text-xs md:text-sm'>Galle, Sri Lanka</p>
              </div>
            </div>

            <div className="hidden lg:block h-64 w-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col w-full lg:w-auto text-left space-y-4 md:space-y-5 px-0 lg:pl-10">
          <div className='flex gap-4 md:gap-6 flex-col w-full md:w-[324px]'>
            <p className="text-[#152C5B] text-xs md:text-sm font-medium">How long will you stay?</p>
            <div className="flex items-center space-x-2 md:space-x-3">
              <button
                onClick={() => setDays(Math.max(1, days - 1))}
                className="bg-red-500 text-white w-7 h-7 md:w-8 md:h-8 rounded text-sm"
              >
                -
              </button>
              <span className="text-[#152C5B] text-xs md:text-sm font-semibold">{days} Days</span>
              <button
                onClick={() => setDays(days + 1)}
                className="bg-green-500 text-white w-7 h-7 md:w-8 md:h-8 rounded text-sm"
              >
                +
              </button>
            </div>

            <div>
            <p className="text-gray-500 text-xs md:text-sm mb-2">Pick a Date</p>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <span className="text-[#152C5B] text-xs md:text-sm">📅 20 Jan – 22 Jan</span>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-xs md:text-sm">
              You will pay <span className="font-bold text-gray-800">${total} USD</span> per{" "}
              <span className="font-bold text-blue-600">{days} Days</span>
            </p>
          </div>
          </div>

        </div>

    </div>

    <div className="mt-8 md:mt-10 flex flex-col items-center space-y-3 px-4 pb-8">

        <Button title='Book Now' type='submit'  href="../paymentpge2"/>
       

      
       <a href="../bookingdocument"><button className=' bg-[#F5F6F8] text-[#B3B3B3] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out text-sm' >Cancel</button></a>
      
    </div>
    </div>
          
  )
}

export default BookingPage