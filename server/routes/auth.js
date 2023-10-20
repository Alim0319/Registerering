const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

//router.post("/", authController.handleLogin);
router.post("/login", authController.handleLogin);

// Registreringsrute
//router.post("/register", authController.register);
module.exports = router;
