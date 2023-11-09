//import { useState } from "react";
/*import "./style/main.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { connect } from 'react-redux';
//import { registerUser } from './redux/userActions';

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

  useEffect(() => {
    // Hent landkoder fra en JSON-fil eller et API (erstatt med din egen kilde)
    axios
      .get("http://example.com/countryCodes") // Endre til din faktiske kilde
      .then((response) => {
        setCountryCodes(response.data);
      })
      .catch((error) => {
        console.error("Feil under henting av landkoder:", error);
      });
  }, []); // Denne effekten skal kjøre en gang ved innlasting

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
      .post("http://localhost:3500/register", data) // Endre URL til ditt faktiske server-endepunkt
      .then((response) => {
        if (response.status === 201) {
          // Registreringen var vellykket, naviger brukeren til innloggingssiden
          navigate("/login");
        } else {
          // Håndter eventuelle feil i henhold til serverresponsen
          console.log("Registrering mislyktes");
        }
      })
      .catch((error) => {
        console.error("Feil under POST-forespørsel:", error);
      });
  };

  /*function Signup(props) {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    address: '',
    country: '',
    city: '',
    postCode: '',
    selectedCountryCode: '',
    phoneNumber: `${selectedCountryCode} ${phoneNumber}`,
  });

  const [showPassword] = useState(false);

  useEffect(() => {
    fetch("./src/countryCodes.json")
      .then((response) => response.json())
      .then((data) => selectedCountryCode(data))
      .catch((error) => console.error("Error loading country codes:", error));
  }, []); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Email and confirm email do not match.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    // Opprett et brukerobjekt med dataene fra skjemaet
    const userData = { ...formData };

    // Kall Redux-handlingen for å registrere brukeren
    props.registerUser(userData);
  };*/

/*return (
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
              value={firstName}
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
              value={middleName}
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
              value={lastName}
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
              value={email}
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
              value={confirmEmail}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="checkbox"
              onChange={togglePasswordVisibility}
              checked={showPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="selectedCountryCode" className="form-label">
              <strong>Country Code</strong>
            </label>
            <select
              name="selectedCountryCode"
              className="form-control rounded-0"
              value={selectedCountryCode}
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
//const mapStateToProps = (state) => ({
// user: state.user,
//});

//const mapDispatchToProps = {
// registerUser, // Sjekk om dette navnet samsvarer med det eksporterte navnet fra userActions.js
//};

export default Signup;
// SignUp.js

/*import  { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './redux/actions/userActions'; // Du må erstatte 'registerUser' med din faktiske Redux-handlingskreatør.

function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    // Kall Redux-handlingen for å registrere brukeren
    props.registerUser(userData);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  registerUser, // Dette må samsvare med den faktiske importerte Redux-handlingen
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);*/

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { connect } from 'react-redux';
//import { registerUser } from './redux/userActions';

function Signup() {
  const [firstName, setFirstName] = useState("");
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
  }, []);

  useEffect(() => {
    axios
      .get("http://example.com/countryCodes")
      .then((response) => {
        setCountryCodes(response.data);
      })
      .catch((error) => {
        console.error("Feil under henting av landkoder:", error);
      });
  }, []);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      alert("Email and confirm email do not match.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }

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
      phoneNumber: `${selectedCountryCode} ${phoneNumber}`,
    };

    axios
      .post("http://localhost:3500/register", data)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        } else {
          console.log("Registrering mislyktes");
        }
      })
      .catch((error) => {
        console.error("Feil under POST-forespørsel:", error);
      });
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
              value={firstName}
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
              value={middleName}
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
              value={lastName}
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
              value={email}
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
              value={confirmEmail}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="checkbox"
              onChange={togglePasswordVisibility}
              checked={showPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="selectedCountryCode" className="form-label">
              <strong>Country Code</strong>
            </label>
            <select
              name="selectedCountryCode"
              className="form-control rounded-0"
              value={selectedCountryCode}
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
