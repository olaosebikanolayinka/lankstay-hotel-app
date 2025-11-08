import React from 'react'
import Button from './Button'

const Search = () => {
  return (
    <div className='flex justify-center items-center mt-[-30px] mb-8 w-full pt-8 px-4 sm:px-6'>
      <div className='bg-[rgb(193,211,246)] rounded-3xl flex flex-row items-center justify-center gap-45 w-full max-w-7xl mx-auto h-auto md:h-16 px-4 sm:px-6 py-10 shadow-lg'>

      
        <div className='flex items-center gap-3  px-4 py-3 bg-white rounded-xl text-black shadow-md'>
          <img src="/icons/calendar.svg" alt="person icon" className="w-5 h-5" />
          <p className='text-sm'>Check available</p>
        </div>

        <div className='flex items-center gap-4 px-4 py-3 bg-white rounded-xl text-black shadow-md'>
          <img src="/icons/human.svg" alt="person icon" className="w-5 h-5" />
          <p className='text-sm'>Person 2</p>
          <img src="/icons/arrow_back_ios_new.svg" alt="person icon" className="w-5 h-5" />
        </div>

        <div className='flex items-center gap-2 px-4 py-3 bg-white rounded-xl text-black shadow-md'>
          <img src="/icons/location.svg" alt="person icon" className="w-5 h-5" />
          <p className='text-sm'>Select Location</p>
        </div>

        
          <Button title='Search' 
            type='submit'
          />


      </div>

    </div>
  )
}

export default Search