import React from "react";

const FlightList = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-white/20 shadow-xl text-center">
        <div className="bg-gray-50 inline-flex p-4 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800">No Flights Added Yet</h3>
        <p className="text-gray-500 mt-2">
          New flights will appear here once you add them above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
        Added Flight Schedules ({flights.length})
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Airline & Number */}
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-100 transition-colors">
                  <span className="text-2xl font-bold text-red-600">
                    {flight.airline.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 leading-tight">
                    {flight.airline}
                  </h4>
                  <p className="text-sm font-semibold text-gray-500">
                    {flight.flightNumber}
                  </p>
                </div>
              </div>

              {/* Route */}
              <div className="flex-1 flex items-center justify-center gap-8 md:px-12">
                <div className="text-center">
                  <h5 className="text-xl font-extrabold text-gray-900">
                    {flight.originCode}
                  </h5>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    {flight.originCity}
                  </p>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    {flight.departureTime}
                  </p>
                </div>

                <div className="flex flex-col items-center flex-1 max-w-[120px]">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {flight.duration}
                  </p>
                  <div className="w-full h-[2px] bg-gray-200 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-green-600 uppercase mt-1">
                    Non-stop
                  </p>
                </div>

                <div className="text-center">
                  <h5 className="text-xl font-extrabold text-gray-900">
                    {flight.destinationCode}
                  </h5>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    {flight.destinationCity}
                  </p>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    {flight.arrivalTime}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center gap-6 min-w-[150px] justify-between md:justify-end">
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    Price
                  </p>
                  <h4 className="text-2xl font-black text-gray-900">
                    ₹{flight.price}
                  </h4>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
