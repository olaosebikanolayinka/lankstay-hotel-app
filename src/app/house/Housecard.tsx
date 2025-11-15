import React from 'react'

interface Place {
  id: number
  title: string
  location: string
  image: string
  popular: boolean
}

interface HousecardProps {
  place: Place
}

const Housecard: React.FC<HousecardProps> = ({ place }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">

      <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden">
        {/* Popular Choice badge for id 1 and 8 */}
        {(place.id === 1 || place.id === 8) && (
          <span className="absolute top-0 right-0 z-10 bg-[#3252DF] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-bl-2xl shadow-lg">
            Popular Choice
          </span>
        )}
        <img
          src={place.image}
          alt={place.title}
          className={`${place.id === 1 ? 'w-3/4 mx-auto' : 'w-full'} h-full object-cover hover:scale-105 transition-transform duration-300`}
        />
      </div>

      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
          {place.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 truncate">{place.location}</p>
      </div>
    </article>
  )
}

export default Housecard