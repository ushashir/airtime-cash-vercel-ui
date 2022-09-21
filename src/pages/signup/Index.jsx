import { useState } from "react";
import React from "react";
import "./style.scss";
import logo from "../../assets/icons/logo.svg";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleFirstName = (e) => {
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      mail === "" ||
      number === "" ||
      password === "" ||
      passconfirm === ""
    ) {
      setBtnDisabled(true);
    } else if (firstname !== "" && firstname.trim().length <= 15) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
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
    <div className="father">
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
            <h4 className="eten">First Name</h4>
            <input
              onChange={handleFirstName}
              type="text"
              placeholder="First Name"
              className="help"
              value={firstname}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Last Name</h4>
            <input
              onChange={handleLastName}
              type="text"
              placeholder="Last Name"
              className="help"
              value={lastname}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">User Name</h4>
            <input
              onChange={handleUserName}
              type="text"
              placeholder="User Name"
              className="help"
              value={username}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Email</h4>
            <input
              onChange={handleMail}
              type="text"
              placeholder="Email"
              className="help"
              value={mail}
            />
          </div>
          <div className="blocks">
            <h4 className="eten-phone">Phone Number</h4>
            <input
              onChange={handlePhone}
              type="text"
              placeholder="Phone Number"
              className="help"
              value={number}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Password</h4>
            <input
              onChange={handlePassword}
              type="text"
              placeholder="Password"
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
          <button className="eten-sign" disabled={btnDisabled} type="submit">
            Sign Up
          </button>
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
