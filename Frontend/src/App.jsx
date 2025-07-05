import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import  Login from './pages/Login';
import Usersignup from './pages/Usersignup';
import DriversLandingpage from './pages/DriverLandingpage';
import DriverLogin from './pages/DriverLogin';
import Driversignup from './pages/Driversignup';

const App = () => {
  return (
    <div >
     <Routes>
    <Route path="/" element={<Landingpage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Usersignup/>} />
    <Route path="/driver" element={<DriversLandingpage/>} />
    <Route path="/driversignup" element={<Driversignup/>} />
    <Route path="/driverlogin" element={<DriverLogin/>} />
    {/* <Route path="/driverhome" element={<DriverHome/>} /> */}
     </Routes>
    </div>
  )
}

export default App
