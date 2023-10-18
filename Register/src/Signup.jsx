//import { useState } from "react";
import "./style/main.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCodes, setCountryCodes] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch("./src/countryCodes.json")
      .then((response) => response.json())
      .then((data) => setCountryCodes(data))
      .catch((error) => console.error("Error loading country codes:", error));
  }, []); // The empty array as the second argument ensures this effect runs only once

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and confirm email match
    if (email !== confirmEmail) {
      alert("Email and confirm email do not match.");
      return;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }
    // Create a data object to send to the server
    const data = {
      firstName,
      middleName,
      lastName,
      email,
      password,
      address,
      country,
      city,
      postCode,
      phoneNumber: `${selectedCountryCode} ${phoneNumber}`, //
    };

    axios
      .post("http://localhost:3500/register", data)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex ">
      <div className="bg-white">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fristName" className="form-label">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter frist name"
              autoComplete="off"
              name="fristName"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="middleName" className="form-label">
              <strong>Middle Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter middle name"
              autoComplete="off"
              name="middleName"
              className="form-control rounded-0"
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              autoComplete="off"
              name="lastName"
              className="form-control rounded-0"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmEmail" className="form-label">
              <strong>Confirm Email</strong>
            </label>
            <input
              type="text"
              placeholder="Confirm Email"
              autoComplete="off"
              name="confirmEmail"
              className="form-control rounded-0"
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`password-icon ${showPassword ? "visible" : "hidden"}`}
            >
              {showPassword ? "Hide password" : "Show password"}
            </i>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              name="confirmPassword"
              className="form-control rounded-0"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="selectedCountryCode" className="form-label">
              <strong>Country Code</strong>
            </label>
            <select
              name="selectedCountryCode"
              className="form-control rounded-0"
              onChange={(e) => setSelectedCountryCode(e.target.value)}
            >
              <option value="">Select Country Code</option>
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.emoji} {country.dial_code} ({country.code})
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              <strong>Phone Number</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              autoComplete="off"
              name="phoneNumber"
              className="form-control rounded-0"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              autoComplete="off"
              name="address"
              className="form-control rounded-0"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              <strong>Country</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Country"
              autoComplete="off"
              name="country"
              className="form-control rounded-0"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              <strong>City</strong>
            </label>
            <input
              type="text"
              placeholder="Enter City"
              autoComplete="off"
              name="city"
              className="form-control rounded-0"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postCode" className="form-label">
              <strong>Post Code</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Post Code"
              autoComplete="off"
              name="postCode"
              className="form-control rounded-0"
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
export default Signup;
