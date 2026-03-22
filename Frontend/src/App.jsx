import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Pages/Users/login";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/Users/UserDashboard";
import Register from "./Pages/Users/Register";
import AdminRegister from "./Pages/Admin/AdminRegister";
import Flights from "./Pages/Users/flights";
import Hotels from "./Pages/Users/hotels";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Default redirect to login for root path */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />

          {/* Protected Routes for Admin */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for User */}
          <Route
            path="/user/*"
            element={
              <ProtectedRoute allowedRole="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/flights"
            element={
              <ProtectedRoute allowedRole="user">
                <Flights />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute allowedRole="user">
                <Hotels />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route mapping to home or login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
