const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user_controller");
const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be 6 char long"),
  ],
  userController.registerUser
);

router.post("/login", [
  body("email").isEmail().withMessage("invalid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Please enter a valid password"),
],
userController.loginUser
);
module.exports = router;
