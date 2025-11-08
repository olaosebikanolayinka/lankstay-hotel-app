"use client";

import { Search, Filter, LayoutGrid, Table, Printer, Trash2, FileText, Edit, Plus } from "lucide-react";
import { useState } from "react";
import Sidebar from "../Components/SideBar";
import Topbar from "../Components/TopBar";

export default function BookingsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const rooms = [
    {
      name: "Blue Origin Fams",
      date: "June 9, 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />

        <section className="flex-1 p-6 space-y-6">
          {/* Page Heading */}
          <div>
            <h2 className="text-2xl font-semibold text-[#3252DF]">Hotel Owner</h2>
            
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
            {/* Search Box */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documents"
                className="pl-9 pr-12 py-3 w-full bg-white rounded-lg text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-[#3252DF] outline-none"
              />
              
            </div>

            {/* Sort By */}
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
            <div className="flex items-center gap-3  p-2">
              <button className="p-2 hover:bg-gray-100 rounded border-2 border-gray-200 px-4 py-4">
                <FileText className="w-4 h-4 text-blue-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded border-2 border-gray-200 px-4 py-4">
                <LayoutGrid className="w-4 h-4 text-blue-600 " />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded border-2 border-gray-200 px-4 py-4">
                <Table className="w-4 h-4 text-blue-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded border-2 border-gray-200 px-4 py-4">
                <Printer className="w-4 h-4 text-blue-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded border-2 border-gray-200 px-4 py-4">
                <Trash2 className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* Filters + Add Button */}
            <div className="flex items-center gap-4">
              <select className="border border-gray-300  px-7 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-[#3252DF] outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>

              <select className="border border-gray-300  px-7 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-[#3252DF] outline-none">
                <option>Booking</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>

              <button className="bg-[#3252DF] hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center justify-center">
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* List Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              List of Hotel Rooms
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum lorem wujuhn
            </p>

            <table className="min-w-full text-sm text-left">
              <tbody>
                {rooms.map((room, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-none hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {room.name}
                        </p>
                        <p className="text-gray-500 text-xs">{room.date}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {room.desc}
                    </td>
                    <td className="px-4 py-3 flex justify-end gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
