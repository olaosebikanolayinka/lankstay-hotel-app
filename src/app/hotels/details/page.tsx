import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
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
    image: "/labour-wait.png",
    popular: true,
  },
  {
    id: 4,
    name: "Snorkeling",
    category: "Beach",
    image: "/snorlkling.png",
    popular: false,
  },
];

const DetailsPage = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Breadcrumb + Title */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-16 pt-6 md:pt-10 text-gray-600 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-center md:text-left">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#152C5B] font-medium">House Details</p>
        </div>

        <div className="text-center w-full">
  <h2 className="text-[#152C5B] font-bold text-xl sm:text-2xl md:text-3xl">Blue Origin Fams</h2>
  <p className="text-gray-500 text-xs sm:text-sm">Galle, Sri Lanka</p>
</div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8">
        <div className="w-full md:w-2/3">
          <img
            src="/Blueorigin-1.png"
            alt="Main villa view"
            className="rounded-2xl object-cover w-full h-auto aspect-video"
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-3 sm:gap-4">
          <img
            src="/Blueorigin-2.png"
            alt="Interior view"
            className="rounded-2xl object-cover w-full h-auto aspect-square md:aspect-video"
          />
          <img
            src="/Blueorigin-3.png"
            alt="Bathroom view"
            className="rounded-2xl object-cover w-full h-auto aspect-square md:aspect-video"
          />
        </div>
      </div>

      {/* About + Booking */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-16 mt-8 md:mt-10 justify-between items-start">
        {/* About Section */}
        <div className="w-full lg:flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[#152C5B] mb-4">About the place</h3>
          <p className="text-gray-600 leading-7 text-sm md:text-base mb-4">
            Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development.
          </p>
          <p className="text-gray-600 leading-7 text-sm md:text-base">
            Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
          </p>
        </div>

        {/* Booking Card */}
        <div className="w-full lg:w-80 border-2 border-gray-200 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-sm">
          <p className="text-[#152C5B] font-bold text-base sm:text-lg">Start Booking</p>
          <p>
            <span className="font-bold text-xl sm:text-2xl text-[#1ABC9C]">$200</span> per Day
          </p>

          <Link href="/login">
            <button
              className="bg-[#3252DF] text-white font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-md hover:bg-[#152C5B] transition duration-300 ease-in-out w-full text-sm sm:text-base"
              type="submit"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5 md:gap-6 justify-items-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-10">
        {[
          { icon: "/icons/bedroom.svg", label: "bedroom", value: 1 },
          { icon: "/icons/ic_livingroom.svg", label: "living room", value: 1 },
          { icon: "/icons/ic_bedroom.svg", label: "bathroom", value: 1 },
          { icon: "/icons/ic_diningroom 1.svg", label: "dining room", value: 1 },
          { icon: "/icons/ic_wifi 1.svg", label: "mbp/s", value: 10 },
          { icon: "/icons/ic_ac 1.svg", label: "unit ready", value: 7 },
          { icon: "/icons/ic_kulkas.svg", label: "refrigerator", value: 1 },
          { icon: "/icons/ic_tv.svg", label: "television", value: 2 },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-2">
            <img src={item.icon} alt={item.label} className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-xs sm:text-sm">
              <span className="font-bold text-[#152C5B]">{item.value}</span> {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Treasures Section */}
      <div className="p-6 sm:p-8 md:p-12 mb-20">
        <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-6 px-4 sm:px-6 md:px-8 lg:px-16">
          Treasure to Choose
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-16">
          {treasures.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl object-cover w-full h-48"
                />
                {item.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-b shadow">
                    Popular Choice
                  </div>
                )}
              </div>

              <div className="mt-2 pt-3">
                <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
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
