import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [userData, setUserData] = useState({});

const submitHandler = (e) => {
  e.preventDefault()
  setUserData({
    email: email,
    password: password
})
console.log(userData);
setEmail('');
setPassword('');
}
  return (
    <div className="relative h-screen w-full">
<img
    src="/Images/rydeon-logo.png"
    alt="RydeOn Logo"
    className="absolute top-6 left-6 w-16 z-20"
  />
      {/* Background Image */}
      <img
        src="/Images/Home_image.png"
        alt="Login Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-white">

        {/* Card */}
        <div className="w-full max-w-md bg-white/90 rounded-2xl p-8 shadow-lg mt-5 text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

          {/* Login Form */}
          <form className="flex flex-col gap-4" onSubmit={(e)=>{
            submitHandler(e);
          }}>
            <input
            required
              value={email} 
              onChange={(e)=>{
               setEmail(e.target.value)
              }}
              type="email"
              placeholder="Email"
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
           <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
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
              className="bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-4 text-sm text-center">
            Not registered?{' '}
            <Link to="/signup" className="text-pink-600 font-semibold hover:underline">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-sm text-white text-center">
          Want to earn with us?{' '}
          <Link to="/driver" className="underline font-semibold text-yellow-400 hover:text-yellow-300">
            Become a RydeOn driver
          </Link>
        </div>
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

export default Login;
