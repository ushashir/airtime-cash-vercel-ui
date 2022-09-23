import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ForgetPasswordPage,
        ForgotPasswordForm,
        HeaderLink,} from "../forgotPassword/styles/LoginPageStyles"

function ForgotPassword() {
  const [formData, setFormData] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errorMessage) {
      setErrorMessage("")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("i'm here")
    axios
      .post("http://localhost:7000/api/users/forgotpassword", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        
          navigate("/email-sent");
        }
      })
      .catch((err) => {
        if (err) {
          const theError = err.response.data.message;
          setErrorMessage(theError)
        }
      });
  }
  


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
            onSubmit={handleSubmit}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            <HeaderLink >

            <button type="submit" className="reset-btn" onClick={handleSubmit}>
             Reset Password
          </button>

            </HeaderLink>
            <HeaderLink secondary={"true"} to={"/login"}>
              <button className="back-btn">Back to Login</button>
            </HeaderLink>
            <p style ={{
              "color": "red"
            }}>{errorMessage}</p>
          </form>
        </div>
      </ForgotPasswordForm>
    </ForgetPasswordPage>
  )
}

export default ForgotPassword