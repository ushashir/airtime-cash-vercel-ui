import React from "react";
import "./style.scss";
import logo from "../../assets/icons/logo.svg";

const Signup = () => {
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
            <input type="text" placeholder="Enter your name" className="help" />
          </div>
          <div className="blocks">
            <h4 className="eten">Email</h4>
            <input
              type="text"
              placeholder="Enter your email"
              className="help"
            />
          </div>
          <div className="blocks">
            <h4 className="eten-phone">Phone Number</h4>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="help"
            />
          </div>
          <div className="blocks">
            <h4 className="eten">Password</h4>
            <input
              type="text"
              placeholder="Enter your password"
              className="help"
            />
          </div>
          <div className="blocks">
            <h4 className="eten-password">Confirm Password</h4>
            <input
              type="text"
              placeholder="Confirm Password"
              className="help"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
