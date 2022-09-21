import axios from "axios";
import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  ForgetPasswordPage,
  ForgotPasswordForm,
  HeaderLink,
} from "../forgotPassword/styles/LoginPageStyles";

const EmailSent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = localStorage.getItem("formData");
    axios
         .post("http://localhost:7000/api/users/forgotpassword", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          navigate("/reset-password");
        }
      })
      .catch((err) => {
        if (err) {
        //   const theError = err.response.data.message;
        //   setErrorMessage(theError)
        }
      });
  }

  return (
    <ForgetPasswordPage className="App">
      <ForgotPasswordForm>
        <MdOutlineMarkEmailRead size={"5.625rem"} color={"#03435F"} />
        <h1 className="main-text-verified">Check your mail</h1>
        <div className="text-container">
          <p className="first">
            We sent a password to reset link to your email. Please click he link
            to reset the password
          </p>
          <p className="second">
            Don't receive the email?{" "}
            <span className="red-text" onClick={handleSubmit}>Click to resend link</span>
          </p>
        </div>

        <HeaderLink verify={"true"} to={"/login"}>
        <button
          className="reset-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Back to Login
        </button>
        </HeaderLink>
      </ForgotPasswordForm>
    </ForgetPasswordPage>
  );
};

export default EmailSent;
