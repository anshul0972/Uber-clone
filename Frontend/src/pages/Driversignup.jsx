import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DriverSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

   const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      username:{
      firstName: firstName,
      lastName: lastName
      },
      email: email,
      password: password,
      
  })
  console.log(userData);
  
  setFirstName('');
  setLastName('');
  
  setEmail('');
  setPassword('');
  }

  return (
    <div className="relative h-full min-h-screen w-full">
      <img
        src="/Images/rydeon-logo.png"
        alt="RydeOn Logo"
        className="absolute top-2 left-5 w-11 z-20"
      />
      {/* Background Image */}
      <img
        src="/Images/Home_image.png"
        alt="Driver Signup Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute  inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 py-12 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Join RydeOn as a Driver
        </h1>

        <form 
         onSubmit={(e) => {
              submitHandler(e);
            }}
        className="w-full max-w-2xl  bg-white/80 backdrop-blur-md  rounded-2xl p-8 text-gray-900 shadow-lg space-y-6">
          {/* Personal Info */}
          <div className="">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                minLength={3}
              />
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Last Name"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                minLength={3}
              />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1 md:col-span-2"
                required
              />

              {/* Password Field */}
              <div className="relative">
                <input
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="relative">
            <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Color"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <input
                type="text"
                placeholder="Number Plate"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
                minLength={4}
              />
              <input
                type="number"
                placeholder="Capacity"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
                min={2}
              />
              <select
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="Auto-Rickshaw">Auto-Rickshaw</option>
                <option value="bus">Bus</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-black font-bold rounded-full shadow-lg hover:opacity-90 transition"
            >
              Sign Up as Driver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverSignup;
