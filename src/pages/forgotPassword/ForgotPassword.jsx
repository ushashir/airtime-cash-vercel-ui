import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ForgetPasswordPage,
        ForgotPasswordForm,
        HeaderLink,} from "../forgotPassword/styles/LoginPageStyles"

function ForgotPassword() {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);
  return (
    <ForgetPasswordPage>
      <ForgotPasswordForm>
        <div className="forgot-section">
          <h1 className="main-text">Forgot Password</h1>
          <p className="forgot-section-subtext">
            Enter the email associated with your account and we'll send an email
            with instruction to reset your password
          </p>
        </div>
        <div className="form-section">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              axios
                // .post("http://localhost:3000/users/forgotpassword", formData)
                .then((res) => {
                  console.log(res);
                  navigate("/email-sent");
                })
                .catch((err) => console.log(err));
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            {/* <HeaderLink to={"/email-sent"}> */}
            <button type="submit" className="reset-btn">
              Reset password
            </button>
            {/* </HeaderLink> */}
            <HeaderLink secondary={"true"} to={"/login"}>
              <button className="back-btn">Back to Login</button>
            </HeaderLink>
          </form>
        </div>
      </ForgotPasswordForm>
    </ForgetPasswordPage>
  )
}

export default ForgotPassword