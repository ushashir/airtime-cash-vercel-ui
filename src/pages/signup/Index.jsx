import { useState } from "react";
import React from "react";
import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { registerUser } from "../../api";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setMail] = useState("");
  const [phone, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setPassconfirm] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleFirstName = (e) => {
    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setBtnDisabled(true);
    } else if (firstName !== "" && firstName.trim().length <= 15) {
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

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      userName,
      email,
      phone,
      password,
      confirmPassword,
    };

    const res = await registerUser(data);
    console.log(res);
    if (res.message === "Success") {
      Swal.fire("Success", res.response, "success");
      setTimeout(() => {
        navigate("/login");
      }, 4000);
      return;
    }
    Swal.fire("Oops", res.message, "error");
  };

  return (
    <div className="father">
      <img className="img" src={logo} alt="logo" />

      <div className="account">
        <Link to="/login">
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
        </Link>
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
              value={firstName}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Last Name</h4>
            <input
              onChange={handleLastName}
              type="text"
              placeholder="Last Name"
              className="help"
              value={lastName}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">User Name</h4>
            <input
              onChange={handleUserName}
              type="text"
              placeholder="User Name"
              className="help"
              value={userName}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Email</h4>
            <input
              onChange={handleMail}
              type="text"
              placeholder="Email"
              className="help"
              value={email}
            />
          </div>
          <div className="blocks">
            <h4 className="eten-phone">Phone Number</h4>
            <input
              onChange={handlePhone}
              type="text"
              placeholder="Phone Number"
              className="help"
              value={phone}
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Password</h4>
            <input
              onChange={handlePassword}
              type="password"
              placeholder="Password"
              className="help"
              value={password}
            />
          </div>
          <div className="blocks">
            <h4 className="eten-password">Confirm Password</h4>
            <input
              onChange={handleConfirm}
              type="password"
              placeholder="Confirm Password"
              className="help"
              value={confirmPassword}
            />
          </div>
          <button onClick={submit} className="eten-sign" type="submit">
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
