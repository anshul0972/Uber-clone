import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UserSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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

      {/* Background Image */}
      <img
        src="/Images/Home_image.png"
        alt="User Signup Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 py-12 text-white">
        
        {/* Logo */}
        <img src="/Images/rydeon-logo.png" alt="RydeOn Logo" className="w-28 mb-8" />

        {/* Signup Card */}
        <form className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-8 text-gray-900 shadow-lg space-y-5"
        onSubmit={(e) => {
              submitHandler(e);
            }}>
          <h2 className="text-3xl font-bold text-center mb-4">Create Account</h2>

          <div className="flex flex-col gap-4">
            {/* First Name */}
            <input
          
              value={firstName} 
              onChange={(e)=>{
               setFirstName(e.target.value)
              }}
              type="text"
              placeholder="First Name"
              required
              minLength={3}
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Last Name */}
            <input
             
              value={lastName} 
              onChange={(e)=>{
               setLastName(e.target.value)
              }}
              type="text"
              placeholder="Last Name"
              minLength={3}
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Email */}
            <input
             required
              value={email} 
              onChange={(e)=>{
               setEmail(e.target.value)
              }}
              type="email"
              placeholder="Email"
    
              minLength={5}
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Password with toggle */}
            <div className="relative">
              <input
               required
              value={password} 
              onChange={(e)=>{
               setPassword(e.target.value)
              }}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Already have an account */}
          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-pink-600 font-semibold hover:underline">
              Log in here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <div className="mt-10 text-xs text-white/70 text-center px-6">
          <p className="mb-1">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="underline">Terms of Service</Link> and{' '}
            <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </p>
          <p className="mt-1">Powered by <span className="font-semibold text-white">RydeOn Technologies</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
