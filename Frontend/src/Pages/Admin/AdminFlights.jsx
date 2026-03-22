import React, { useState } from "react";
import AdminHeader from "../../Components/Headers/adminHeader";
import AddFlight from "../../Components/search/AdminSearch/AddFlight";
import FlightList from "../../Components/search/AdminSearch/FlightList";

const AdminFlights = () => {
  const [flights, setFlights] = useState([]);

  const handleAddFlight = (newFlight) => {
    setFlights((prev) => [...prev, newFlight]);
  };

  return (
    <div
      className="h-screen flex flex-col font-sans bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/images/banner-image.jpg')" }}
    >
      <AdminHeader />

      <div className="flex-1 overflow-y-auto scrollbar-hide py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          <AddFlight onAddFlight={handleAddFlight} />
          <FlightList flights={flights} />
        </div>
      </div>
    </div>
  );
};

export default AdminFlights;
