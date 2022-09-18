import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { baseUrl } from '../../utils/baseUrl';
import './style.scss'

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState("");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = () => {
        const payload = {
            "email": inputs.email,
            "password": inputs.password
        }
        console.log("Payload", payload)

        axios.post(`${baseUrl}/api/users/login`, payload)
            .then((res) => {
                if (res.status === 200) {
                    const token = res.data.response.token;
                    localStorage.setItem('token', token)
                    navigate('../landingPage')
                }
            }).catch((err) => {
                if (err) {
                    const theError = err.response.data.message
                    setLoginError(theError);
                }

            })


    }
    return (
        <div className='test'>
            <h1>This is login page</h1>
            Email
            <input type="email"
                name='email'
                value={inputs.email || ""}
                onChange={handleChange}
            />
            Password
            <input type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
            />
            Forgot Password?
            <input type="submit" value="Login" onClick={handleSubmit} />
            <p className="message">Don't have an account? <Link to="../signup"><span> Create an account</span></Link></p>
            <p style={{
                "color": "red"
            }}>{loginError}</p>
        </div>
        //  <>
        //     <div className='login-test'>
        //         <div className='login-main'>
        //             <div className='logo-div'>

        //             </div>
        //             <div className='details-div'>
        //                 Login
        //                 Email
        //                 <input type="email" />
        //                 Password
        //                 <input type="password" />
        //                 Forgot Password?
        //                 <input type="submit" value="Login" />
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

export default Login;