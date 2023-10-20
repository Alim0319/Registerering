const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  fristname: String,
  middleName: String,
  lastName: String,
  email: String,
  confirmEmail: String,
  password: String,
  confirmPassword: String,
  address: String,
  country: String,
  city: String,
  postCode: Number,
  selectedCountryCode: String,
  phoneNumber: Number,
  countryCodes: String,
});
const CustomerModel = mongoose.model("Customer", CustomerSchema);
module.exports = CustomerModel;
