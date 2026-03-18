import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../Components/Headers/adminHeader";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  return (
    <>
      <AdminHeader />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 text-lg">
              Welcome back,{" "}
              <span className="font-semibold text-gray-800">{user?.email}</span>
            </p>
            <div className="bg-red-50 p-4 rounded-md border border-red-100">
              <h2 className="text-xl font-semibold text-red-800 mb-2">
                System Status
              </h2>
              <p className="text-red-600">
                All systems operational. You have full administrative
                privileges.
              </p>
            </div>
            {/* Admin features would go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
