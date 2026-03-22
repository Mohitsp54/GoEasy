import React, { useState } from "react";

const AddFlight = ({ onAddFlight }) => {
  const [flightData, setFlightData] = useState({
    airline: "",
    flightNumber: "",
    originCity: "",
    originCode: "",
    destinationCity: "",
    destinationCode: "",
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    price: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFlight(flightData);
    alert("Flight added successfully!");
    // Reset form
    setFlightData({
      airline: "",
      flightNumber: "",
      originCity: "",
      originCode: "",
      destinationCity: "",
      destinationCode: "",
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivalTime: "",
      price: "",
      duration: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Add New Flight
        </h2>
        <p className="text-gray-500 font-medium">
          Enter the details to add a new flight schedule to the system.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Airline Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-600 border-b pb-2">
              Flight Details
            </h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Airline Name
              </label>
              <input
                type="text"
                name="airline"
                placeholder="e.g. IndiGo"
                value={flightData.airline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Flight Number
              </label>
              <input
                type="text"
                name="flightNumber"
                placeholder="e.g. 6E-2134"
                value={flightData.flightNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                required
              />
            </div>
          </div>

          {/* Pricing & Duration */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-600 border-b pb-2">
              Pricing & Duration
            </h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Price (Base Fare)
              </label>
              <input
                type="number"
                name="price"
                placeholder="₹ e.g. 4500"
                value={flightData.price}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="e.g. 2h 30m"
                value={flightData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                required
              />
            </div>
          </div>
        </div>

        {/* Origin & Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-600 border-b pb-2">
              Origin
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="originCity"
                  placeholder="Delhi"
                  value={flightData.originCity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Code
                </label>
                <input
                  type="text"
                  name="originCode"
                  placeholder="DEL"
                  value={flightData.originCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Dep. Date
                </label>
                <input
                  type="date"
                  name="departureDate"
                  value={flightData.departureDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Dep. Time
                </label>
                <input
                  type="time"
                  name="departureTime"
                  value={flightData.departureTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-600 border-b pb-2">
              Destination
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="destinationCity"
                  placeholder="Mumbai"
                  value={flightData.destinationCity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Code
                </label>
                <input
                  type="text"
                  name="destinationCode"
                  placeholder="BOM"
                  value={flightData.destinationCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Arr. Date
                </label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={flightData.arrivalDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Arr. Time
                </label>
                <input
                  type="time"
                  name="arrivalTime"
                  value={flightData.arrivalTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl px-20 py-4 rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
          >
            Add Flight Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFlight;
