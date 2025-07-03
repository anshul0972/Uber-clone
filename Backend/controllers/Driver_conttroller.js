const driverModel = require("../models/Driver_model");
const driverService = require("../services/Driver_services");
const {validationResult} = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");



module.exports.registerDriver = async (req, res,next) => {

    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;
  
    const isdriverExists = await driverModel.findOne({email});
    if (isdriverExists) {
        return res.status(400).json({message: "Driver already exists with this email"});
    }

    const hashedPassword = await driverModel.hashPassword(password);

    const driver=await driverService.createDriver({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        numberplate: vehicle.numberplate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
const token= driver.generateAuthToken();

res.status(201).json({token, driver});

}

module.exports.loginDriver = async (req, res,next) => {
 const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const driver = await driverModel.findOne({ email }).select("+password");
    if (!driver) {
        return res.status(400).json({ message: "Invalid email and password" });
    }

    const ismatch = await driver.comparePassword(password);
    if (!ismatch) {
        return res.status(400).json({ message: "Invalid email and password" });
    }

    const token = driver.generateAuthToken();
  
    res.cookie("token",token)
    res.status(200).json({token,driver})

}

module.exports.getDriverProfile = async (req, res,next) => {
    const driver = req.driver;
    if (!driver) {
        return res.status(404).json({ message: "Driver not found" });
    }
    res.status(200).json({ driver });
}

module.exports.logoutDriver = async (req, res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  

    await blacklistTokenModel.create({ token });

    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
}