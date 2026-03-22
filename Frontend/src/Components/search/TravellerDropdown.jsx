import React from "react";

const TravellerDropdown = ({
  travellers,
  setTravellers,
  travelClass,
  setTravelClass,
  onApply,
}) => {
  const adultOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, ">9"];
  const classes = [
    "Economy/Premium Economy",
    "Premium Economy",
    "Business",
    "First Class",
  ];

  const renderSection = (title, subtitle, options, currentVal, type) => (
    <div className="mb-6">
      <div className="flex flex-col mb-2">
        <span className="text-gray-900 font-bold text-xs uppercase tracking-wider">
          {title}
        </span>
        <span className="text-gray-400 text-[10px]">{subtitle}</span>
      </div>
      <div className="flex border border-gray-200 rounded-md overflow-hidden bg-white w-fit shadow-sm">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setTravellers({ ...travellers, [type]: opt })}
            className={`px-4 py-2 text-sm transition-all border-r border-gray-100 last:border-r-0 ${
              currentVal === opt
                ? "bg-red-600 text-white font-bold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 flex flex-col min-w-[550px]">
      <div className="flex gap-12">
        {renderSection(
          "ADULTS (12y +)",
          "on the day of travel",
          adultOptions,
          travellers.adults,
          "adults",
        )}
      </div>

      <div className="mb-8">
        <span className="text-gray-900 font-bold text-xs uppercase tracking-wider block mb-3">
          CHOOSE TRAVEL CLASS
        </span>
        <div className="flex border border-gray-200 rounded-md overflow-hidden bg-white w-fit shadow-sm">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setTravelClass(cls)}
              className={`px-4 py-2 text-sm transition-all border-r border-gray-100 last:border-r-0 ${
                travelClass === cls
                  ? "bg-red-600 text-white font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onApply}
          className="bg-linear-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-12 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all transform active:scale-95 uppercase tracking-wide"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default TravellerDropdown;
