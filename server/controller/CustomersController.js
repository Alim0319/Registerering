/*const data = {};

data.employees = require("../model/employees.json");

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
  res.json({
    firstanme: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const updateEmployee = (req, res) => {
  res.json({
    firstanme: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const deleteEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

const getEmployee = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
*/

const data = {};

data.Customers = require("../models/employees.json");

const getAllCustomers = (req, res) => {
  res.json(data.employees);
};

const createNewCustomers = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const updateCustomers = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const deleteCustomers = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

const getCustomers = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getAllCustomers,
  createNewCustomers,
  updateCustomers,
  deleteCustomers,
  getCustomers,
};
