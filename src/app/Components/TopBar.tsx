"use client";
import { Bell, Menu } from "lucide-react";

interface TopbarProps {
  toggleSidebar: () => void;
}

const TopBar = ({ toggleSidebar }: TopbarProps) => {
  return (
    <header className="flex justify-between items-center border-b border-gray-200 bg-white px-4 md:px-8 py-4 sticky top-0 z-30 shadow-sm">
      {/* Left: Menu + Greeting */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* hide greeting on extra-small screens to free space for profile on right */}
        <div className="hidden sm:block">
          <h2 className="text-lg text-gray-600">Hello, Salman</h2>
          <p className="text-xs text-gray-900">Have a nice day </p>
        </div>
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="/saleem.png"
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 object-cover"
          />

          {/* show profile details on small+ screens and shrink text on xs */}
          <div className="text-sm hidden xs:block sm:block md:block lg:block">
            <p className="font-medium text-gray-800">Salman Faris</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
          {/* Alternative for extremely small devices: keep a small name visible */}
          <div className="text-sm block xs:hidden sm:hidden md:hidden lg:hidden">
            <p className="font-medium text-gray-800 text-[12px]">Salman</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
