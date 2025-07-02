const usermodel = require("../models/user_model");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user_model");

module.exports.authuser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  const  isBlacklisted=await UserModel.findOne({mesage:"unauthorized access"});
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await usermodel.findById(decoded._id);

    req.user = user;
  return  next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
