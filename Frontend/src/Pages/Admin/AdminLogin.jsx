import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { loginAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const result = await loginAdmin(email, password);

    if (result.success) {
      navigate("/admin");
    } else {
      setError(result.message || "Failed to login");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-2xl transition-all md:max-w-lg lg:max-w-md border border-gray-700">
        {/* Header Section */}
        <div className="bg-red-900 px-8 py-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-800 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-red-950 rounded-full opacity-30 blur-xl"></div>

          <h1 className="relative z-10 text-4xl font-extrabold tracking-tight text-white mb-2">
            Administrator
          </h1>
          <p className="relative z-10 text-red-200 text-sm font-medium tracking-wide">
            Secure Access Portal.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10 space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@goeasy.com"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-600 bg-gray-700 text-white outline-none transition-all placeholder:text-gray-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-600 bg-gray-700 text-white outline-none transition-all placeholder:text-gray-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-xl bg-red-600 px-4 py-3.5 text-base font-bold tracking-wide text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-700 active:scale-[0.98] outline-none disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Authenticating..." : "Secure Login"}
            </button>
          </form>

          <div className="text-center mt-6 space-y-3">
            <Link
              to="/admin-register"
              className="block text-gray-400 hover:text-white text-sm transition-colors"
            >
              Need access? Register as Admin
            </Link>
            <button
              onClick={() => navigate("/login")}
              className="block w-full text-gray-500 hover:text-gray-300 text-sm transition-colors mt-2"
            >
              Return to User Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
