import React, { useState, useRef, useEffect } from "react";
import TravellerDropdown from "./TravellerDropdown";
import LocationDropdown from "./LocationDropdown";

const FlightSearch = () => {
  const [from, setFrom] = useState({
    city: "Delhi",
    code: "DEL",
    airport: "Indira Gandhi International Airport",
  });
  const [to, setTo] = useState({
    city: "Bengaluru",
    code: "BLR",
    airport: "Kempegowda International Airport",
  });
  const [departureDate, setDepartureDate] = useState("2026-03-19");
  const [returnDate, setReturnDate] = useState("2026-03-20");
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [travelClass, setTravelClass] = useState("Economy/Premium Economy");
  const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'from' | 'to' | null

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setShowTravellerDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const formatDate = (date) => {
    if (!date) return { day: "--", monthYear: "--", weekday: "--" };
    const d = new Date(`${date}T00:00:00`);
    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "short" });
    const year = d.getFullYear().toString().slice(-2);
    const weekday = d.toLocaleString("en-US", { weekday: "long" });
    return { day, monthYear: `${month}'${year}`, weekday };
  };

  const formattedDeparture = formatDate(departureDate);
  const formattedReturn = formatDate(returnDate);

  const totalTravellers =
    travellers.adults + travellers.children + travellers.infants;

  const handleLocationSelect = (loc, type) => {
    if (type === "from") {
      setFrom({ city: loc.city, code: loc.code, airport: loc.airport });
    } else {
      setTo({ city: loc.city, code: loc.code, airport: loc.airport });
    }
    setActiveDropdown(null);
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-[-30px] z-10" ref={searchRef}>
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-0 flex items-stretch divide-x divide-gray-100 h-32">
        {/* From Section */}
        <div
          className="flex-1 p-4 cursor-pointer hover:bg-gray-50 transition-colors relative group min-w-[200px]"
          onClick={() => setActiveDropdown("from")}
        >
          <label className="text-gray-500 text-sm font-medium">From</label>
          <div className="mt-1">
            <h3 className="text-2xl font-bold text-black border-none focus:outline-none w-full bg-transparent">
              {from.city}
            </h3>
            <p className="text-sm text-gray-500 truncate">
              {from.code}, {from.airport}
            </p>
          </div>

          {activeDropdown === "from" && (
            <LocationDropdown
              type="from"
              onSelect={(loc) => handleLocationSelect(loc, "from")}
              onClose={() => setActiveDropdown(null)}
            />
          )}

          {/* Swap Button */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              swapLocations();
            }}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 rounded-full p-2 shadow-md hover:shadow-lg transition-all transform hover:scale-110 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M16 3l4 4-4 4"></path>
              <path d="M20 7H4"></path>
              <path d="M8 21l-4-4 4-4"></path>
              <path d="M4 17h16"></path>
            </svg>
          </div>
        </div>

        {/* To Section */}
        <div
          className="flex-1 py-4 px-6 cursor-pointer hover:bg-gray-50 transition-colors min-w-[200px] relative"
          onClick={() => setActiveDropdown("to")}
        >
          <label className="text-gray-500 text-sm font-medium">To</label>
          <div className="mt-1">
            <h3 className="text-2xl font-bold text-black border-none focus:outline-none w-full bg-transparent">
              {to.city}
            </h3>
            <p className="text-sm text-gray-500 truncate">
              {to.code}, {to.airport}
            </p>
          </div>

          {activeDropdown === "to" && (
            <LocationDropdown
              type="to"
              onSelect={(loc) => handleLocationSelect(loc, "to")}
              onClose={() => setActiveDropdown(null)}
            />
          )}
        </div>

        {/* Departure Section */}
        <div className="flex-1 p-4 cursor-pointer hover:bg-gray-50 transition-colors min-w-[150px] relative">
          <div className="flex items-center gap-1 relative z-10 pointer-events-none">
            <label className="text-gray-500 text-sm font-medium">
              Departure
            </label>
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="mt-1 relative z-10 pointer-events-none">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-black">
                {formattedDeparture.day}
              </span>
              <span className="text-lg font-medium text-black">
                {formattedDeparture.monthYear}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {formattedDeparture.weekday}
            </p>
          </div>
          <input
            type="date"
            value={departureDate}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
            onClick={(e) => {
              try {
                e.target.showPicker();
              } catch (err) {}
            }}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {/* Return Section */}
        <div className="flex-1 p-4 cursor-pointer hover:bg-gray-50 transition-colors relative min-w-[150px]">
          <div className="flex items-center gap-1 relative z-10">
            <label className="text-gray-500 text-sm font-medium">Return</label>
            <svg
              className="w-4 h-4 text-blue-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div
              className="ml-auto bg-gray-100 rounded-full p-0.5 hover:bg-gray-200 relative z-30"
              onClick={(e) => {
                e.stopPropagation();
                setReturnDate(null);
              }}
            ></div>
          </div>
          <div className="mt-1 relative z-10 pointer-events-none">
            {returnDate ? (
              <>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-black">
                    {formattedReturn.day}
                  </span>
                  <span className="text-lg font-medium text-black">
                    {formattedReturn.monthYear}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {formattedReturn.weekday}
                </p>
              </>
            ) : (
              <p className="text-lg text-gray-400 mt-2">
                Tap to add a return date for bigger discounts
              </p>
            )}
          </div>
          <input
            type="date"
            value={returnDate || ""}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
            onClick={(e) => {
              try {
                e.target.showPicker();
              } catch (err) {}
            }}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        {/* Travellers & Class Section */}
        <div
          className="flex-1 p-4 cursor-pointer hover:bg-gray-50 transition-colors relative min-w-[200px]"
          onClick={() => {
            setShowTravellerDropdown(!showTravellerDropdown);
            setActiveDropdown(null); // Close location dropdowns when opening traveller dropdown
          }}
        >
          <div className="flex items-center gap-1 text-blue-500">
            <label className="text-gray-500 text-sm font-medium">
              Travellers & Class
            </label>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="mt-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-black">
                {totalTravellers}
              </span>
              <span className="text-lg font-medium text-black">
                {totalTravellers > 1 ? "Travellers" : "Traveller"}
              </span>
            </div>
            <p className="text-sm text-gray-500 truncate">{travelClass}</p>
          </div>

          {showTravellerDropdown && (
            <div
              className="absolute right-0 top-full mt-2 w-[550px] z-50 transition-all font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              <TravellerDropdown
                travellers={travellers}
                setTravellers={setTravellers}
                travelClass={travelClass}
                setTravelClass={setTravelClass}
                onApply={() => setShowTravellerDropdown(false)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Search Button */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
        <button className="bg-linear-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-14 py-4 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest whitespace-nowrap">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
