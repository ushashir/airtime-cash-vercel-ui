import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { baseUrl } from '../../utils/baseUrl';
import './style.scss'
import loginLogo from '../../assets/icons/loginLogo.svg'

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState("");
    const [clickedLogin, setClickedLogin] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value })
        if (loginError) {
            setLoginError("");
            setClickedLogin(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setClickedLogin(true)

        //validation
        // eslint-disable-next-line 
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (inputs.email === '' || inputs.password === '') {
            setLoginError("All input fields must be filled");
            return;
        }
        if (regex.test(inputs.email) === false) {
            setLoginError("Invalid email");
            return;
        }

        const payload = {
            "email": inputs.email,
            "password": inputs.password
        }

        axios.post(`${baseUrl}/api/users/login`, payload)
            .then((res) => {
                if (res.status === 200) {
                    const token = res.data.response.token;
    
                    localStorage.setItem('token', token);
                    navigate('/dashboard')
                }
            }).catch((err) => {
                if (err) {
                    const theError = err.response.data.message
                    setLoginError(theError);
                }

            })


    }
    return (
        <form>
            <div className='test'>
                <div className='login-main'>
                    <div className='logo-div'>
                        <img src={loginLogo} />
                    </div>

                    <div className='details-div'>
                        <p className='login-text'>Login</p>
                        <div className='L-frame-10'>
                            <div className='L-frame-9'>
                                <div className='L-frame-7'>
                                    <div className='L-frame-6'>
                                        <div className='L-frame-4'>
                                            <p className='email-text'>Email</p>
                                            <div className='L-frame-2'>
                                                <input type="email"
                                                    name='email'
                                                    value={inputs.email || ""}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='Enter your email'
                                                />
                                            </div>

                                        </div>
                                        <div className='L-frame-5'>
                                            <div className='password-text'>Password</div>
                                            <div className='L-frame-3'>
                                                <input type="password"
                                                    name="password"
                                                    value={inputs.password || ""}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='Enter your password'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="../forgotPassword" className='link'><p className='forgot_password-text'>Forgot Password?</p></Link>
                                </div>
                                <input className='login-btn' type="submit" value="Login" onClick={handleSubmit} disabled={clickedLogin === true ? true : false} />
                            </div>
                            <p className="no_account-message">Don't have an account? <Link to="../signup" className='link'><span className='create_account'> Create an account</span></Link></p>
                            <p style={{
                                "color": "red"
                            }}>{loginError}</p>

                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default Login;