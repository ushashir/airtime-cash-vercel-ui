import { useState } from "react";
import React from "react";
import "./style.scss";
import logo from "../../assets/icons/logo.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePhone = (e) => {
    setNumber(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirm = (e) => {
    setPassconfirm(e.target.value);
  };
  return (
    <div className="container">
      <img src={logo} alt="logo" />

      <div className="account">
        <button className="back-btn">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="heroicon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Go back
        </button>
        <div className="text">
          <h2>Create an account</h2>
        </div>
        <form>
          <div className="blocks">
            <h4 className="eten">Name</h4>
            <input
              onChange={handleName}
              type="text"
              placeholder="Enter your name"
              className="help"
              value={name}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Email</h4>
            <input
              onChange={handleMail}
              type="text"
              placeholder="Enter your email"
              className="help"
              value={mail}
            />
          </div>
          <div className="blocks">
            <h4 className="eten-phone">Phone Number</h4>
            <input
              onChange={handlePhone}
              type="text"
              placeholder="Enter your phone number"
              className="help"
              value={number}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Password</h4>
            <input
              onChange={handlePassword}
              type="text"
              placeholder="Enter your password"
              className="help"
              value={password}
            />
          </div>
          <div className="blocks">
            <h4 className="eten-password">Confirm Password</h4>
            <input
              onChange={handleConfirm}
              type="text"
              placeholder="Confirm Password"
              className="help"
              value={passconfirm}
            />
          </div>
          <button className="eten-sign"> Sign Up</button>
          <h4 className="kiki">
            <span className="dolly">Already have an account?</span>
            <span className="clem">Sign In</span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Signup;
