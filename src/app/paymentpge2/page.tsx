import React from 'react'
import Button from '../components/Button'

const BookingPage2 = () => {
  return (
    <div>
        <nav className='items-center flex justify-center border-b-2 border-gray-200 shadow-sm h-16 sm:h-20 px-4'>
            <h3 className='text-[#3252DF] text-lg sm:text-2xl font-semibold'>Lanka<span className='text-[#152C5B]'>Stay.</span></h3>
        </nav>

        <div className='flex flex-col justify-center items-center mt-8 md:mt-15 px-4'>
            <div className='flex flex-row mb-4 md:mb-6 gap-2 md:gap-4 items-center'>
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-green-500 text-white rounded-full text-xs md:text-sm">✔</div>
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-green-500 text-white rounded-full text-xs md:text-sm">✔</div>
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 text-gray-400 rounded-full text-xs md:text-sm">3</div>
            </div>

        <div className='flex flex-col items-center '>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#152C5B]'>Payment</h2>
            <p className='text-[#B0B0B0] text-xs sm:text-sm mb-6'>Kindly follow the instructions below</p>
        </div>
        </div>


    <div className='flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-start md:items-center mt-8 md:mt-10 px-4'>
        <div className='flex flex-col gap-4 md:gap-8 text-[#152C5B] w-full lg:w-auto'>
            <div className='text-xs sm:text-sm md:text-base space-y-3 md:space-y-4'>
                <div>
                    <p className='font-semibold'>
                    Transfer LankaStay:
                    </p>
                </div>

                 <div>
                    <p>
                    2 Days at Blue Origin Fams, Galle, Sri Lanka
                    </p>
                </div>

                 <div>
                    <p>
                    Total: <span className='font-semibold'>$400 USD</span>
                    </p>
                </div>

                 <div>
                    <p>
                    Initial Payment: <span className='font-semibold'>$200</span>
                    </p>
                </div>

                 <div>
                    <p className='font-semibold'>
                    Transfer LankaStay:
                    </p>
                </div>
            </div>
        </div>

        <div className="hidden lg:block h-64 w-px bg-gray-300"></div>

        <div className='flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm text-[#152C5B] w-full lg:w-auto'>

            <div className='flex flex-col gap-1 md:gap-2 w-full lg:w-64'>
                <label htmlFor="card-number" className='text-[#152C5B] font-medium text-xs md:text-sm'>Card Number</label>
                <input id="card-number" type="text" inputMode="numeric" pattern="[0-9]*" placeholder='card number'  className="border border-gray-300 rounded px-3 py-2 text-xs md:text-sm" required />
            </div>

            <div className='flex flex-col gap-1 md:gap-2 w-full lg:w-64'>
                <label htmlFor="Bank" className='text-[#152C5B] font-medium text-xs md:text-sm'>Bank</label>
                <input id="Bank" type="text"  placeholder='select bank' className="border border-gray-300 rounded px-3 py-2 text-xs md:text-sm" required/>
            </div>

            <div className='flex flex-col gap-1 md:gap-2 w-full lg:w-64'>
                <label htmlFor="exp-date" className='text-[#152C5B] font-medium text-xs md:text-sm'>Exp Date</label>
                <input id="exp-date" type="text" inputMode="numeric" placeholder='validation date'  className="border border-gray-300 rounded px-3 py-2 text-xs md:text-sm" required/>
            </div>

            <div className='flex flex-col gap-1 md:gap-2 w-full lg:w-64'>
                <label htmlFor="CVV" className='text-[#152C5B] font-medium text-xs md:text-sm'>CVV</label>
                <input id="CVV" type="text" inputMode="numeric" maxLength={4} placeholder='cvv' className="border border-gray-300 rounded px-3 py-2 text-xs md:text-sm" required/>
            </div>

        </div>

        </div>
       <div className="mt-8 md:mt-10 flex flex-col items-center space-y-3 px-4 pb-8 w-full">
        <Button title='Pay Now' type='submit' href='../BookingPage3' />
       <button className=' bg-[#F5F6F8] text-[#B3B3B3] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out text-sm'>Cancel</button>
      </div>
      </div>
        
    
  )
}

export default BookingPage2