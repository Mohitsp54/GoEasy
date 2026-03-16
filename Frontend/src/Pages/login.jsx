import React from "react";

const login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl transition-all md:max-w-lg lg:max-w-md hover:shadow-red-500/5 duration-300">
        {/* Header Section */}
        <div className="bg-red-600 px-8 py-10 text-center relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-500 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-red-700 rounded-full opacity-50 blur-xl"></div>

          <h1 className="relative z-10 text-4xl font-extrabold tracking-tight text-white mb-2">
            GoEasy
          </h1>
          <p className="relative z-10 text-red-100 text-sm font-medium tracking-wide">
            Welcome back. Please sign in to continue.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10 space-y-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 hover:border-gray-300"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 hover:border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-red-600 px-4 py-3.5 text-base font-bold tracking-wide text-white shadow-lg shadow-red-500/30 transition-all hover:bg-red-700 hover:shadow-red-500/40 active:scale-[0.98] outline-none focus:ring-4 focus:ring-red-500/50"
            >
              Sign In
            </button>
          </form>

          <div className="relative flex items-center justify-center mt-8">
            <span className="absolute bg-white px-4 text-sm text-gray-500">
              or
            </span>
            <div className="w-full h-px bg-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6 font-medium">
            New to GoEasy?{" "}
            <a
              href="#"
              className="font-bold text-red-600 hover:text-red-700 hover:underline transition-all"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
