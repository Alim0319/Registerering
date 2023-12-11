//import React from "react";
/*import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/login", { email, Password })
      .then((response) => {
        console.log(response);
        if (response.data.message === "Login Success") {
          navigate("/home");
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.error("Feil under GET-forespørsel:", error);
      });
  };
  return (
    <div className="d-flex justify-content-center algin-items-center bg-secondary vh-100">
      <div className="bg-white p-3 roundet w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
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
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Paaword"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>Already Have an account</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default Login;*/

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Survey,
  SurveyButtonNext,
  SurveyButtonComplete,
} from "survey-react-ui";
import surveyJson from "./surveyJson";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleRegistration = () => {
    // Add your registration logic here using 'email' and 'password'
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirect to the dashboard or another page after successful registration
    navigate("/dashboard");
  };

  return (
    <div>
      <Survey
        json={surveyJson}
        onComplete={handleRegistration}
        css={{ navigationButton: "btn btn-success w-100 rounded-0" }}
      >
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            style={{ cursor: "pointer" }}
            onClick={togglePasswordVisibility}
          />
        </div>
        <SurveyButtonNext />
        <SurveyButtonComplete text="Register" />
      </Survey>
      <p>Already have an account?</p>
      <Link
        to="/login"
        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
      >
        Login
      </Link>
    </div>
  );
}

export default Login;
