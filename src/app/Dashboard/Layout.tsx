import HotelOwners from "../Components/HotelOwners";
import Sidebar from "../Components/SideBar";
import Topbar from "../Components/TopBar";
import { useState } from "react";


export default function DashboardLayout() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        
       

        <main className="flex-1 p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Admin Dashboard
          </h2>
          <p className="text-gray-600 mb-4">Welcome to LankaStay Admin Panel.</p>

         
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
}
