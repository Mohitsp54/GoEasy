import React from "react";

const DiscountBanners = ({ activeTab }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Conditionally Render Flight Offers */}
      {activeTab === "flights" && (
        <>
          <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100 flex flex-col justify-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[140px]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-50 -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
            <div className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wider">
              Limited Time Offer
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight">
              Up to 20% OFF Domestic Flights
            </h3>
            <p className="text-sm text-gray-600 mb-0 font-medium">
              Use code{" "}
              <span className="font-bold text-red-600 bg-white px-2 py-0.5 rounded shadow-xs">
                FLY20
              </span>{" "}
              at checkout.
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 flex flex-col justify-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[140px]">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50 -mr-16 -mb-16 group-hover:scale-110 transition-transform"></div>
            <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wider">
              Student Special
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight">
              Extra Baggage + Flat ₹500 OFF
            </h3>
            <p className="text-sm text-gray-600 mb-0 font-medium">
              Valid on all major airlines with student ID.
            </p>
          </div>
        </>
      )}

      {/* Conditionally Render Hotel Offers */}
      {activeTab === "hotels" && (
        <>
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 flex flex-col justify-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[140px]">
            <div className="absolute top-0 left-0 w-24 h-24 bg-green-100 rounded-full blur-2xl opacity-50 -ml-10 -mt-10 group-hover:scale-110 transition-transform"></div>
            <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wider">
              Premium Stays
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight">
              Get a Free Room Upgrade!
            </h3>
            <p className="text-sm text-gray-600 mb-0 font-medium">
              Book any 4-star+ property using{" "}
              <span className="font-bold text-green-600 bg-white px-2 py-0.5 rounded shadow-xs">
                LUXURY
              </span>
              .
            </p>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 flex flex-col justify-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[140px]">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-50 -mr-16 -mb-16 group-hover:scale-110 transition-transform"></div>
            <div className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wider">
              Weekend Getaway
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight">
              Flat 15% OFF on Villas
            </h3>
            <p className="text-sm text-gray-600 mb-0 font-medium">
              Perfect for your next family holiday.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DiscountBanners;
