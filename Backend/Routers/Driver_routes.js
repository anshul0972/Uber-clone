const express = require("express");
const router = express.Router();
const driverController = require("../controllers/Driver_conttroller");
const { body } = require("express-validator");
const authmiddleware = require("../middleware/auth_middleware"); 

router.post("/register", [
    body("fullname.firstname").notEmpty().withMessage("First name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").notEmpty().withMessage("Vehicle color is required"),
    body("vehicle.numberplate").isLength({ min: 4 }).withMessage("Vehicle number plate must be at least 4 characters long"), 
    body("vehicle.capacity").isInt({ min: 2 }).withMessage("Vehicle capacity must be at least 2"),
    body("vehicle.vehicleType").isIn(["car", "bike", "Auto-Rickshaw", "bus"]).withMessage("Vehicle type must be one of the following: car, bike, Auto-Rickshaw, bus"),
],
driverController.registerDriver
);

router.post("/login", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
], driverController.loginDriver);

router.get("/profile",authmiddleware.authDriver,driverController.getDriverProfile);

router.get("/logout", authmiddleware.authDriver, driverController.logoutDriver);
module.exports = router;
