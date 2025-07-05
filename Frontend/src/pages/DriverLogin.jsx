import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const DriverLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [driverData, setDriverData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setDriverData({
      email: email,
      password: password,
    });
    console.log(driverData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/Images/Home_image.png"
        alt="Driver Login Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 py-12 text-white">
        {/* Logo */}
        <div >
      <img
    src="/Images/rydeon-logo.png"
    alt="RydeOn Logo"
    className="absolute top-6 left-6 w-16 z-20"
  />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center">Driver Login</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="relative">
              <input
                
                value={email}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Not a RydeOn driver yet?{" "}
            <Link
              to="/driversignup"
              className="text-pink-600 font-semibold hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverLogin;
