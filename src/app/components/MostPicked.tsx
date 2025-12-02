"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
  const places = [
  {
    title: "Blue Origin Fams",
    location: "Galle, Sri Lanka",
    price: 50,
    image: "/blueoriginfam.png",
    big: true,
  },
  {
    title: "Ocean Land",
    location: "Trincomalee, Sri Lanka",
    price: 22,
    image: "/occean-land.png",
  },
  {
    title: "Stark House",
    location: "Dehiwala, Sri Lanka",
    price: 856,
    image: "/stark-house.png",
  },
  {
    title: "Vinna Vil",
    location: "Beruwala, Sri Lanka",
    price: 62,
    image: "/vinna-vill.png",
  },
  {
    title: "Bobox",
    location: "Kandy, Sri Lanka",
    price: 72,
    image: "/bobox.png",
  },
];


export default function MostPicked() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-8 md:py-12 lg:py-16  mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-6 md:mb-8 text-[#152C5B]">Most Picked</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 auto-rows-max">
        
        {/* BIG LEFT CARD */}
        <div className="lg:row-span-2 relative group w-full aspect-square sm:aspect-square md:aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src={places[0].image}
            alt={places[0].title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Price badge */}
          <div className="absolute top-0 sm:top-0 right-0 sm:right-0 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-bl-xl  text-xs sm:text-sm">
            ${places[0].price} per night
          </div>

          {/* Title + location */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold line-clamp-2">{places[0].title}</h3>
            <p className="text-xs sm:text-sm opacity-80 line-clamp-1">{places[0].location}</p>
          </div>
        </div>

        {/* SMALL CARDS */}
        {places.slice(1).map((p, i) => (
          <div
            key={i}
            className="relative group w-full aspect-video sm:aspect-video md:aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-0 sm:top-0 right-0 sm:right-0 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-bl-xl  text-xs sm:text-sm">
              ${p.price} per night
            </div>

            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-2">{p.title}</h3>
              <p className="text-xs opacity-80 line-clamp-1">{p.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
