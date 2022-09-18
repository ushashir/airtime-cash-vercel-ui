import axios from "axios";
import React, { useState } from "react";

import logo from "../../assets/icons/logo.svg";
import {
  HeaderLink,
  ResetContent,
  ResetPasswordPage,
  RestFormContainer,
} from "../forgotPassword/styles/ResetPasswordStyles";

const ResetPassword = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ResetPasswordPage>
      <RestFormContainer>
        <ResetContent>
          <div className="logo-and-text">
            <img src={logo} alt="Airtime2CashLogo" />
            <p>
              Airtime<span>2Cash</span>
            </p>
          </div>

          <h2 className="reset-password">Reset Password</h2>

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              axios
                // .post("http://localhost:3000/users/forgotpassword", formData)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));
            }}
          >
            <div className="inputs-container">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="inputs-container">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>

            <HeaderLink>
              <button type="submit">Reset Password</button>
            </HeaderLink>
          </form>
        </ResetContent>
      </RestFormContainer>
    </ResetPasswordPage>
  );
};

export default ResetPassword;