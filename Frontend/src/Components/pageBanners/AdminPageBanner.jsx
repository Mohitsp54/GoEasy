import React from "react";

const AdminPageBanner = ({ activeTab, onManage }) => {
  const content = {
    flights: {
      heading: "Manage Flight Inventory",
      subtext: "Add, edit, or remove flight schedules and adjust pricing for optimal revenue.",
    },
    hotels: {
      heading: "Monitor Hotel Bookings",
      subtext: "View active reservations and manage room availability for partnered properties.",
    },
  };

  const activeContent = content[activeTab] || content.flights;

  return (
    <div className="flex flex-col h-full justify-between p-2">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {activeContent.heading}
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-md">
          {activeContent.subtext}
        </p>
      </div>

      <div className="mt-8">
        <button
          onClick={onManage}
          className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold text-xl px-12 py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95 outline-none focus:ring-4 focus:ring-red-500/50 uppercase tracking-widest"
        >
          Manage
        </button>
      </div>
    </div>
  );
};

export default AdminPageBanner;
