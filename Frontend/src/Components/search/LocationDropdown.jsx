import React, { useState } from "react";
import locationsData from "./locations.json";

const LocationDropdown = ({ type, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locationsData.filter(
    (loc) =>
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.airport.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="absolute top-0 left-0 w-[400px] bg-white rounded-lg shadow-2xl z-50 border border-gray-200 overflow-hidden transform transition-all duration-200 animate-in fade-in slide-in-from-top-2">
      {/* Header Search-like Field */}
      <div className="p-3 border-b border-gray-100 flex items-center gap-3 bg-white">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder={type === "from" ? "From" : "To"}
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="bg-transparent border-none focus:outline-none text-gray-700 font-medium w-full"
        />
      </div>

      {/* List of Locations */}
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((loc, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(loc);
              }}
            >
              {/* Airport Code Box */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-gray-600 font-bold text-xs tracking-wider">
                  {loc.code}
                </span>
              </div>

              {/* City and Airport Info */}
              <div className="flex flex-col min-w-0">
                <span className="text-gray-900 font-bold text-sm truncate">
                  {loc.city}
                </span>
                <span className="text-gray-500 text-[11px] truncate font-medium">
                  {loc.airport}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-400 text-sm">
            No locations found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
