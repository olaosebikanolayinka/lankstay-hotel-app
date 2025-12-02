"use client";

import {
  Home,
  Users,
  Hotel,
  Book,
  RefreshCw,
  MessageCircle,
  HelpCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: Home, href: "/" }, // go back to home link
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Users", icon: Users, href: "/users" },
    { name: "Hotel Owners", icon: Hotel, href: "/hotel-owners" },
    { name: "Booking Details", icon: Book, href: "/bookingdocument" },
    { name: "Refund", icon: RefreshCw, href: "/refund" },
    { name: "Message", icon: MessageCircle, href: "/messages" },
    { name: "Help", icon: HelpCircle, href: "/help" },
    { name: "Setting", icon: Settings, href: "/settings" },
    { name: "Logout", icon: LogOut, href: "/" }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 w-64 bg-white border-r border-gray-200 p-6 flex flex-col z-40 transform transition-transform duration-300
        h-full md:h-full lg:h-screen 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo + Close Button */}
        <div className="flex justify-between items-center mb-8 h-10">
          <Link href="../homepage">
          <h1 className="text-2xl font-semibold text-[#3252DF]">
            Lanka<span className="text-[#152C5B]">Stay</span>
          </h1>
          </Link>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-2 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition relative
                ${
                  isActive
                    ? "bg-blue-50 text-[#3252DF] font-medium border-l-4 border-[#3252DF]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive ? "text-[#3252DF]" : "text-gray-500"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
