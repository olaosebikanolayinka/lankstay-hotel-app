"use client";
import Sidebar from "../components/SideBar";
import HotelOwners from "../components/HotelOwners";
import Topbar from "../components/TopBar";

import { Search, Plus } from "lucide-react";
import { useState } from "react";


    export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100 relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col transition-all duration-300">
        <Topbar toggleSidebar={toggleSidebar} />

        <section className="flex-1 p-4 md:p-8 space-y-6">
          {/* Page Title */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <h2 className="text-xl font-semibold text-[#3252DF]">
              Admin Dashboard
            </h2>
          </div>

          {/* Search + Buttons Section */}
          <div className="p-3 sm:p-4 md:p-6 rounded-xl shadow-sm">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
    
    {/* Search Field */}
    <div className="relative flex-1 w-full">
      <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Search"
        className="pl-9 pr-4 py-2 sm:py-3 w-full bg-white rounded-lg text-xs sm:text-sm text-gray-700 focus:ring-2 focus:ring-[#3252DF] outline-none"
      />
    </div>

    {/* Buttons & Filters in one row */}
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
      <button className="bg-[#3252DF] hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
        <Plus size={16} /> Add Owner
      </button>

      <select className="rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-700 focus:ring-2 focus:ring-[#3252DF] outline-none">
        <option>Sort by</option>
        <option>Name</option>
        <option>Date</option>
        <option>Role</option>
      </select>

      <select className="rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-700 focus:ring-2 focus:ring-[#3252DF] outline-none">
        <option>Saved search</option>
        <option>Admin Only</option>
        <option>Pending Owners</option>
        <option>Recent Owners</option>
      </select>

      <img src="./icons/settings.svg" alt="" className="w-4 h-4" />
    </div>
    </div>
    </div>

          {/* Table / Hotel Owners List */}
          <HotelOwners />
        </section>
      </main>
    </div>
  );
}