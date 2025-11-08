"use client";

import { useState } from "react";
import Link from 'next/link'
import InputField from "../Components/Inputfield";
import { Eye, EyeOff} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50  px-25 py-20 rounded-2xl">
        <div
  className="relative w-full md:w-1/2 h-56 sm:h-64 md:h-auto bg-cover bg-center flex items-center justify-center p-4 sm:p-8 md:p-10"
  style={{
    backgroundImage: "url('/verified-bg.png')",
  }}
>
  <div className="bg-white/70 rounded-2xl shadow-lg w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3252DF] text-center">
      Lanka<span className="text-[#152C5B]">Stay.</span>
    </h1>
  </div>
</div>


    <div className="flex-1 flex items-center justify-center px-6 sm:px-10 md:px-12 lg:px-20 py-10 md:py-16 bg-white">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center md:text-left">
            Create Account
          </h2>

          <form className="space-y-5">
       
            <InputField label="Username" placeholder="Choose a username" required/>

            <div className="relative">
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="6+ characters"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-9 sm:top-10 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

           

       
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
              .
            </p>
            
            <Link href="../dashboard">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-md transition"
            >
              Login
            </button>
          </Link>
          </form>

          
            <a href="../register" className="text-blue-600 hover:text-[#152C5B] items-center justify-center flex mt-6">
              Create Account
            </a>
          
    </div>
    </div>
    </div>
    
  );
}

export default LoginPage