import React from 'react'
import { PLACES } from './page'

const Housecard: React.FC = () => {
  
  const items = PLACES.slice(0, 4);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="grid grid-cols-2 gap-1">
        {items.map((p) => (
          <img
            key={p.id}
            src={p.image}
            alt={p.title}
            className="w-full h-32 object-cover"
          />
        ))}
      </div>

      <div className="p-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          {items[0].title}
        </h3>
        <p className="text-sm sm:text-base text-gray-500">{items[0].location}</p>
      </div>
    </div>
  )
}

export default Housecard