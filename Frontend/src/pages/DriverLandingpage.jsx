import React from 'react';
import { Link } from 'react-router-dom';

const DriverLogin = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <img
    src="/Images/rydeon-logo.png"
    alt="RydeOn Logo"
    className="absolute top-6 left-6 w-16 z-20"
  />

      {/* Background Image */}
      <img
        src="/Images/Home_image.png"
        alt="Driver Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-white">

        <h1 className="text-3xl font-bold mb-8 text-center">Drive with RydeOn</h1>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

          {/* Existing Driver Login */}
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 text-gray-900 shadow-lg hover:bg-white/90 transition duration-500 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">Already a RydeOn driver?</h2>
            <p className="text-sm mb-4">Log in to manage your rides and earnings.</p>
            <Link
              to="/driverlogin"
              className="inline-block w-full text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-black py-2 rounded-lg font-bold hover:opacity-90 transition"
            >
              Driver Login
            </Link>
          </div>

          {/* New Driver Signup */}
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 text-gray-900 shadow-lg hover:bg-white/90 transition duration-500 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">New to RydeOn?</h2>
            <p className="text-sm mb-4">Start your journey and earn by driving today.</p>
            <Link
              to="/driversignup"
              className="inline-block w-full text-center bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition"
            >
              Become a RydeOn Driver
            </Link>
          </div>
        </div>

        {/* Footer (optional) */}
        <p className="mt-10 text-sm text-white/80">
          Powered by RydeOn Technologies
        </p>
      </div>
    </div>
  );
};

export default DriverLogin;
