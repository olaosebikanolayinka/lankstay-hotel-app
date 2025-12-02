"use client";

import {
  Search,
  Filter,
  LayoutGrid,
  Table,
  Printer,
  Trash2,
  FileText,
  Edit,
  Plus,
} from "lucide-react";
import { useState } from "react";
import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import Link from "next/link";
import Button from "../components/Button";

export default function BookingsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const rooms = [
    {
      name: "Blue Origin Fams",
      date: "20 Jan - 22 Jan",
      desc: "Galle to Colombo Road 245, Main Street, Galle.",
      nights: "02 Days",
      initial: "$200",
      total: "$400",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />

        {/* Page Section */}
        <section className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-semibold text-[#3252DF]">Bookings</h2>
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documents"
                className="pl-9 pr-12 py-3 w-full bg-white rounded-lg text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-[#3252DF] outline-none"
              />
            </div>

            {/* Sort Button */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Sort by</span>
              <button className="p-2 rounded hover:bg-gray-100 text-gray-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            {/* Action Icons */}
            <div className="flex items-center gap-3 p-2">
              {[FileText, LayoutGrid, Table, Printer, Trash2].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="p-3 hover:bg-gray-100 rounded border-2 border-gray-200"
                  >
                    <Icon className="w-4 h-4 text-[#3252DF]" />
                  </button>
                )
              )}
            </div>

            {/* Filters + Add */}
            <div className="flex items-center gap-4">
              <select className="border border-gray-300 px-5 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-[#3252DF] outline-none rounded-md">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>

              <select className="border border-gray-300 px-5 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-[#3252DF] outline-none rounded-md">
                <option>Refund</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>

              <button className="bg-[#3252DF] hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center justify-center shadow-sm">
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Booking List
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum lorem wujuhn
            </p>

            {/* Booking Card Grid */}
            {/* Booking Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, i) => (
          <div
      key={i}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <div className="relative">
        <img
          src="../Blueoriginfam.png"
          alt={room.name}
          className="w-full h-100 object-cover"
        />
        <span className="absolute top-0 right-0 bg-[#3252DF] text-white text-xs px-3 py-1 rounded">
          $200 per night
        </span>
      </div>

      <div className="p-4 space-y-2">
        <p className="font-semibold text-gray-800">{room.name}</p>
        <p className="text-gray-500 text-sm">Galle, Sri Lanka</p>
        <div className="text-sm text-gray-600">
          <p>{room.date}</p>
          <p>{room.nights}</p>
          <p>{room.desc}</p>
          <p>Initial Payment {room.initial}</p>
          <p>Total Payment {room.total}</p>
        </div>

        {/* Book Now Button */}
        <Link href="../paymentpage1">
        <Button title='Book Now' type='submit' />
        </Link>

        {/* Edit & Delete */}
        <div className="flex justify-end gap-2 pt-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Edit className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Trash2 className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
        </section>
      </main>
    </div>
  );
}
