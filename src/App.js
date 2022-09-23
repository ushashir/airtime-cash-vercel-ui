import React, { BrowserRouter, Routes, Route } from "react-router-dom";
// components

import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import EmailSent from "./pages/forgotPassword/EmailSent";
import ResetPassword from "./pages/forgotPassword/ResetPassword";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/login/index";
import SignupPage from "./pages/signup/index";
import PageNotFound from "./pages/notfound";
import UpdatePage from "./pages/updateUser";
import Dashboard from "./pages/dashboard";
import EmailVerified from "./pages/forgotPassword/EmailVerified";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/update" element={<UpdatePage />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/verify/:token" element={<EmailVerified />} />
        <Route path="/signupPage" element={<SignupPage />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import all your pages and do your routing here




