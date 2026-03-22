import React from "react";
import Header from "../../Components/Headers/header";
import FlightSearch from "../../Components/search/FlightSearch";

const flights = () => {
  return (
    <div>
      <Header />

      <div className="pt-10 pb-10 px-4">
        <FlightSearch />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Reservation for search results or other content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 min-h-[400px] border border-white/20 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Available Flights
          </h2>
          <p className="text-gray-600 italic text-center py-20 bg-gray-50/50 rounded-lg border border-dashed border-gray-300">
            Search for your destination to see available flights...
          </p>
        </div>
      </div>
    </div>
  );
};

export default flights;
