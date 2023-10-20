const express = require("express");
const router = express.Router();

const CustomersController = require("../controller/CustomersController");
router.post("/", CustomersController.createNewCustomers);

module.exports = router;
/*const express = require("express");
const router = express.Router();

const registerController = require("../controller/registerController");
router.post("/", registerController.handleLogin);

module.exports = router;*/
