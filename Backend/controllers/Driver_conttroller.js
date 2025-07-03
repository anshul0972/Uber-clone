const driverModel = require("../models/Driver_model");
const driverService = require("../services/Driver_services");
const {validationResult} = require("express-validator");



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