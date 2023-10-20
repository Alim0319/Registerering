//import

/*const express = require("express");
const router = express.Router();
const path = require("path");
const employeeController = require("../controller/employeesController");

const data = {};
data.employees = require("../model/users.json");

router
  .route("/")
  .get(employeeController.getAIIEmployees)
  .post(employeeController.createNewEmployee)
  .put(employeeController.updateEmployee)
  /*.get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.fristname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })*/
/*.delete((req, res) => {
    res.json({
      id: req.body.id,
    });
  });

module.exports = router;*/

//imports

const express = require("express");
const router = express.Router();
const path = require("path");
const CustomersController = require("../controller/CustomersController");

const data = {};

data.Customer = require("../models/employees.json");

router
  .route("/")
  .get(CustomersController.getAllCustomers)
  .post(CustomersController.createNewCustomers)
  .put(CustomersController.updateCustomers)
  .delete(CustomersController.deleteCustomers);

router.route("/:id").get(CustomersController.getAllCustomers);

module.exports = router;
