"use client";
import React from 'react'
import { useState } from 'react';

const RoomRegisterPage = () => {
    
    const [use,setUser] = useState ({
        name: "",
        email: "",
        password: "",
        phone: "",
        country: "",
        username: ""
    })

    const [hotel,setHotel] = useState ({
        hotelName: "",
        regNo: "",
        address: "",
        images: "",
        documents: "",
        facilities: ""
    });

  return (

    
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
        <div className='bg-white shadow-md rounded-2xl flex  flex-col md:flex-row w-full overflow-hidden max-w-5xl'>
        <div className='w-full md:w-1/2 p-8 border-r border-gray-200'>
        <h1 className="text-3xl font-bold text-blue-800 mb-8">
            Lanka<span className="text-gray-700">Stay.</span>
          </h1>

          <form action=""></form>

        </div>
        </div>

    </div>
  )
}

export default RoomRegisterPage