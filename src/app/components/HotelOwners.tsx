"use client";
import { Edit, Trash, ChevronLeft, ChevronRight } from "lucide-react";

const HotelOwners = () => {
  const owners = [
    { name: "David Wagner", email: "davidwagner@gmail.com", date: "24 Jun, 2023", status: "Super Admin" },
    { name: "Ina Hogan", email: "inahogan22@gmail.com", date: "14 Aug, 2023", status: "Owner" },
    { name: "Devin Harmon", email: "devin@gmail.com", date: "11 Dec, 2023", status: "Owner" },
    { name: "Lena Page", email: "lenapage@gmail.com", date: "8 Oct, 2023", status: "Pending" },
    { name: "Lulu Horton", email: "luluhorton22@gmail.com", date: "13 Jan, 2023", status: "Owner" },
    { name: "Victoria Perez", email: "victoria@gmail.com", date: "21 Aug, 2023", status: "Owner" },
    { name: "Cora Medina", email: "coramedina@gmail.com", date: "21 July, 2023", status: "Pending" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Super Admin":
        return "bg-blue-600 text-white";
      case "Owner":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        List Hotel Owners
      </h3>

      {/* Table */}
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Create Date</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {owners.map((owner, i) => (
            <tr key={i} className="border-b last:border-none hover:bg-gray-50 transition">
              {/* Name + Email + Status */}
              <td className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-800">{owner.name}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(owner.status)}`}
                  >
                    {owner.status}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-1">{owner.email}</p>
              </td>

              <td className="px-6 py-4 text-gray-700">{owner.date}</td>
              <td className="px-6 py-4 text-gray-700">Lorem ipsum</td>

              {/* Actions */}
              <td className="px-6 py-4 flex justify-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Trash className="w-4 h-4 text-gray-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Items per page:</span>
          <select className="  px-2 py-1 focus:ring-1 focus:ring-blue-400 outline-none">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <span>1–4 of 10</span>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOwners;
