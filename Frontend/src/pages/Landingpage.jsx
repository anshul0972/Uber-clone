import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
   <div className='relative h-screen w-full overflow-hidden'>
  
  {/* Logo over image */}
  <img
    src="/Images/rydeon-logo.png"
    alt="RydeOn Logo"
    className="absolute top-6 left-6 w-16 z-20"
  />

  {/* Background */}
  <img src="/Images/Home_image.png" className="absolute inset-0 w-full h-screen object-cover z-0" />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

  {/* Content */}
  <div className="relative z-20 flex flex-col justify-end items-center h-full px-6 pb-10 text-white">
    <div className="w-full max-w-sm flex flex-col gap-4">
      <h1 className='text-2xl text-center font-bold'>Get Started with RydeOn</h1>
      <Link to="/login" className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-black font-bold shadow-lg hover:opacity-90 transition flex justify-between items-center px-5">
        <span>Continue</span>
        <FaArrowRightLong className="text-xl" />
      </Link>
    </div>
  </div>
</div>
  );
}

export default Home;
