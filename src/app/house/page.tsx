"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Housecard from './Housecard'
export const PLACES = [
  {
    id: 1,
    title: "Shangri-La",
    location: "Colombo, Sri Lanka",
    image: "/shangri-la.png",
    popular: true,
  },

  {
    id: 2,
    title: "Top View",
    location: "Hikkaduwe, Sri Lanka",
    image: "/top-view.png",
    popular: false,
  },

  {
    id: 3,
    title: "Green Villa",
    location: "Kandy, Sri Lanka",
    image: "/green-villa.png",
    popular: false,
  },

  {
    id: 4,
    title: "Wooden Pit",
    location: "Ambalangode, Sri Lanka",
    image: "/wodden-pit.png",
    popular: false,
  },

  {
    id: 5,
    title: "Boutique",
    location: "Kandy, Sri Lanka",
    image: "/boutique.png",
    popular: false,
  },

  {
    id: 6,
    title: "Modern",
    location: "Nuwereilya, Sri Lanka",
    image: "/modern.png",
    popular: false,
  },

  {
    id: 7,
    title: "Silver Rain",
    location: "Dehiwala, Sri Lanka",
    image: "/silver-rain.png",
    popular: false,
  },

  {
    id: 8,
    title: "Cashville",
    location: "Ampara, Sri Lanka",
    image: "/cashville.png",
    popular: true,
  },
];

const House = () => {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-20 bg-white  mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#152C5B] mb-8 md:mb-10">
        Most Picked
      </h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        {PLACES.map((place) => (
          <Housecard key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
};

type Place = {
  id: number
  title: string
  location: string
  image: string
  popular: boolean
}

export default House