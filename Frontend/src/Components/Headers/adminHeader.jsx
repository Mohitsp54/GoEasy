import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const adminHeader = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  return (
    <header className="bg-red-600 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">GoEasy</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="ml-4">
              <span className="text-xl font-bold text-white">
                Admin Dashboard
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default adminHeader;
