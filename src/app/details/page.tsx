import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Link from 'next/link'


const treasures = [
  {
    id: 1,
    name: "Green Lake",
    category: "Nature",
    image: "/green-lake.png",
    popular: false,
  },
  {
    id: 2,
    name: "Dog Clubs",
    category: "Pool",
    image: "/dog.png",
    popular: false,
  },
  {
    id: 3,
    name: "Labour and Wait",
    category: "Shopping",
    image: "/labour and wait.png",
    popular: true, // This one has the "Popular Choice" badge
  },
  {
    id: 4,
    name: "Snorkeling",
    category: "Beach",
    image: "/snorlkling.png",
    popular: false,
  },
]


const DetailsPage = () => {
  return (
    
    <div className=''>
      <Navbar />
        <div className='flex flex-row gap-10 px-25 pt-10'>
            <div className='flex flex-row gap-90 justify-between items-center text-sm text-gray-600'>
                <div className='flex flex-row gap-4'>
                <p>Home</p>
                <p>/</p>
                <p className='text-[#152C5B]'>House Details</p>
                </div>
            
            <div className='flex flex-col gap-3 items-center justify-center'>
                <h2 className='text-[#152C5B] font-bold text-3xl items-center'> Blue Origin Fams</h2>
                <p>Galle, Sri Lanka</p>
            </div>
            </div>
        </div>

         <div className="flex flex-col md:flex-row gap-4 p-6  px-25 py-10 mt-6">
      <div className="md:w-2/3 flex justify-center md:-mr-4">
        <img
          src="/Blueorigin-1.png"
          alt="Main villa view"
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full max-w-[600px] h-auto"
        />
      </div>

      <div className="md:w-1/3 flex flex-col gap-4">
        <img
          src="/Blueorigin-2.png"
          alt="Interior view"
          width={487}
          height={245}
          className="rounded-2xl object-cover w-full h-1/2"
        />
        <img
          src="/Blueorigin-3.png"
          alt="Bathroom view"
          width={487}
          height={245}
          className="rounded-2xl object-cover w-full h-1/2"
        />
      </div>
    </div>

    <div className='flex flex-row gap-10 px-25 mt-10 justify-center items-center'>
      <div className='px-25 py-10'>
        <h3 className='text-2xl font-bold text-[#152C5B] mb-4'>About the place</h3>
        <p className='text-gray-600 leading-7 text-sm w-[600px]'>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
        <p className='text-gray-600 leading-7 text-sm w-[600px]'>Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
        </div>


        <div className='flex flex-col px-25 py-10 border-2 border-gray-300 rounded-2xl w-[487px] h-[248px] justify-center gap-8'>
          <p className='text-[#152C5B] font-bold'>Start Booking</p>
          <p> <span className='font-bold text-2xl text-[#1ABC9C]'>$200</span>  per Day</p>

        <Link href="/login">
          <button className='bg-[#3252DF] text-white font-medium px-5 py-2 rounded-md hover:bg-[#152C5B] transition duration-300 ease-in-out flex items-center gap-2 w-[100%] justify-center'
      type='submit' >
        Book Now
    </button>
    </Link>

        </div>


       

    </div>


    
     <div className='flex flex-row gap-17 justify-center items-center px-25 pt-10 pb-10'>

      <div className='flex flex-col gap-3'>
        <img src="/icons/bedroom.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>1</span> bedroom</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_livingroom.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>1</span> living room</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_bedroom.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>1</span> bathroom</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_diningroom 1.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>1</span> dining room</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_wifi 1.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>10</span>  mbp/s</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_ac 1.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>7</span>  unit ready</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_kulkas.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>1</span> refigrator</p>
      </div>

       <div className='flex flex-col gap-3'>
        <img src="/icons/ic_tv.svg" alt="bedroom icon" className='w-6 h-6' />
        <p className='text-sm'><span className='font-bold text-[#152C5B]'>2</span> television</p>
      </div>
        

        </div>

       <div className="p-8 md:p-12 items-center justify-center mb-20">
      <h2 className="text-lg font-semibold text-blue-900 mb-6 px-25">
        Treasure to Choose
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-25">
        {treasures.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-2xl object-cover w-full h-48"
              />

             
              {item.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-b shadow">
                  Popular Choice
                </div>
              )}
            </div>

           
            <div className="mt-2 gap-3 pt-5">
              <h3 className="text-base font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default DetailsPage