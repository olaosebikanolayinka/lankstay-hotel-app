import React from 'react'
import Button from './Button'

const Search = () => {
  return (
    <div className="flex justify-center items-center mt-[-30px] mb-8 w-full pt-8 px-4 sm:px-6">
      <div className="bg-[rgb(193,211,246)] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-7xl mx-auto h-auto px-4 sm:px-6 py-8 shadow-lg">

        {/* Calendar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 py-3 bg-white rounded-xl text-black shadow-md w-full md:w-auto text-center">
          <img src="/icons/calendar.svg" alt="calendar icon" className="w-5 h-5" />
          <p className="text-sm sm:text-base">Check available</p>
        </div>

        {/* Person */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-3 bg-white rounded-xl text-black shadow-md w-full md:w-auto text-center">
          <img src="/icons/human.svg" alt="person icon" className="w-5 h-5" />
          <p className="text-sm sm:text-base">Person 2</p>
          <img src="/icons/arrow_back_ios_new.svg" alt="arrow icon" className="w-5 h-5" />
        </div>

        {/* Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl text-black shadow-md w-full md:w-auto text-center">
          <img src="/icons/location.svg" alt="location icon" className="w-5 h-5" />
          <p className="text-sm sm:text-base">Select Location</p>
        </div>

        {/* Button (centered and full width on small screens) */}
        <div className="w-full flex justify-center md:w-auto">
          <Button title="Search" type="submit" />
        </div>
      </div>
    </div>
  )
}

export default Search
