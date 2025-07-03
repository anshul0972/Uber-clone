const moongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");    

const driverSchema = new moongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,

        minlength: [5, "Email must be at least 5 characters"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    soketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
        type: String,
        required: true,
        },
        numberplate: {
            type: String,
            required: true,
            minlength: [4, "Vehicle number plate must be at least 4 characters"],
        },
        capacity: {
            type: Number,
            required: true,
            min:[2, "Vehicle capacity must be at least 2"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "bike", "Auto-Rickshaw", "bus"],
        },

    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        },
    }
})

driverSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
}

driverSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

driverSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const driverModel = moongoose.model("driver", driverSchema);

module.exports = driverModel;