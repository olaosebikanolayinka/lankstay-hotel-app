"use client";
import React from 'react'
import Link from 'next/link'

const MostPicked = () => {

  const places = [
    {
      id : 1,
      title : "Blue Origin Farm",
      location : "Galle sri lanka",
      price : "$50 per night",
      image : "/Blueoriginfam.png"
    },

    {
      id : 2,
      title : "Occean Land",
      location : "Trincomalee, Sri Lanka",
      price : "$22 per night",
      image : "/occean-land.png"
    },

    {
      id : 3,
      title: "Stark House",
      location: "Dehiwala, Sri Lanka",
      price: "$856 per night",
      image : "/stark-house.png"
    },

    {
      id : 4,
      title: "Vinna Vill",
      location: "Beruwala, Sri Lanka",
      price: "$62 per night",
      image : "/vinna-vill.png"
    },

     {
      id : 5,
      title: "Bobox",
      location: "Kandy, Sri Lanka",
      price: "$72 per night",
      image : "/bobox.png"
    },




  ]
  return (
    <section className='py-10 px-5'>
      <div className='px-4 sm:px-6 lg:px-20'>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Most Picked</h2>
      </div>
      {/* Featured layout: first place as large image on left, remaining 4 as 2x2 grid on right */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-x-8 items-stretch'>
          {/* Large featured */}
          {places[0] && (
            <div className='lg:col-span-2 flex justify-center'>
              <div className='w-full max-w-[920px]'>
                <div className='relative rounded-2xl overflow-hidden shadow-lg group h-64 md:h-80 lg:h-[480px]'>
            <Link href="/Details">
            <img
              src={places[0].image}
              alt={places[0].title}
              className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
            />
            </Link>

            <div className='absolute top-0 right-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-tl-md rounded-br-md'>
          {places[0].price}
            </div>

            <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white'>
          <h3 className='text-lg font-semibold'>{places[0].title}</h3>
          <p className='text-sm opacity-80'>{places[0].location}</p>
            </div>
            </div>
              </div>
            </div>
          )}



          
          <div className='lg:col-span-1 grid grid-cols-2 grid-rows-2 gap-4 md:gap-6'>
            {places.slice(1, 5).map((place) => (
              <div key={place.id} className='relative rounded-2xl overflow-hidden shadow-lg group h-44 md:h-52 lg:h-56'>
                <img
                  src={place.image}
                  alt={place.title}
                  className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                />

            <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-tl-md rounded-br-md'>
          {place.price}
            </div>

            <div className='absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white'>
          <h3 className='text-sm font-semibold'>{place.title}</h3>
          <p className='text-xs opacity-80'>{place.location}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MostPicked