"use client";

import React, { useState } from "react";
import { Eye, EyeOff} from "lucide-react";
import Link from "next/link";
import InputField from "../Components/Inputfield";
import TextareaField from "../Components/TextArea";


const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-6xl flex flex-col md:grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Section - User Info */}
        <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r">
          <h2 className="text-3xl font-bold text-blue-700">
            Lanka<span className="text-gray-800">Stay.</span>
          </h2>

          <form className="mt-6 space-y-4">
            <InputField label="Name" placeholder="Enter your name" required />
            <InputField label="Email" type="email" placeholder="name@gmail.com" required/>
            <InputField label="Phone No" placeholder="With Country Code" required/>
            <InputField label="Country" placeholder="Country Name" />
            <InputField label="NIC" placeholder="National Identity Card" required />
            <InputField label="Username" placeholder="Username" required/>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="6+ characters"
                className="w-full mt-1 p-2 pr-10 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Hotel Info */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register Your Hotel</h2>

          <form className="space-y-4">
            <InputField label="Hotel Name" placeholder="Full Name" />
            <InputField label="Registration No" placeholder="PVT(Ltd)" />
            <InputField label="Address" placeholder="Location" />
            <InputField label="Upload Images" type="file" />
            <InputField label="Upload Documents" type="file" />
            <TextareaField label="Facilities" placeholder="Describe" />


         <Link href="/login">
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
            </Link>
          

            <p className="text-center text-sm text-gray-600 mt-2">
              <Link href="/login" className="text-blue-600">
              
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;