import React from 'react'
import Link from 'next/link'

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
    <section className="py-10 px-5 sm:px-8 md:px-12 lg:px-16 bg-white">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#152C5B] mb-6">
        Most Picked
      </h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PLACES.map((place) => (
          <HouseCard key={place.id} place={place} />
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

const HouseCard: React.FC<{ place: Place }> = ({ place }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={place.image}
        alt={place.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-medium text-gray-800">{place.title}</h3>
        <p className="text-sm text-gray-500">{place.location}</p>
        {place.popular && (
          <span className="inline-block mt-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
            Popular
          </span>
        )}
      </div>
    </article>
  )
}

export default House