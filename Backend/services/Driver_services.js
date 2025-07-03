const driverModel = require("../models/Driver_model");


module.exports.createDriver = async ({
firstname,lastname,email,password,color,numberplate,capacity,vehicleType
})=>{
    if(!firstname  || !email || !password || !color || !numberplate || !capacity || !vehicleType){
        throw new Error("All fields are required");
    }
    const driver = await driverModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle: {
            color,
            numberplate,
            capacity,
            vehicleType
        }
    })
    return driver;

}
