import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../Components/Headers/header";
import DiscountBanners from "../../Components/discountBanners/DiscountBanners";
import PageBanners from "../../Components/pageBanners/PageBanners";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("flights");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (activeTab === "flights") {
      navigate("/flights");
    } else {
      navigate("/hotels");
    }
  };

  return (
    <div
      className="min-h-screen font-sans bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/banner-image.jpg')" }}
    >
      <Header />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        {/* Upper Small Box - Tabs */}
        <div className="bg-white rounded-xl shadow-lg flex justify-around w-11/12 md:w-3/4 mx-auto px-2 sm:px-4 md:px-8 py-3 md:py-4 mb-4">
          <button
            onClick={() => setActiveTab("flights")}
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 font-bold pb-1 flex-1 transition-all ${
              activeTab === "flights"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            <img
              src="/images/airplane.png"
              alt="Flight"
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
            <span className="text-xs md:text-sm text-center">
              Flight Booking
            </span>
          </button>
          <button
            onClick={() => setActiveTab("hotels")}
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 font-bold pb-1 flex-1 transition-all ${
              activeTab === "hotels"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            <img
              src="/images/hotel.png"
              alt="Hotel"
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
            <span className="text-xs md:text-sm text-center">
              Hotel Booking
            </span>
          </button>
        </div>

        {/* Lower Bigger Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[300px]">
          <div className="flex flex-col lg:flex-row h-full gap-8">
            {/* Left Part */}
            <div className="flex-1 rounded-xl p-2 md:p-6">
              <PageBanners activeTab={activeTab} onSearch={handleSearch} />
            </div>

            {/* Right Part */}
            <div className="lg:w-1/3 flex flex-col justify-center gap-4">
              <DiscountBanners activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
