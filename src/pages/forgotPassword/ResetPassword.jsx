import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../api";

// import logo from "../../assets/icons/logo.svg";
import logoSmall from "../../assets/icons/logoSmall.svg"
import {
  HeaderLink,
  ResetContent,
  ResetPasswordPage,
  RestFormContainer,
} from "../forgotPassword/styles/ResetPasswordStyles";


const ResetPassword = () => {
  const {token} = useParams()
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    e.stopPropagation();

    

    // validation 
    if (formData.password !== formData.confirmPassword) {
        setErrorMessage("passwords do not match");
        return
    }
    const password = formData.password
    const res = await resetPassword({ token, password })
        console.log("res",res)
          navigate("/login");
}

  return (
    <ResetPasswordPage>
      <RestFormContainer>
        <ResetContent>
          <div className="logo-and-text">
            <img src={logoSmall} alt="Airtime2CashLogo" />
           
          </div>

          <h2 className="reset-password">Reset Password</h2>

          <form
            // action=""
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   e.stopPropagation();
            //   axios
            //      .post("http://localhost:7000/users/forgotpassword", formData)
            //     .then((res) => {
            //       console.log(res);
            //     })
            //     .catch((err) => console.log(err));
            // }}
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
              <button type="submit" onClick={handleSubmit}>Reset Password</button>
            </HeaderLink>
            <p style ={{
              "color": "red"
            }}>{errorMessage}</p>
          </form>
        </ResetContent>
      </RestFormContainer>
    </ResetPasswordPage>
  );
};

export default ResetPassword;