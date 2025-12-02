import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
  <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 md:gap-12 mt-5 mb-20 w-full px-4 sm:px-6 lg:px-20 pt-10'>
    <div className='flex flex-col justify-center items-center lg:items-start lg:w-1/2 gap-6 pt-4 md:pt-6'>
    {/* left side text write up*/}
            <div className='flex flex-col justify-start md:justify-center items-center md:items-start'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold leading-[1.4] md:leading-[1.5] text-[#152C5B] text-center lg:text-left'>Forget Busy Work,
                    Start Next Vacation
                    </h1>
         </div>
                    <div className='text-center lg:text-left'>
                        <p className='text-sm leading-[1.5] text-[#B0B0B0]'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                    </div>
                    

      <div className='pt-5 w-full flex justify-center lg:justify-start'>
        <Button type='submit' title='Show more' />
    </div>

  <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 pt-5 w-full lg:pt-0 lg:gap-12 lg:items-end'>
        <div className='flex flex-col justify-center items-center'>
          <img src="/icons/traveler.svg" alt="traveler icon" className='w-6 h-8 mb-3' />
          <p className='text-gray-600 text-sm text-center'><span className='font-bold text-[#152C5B] py-1'>2500</span> users</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src="/icons/cameraicon.svg" alt="Camera icon" className='w-6 h-8 mb-3' />
         <p className='text-gray-600 text-sm text-center'><span className='font-bold text-[#152C5B] py-1'>200</span> treasures</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src="/icons/locationicon.svg" alt="Location icons" className='w-6 h-8 mb-3'/>
          <p className='text-gray-600 text-sm text-center'><span className='font-bold text-[#152C5B] py-1'>100</span> cities</p>
        </div>
      </div>
        </div>
  <div className="md:w-1/2 relative flex justify-center items-end pb-10">
      {/* Background white card */}
      <div className="absolute top-10 right-1 border-2 border-gray-500 w-[80%] h-[90%]  rounded-3xl shadow-lg"></div>

      {/* Main image */}
      <img
       src="/hero-image.png"
       alt="Vacation Room"
       width={500}
       height={420}
       className="relative rounded-3xl object-cover shadow-xl rounded-tl-[80px]"
      />
    </div>

    </div>
  )
}

export default Hero