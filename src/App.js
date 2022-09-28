import React, { BrowserRouter, Routes, Route } from "react-router-dom";
// components

import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import EmailSent from "./pages/forgotPassword/EmailSent";
import ResetPassword from "./pages/forgotPassword/ResetPassword";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import PageNotFound from "./pages/notfound";
import UpdatePage from "./pages/updateUser";
import Dashboard from "./pages/dashboard";
import EmailVerified from "./pages/forgotPassword/EmailVerified";

import { useState, useEffect } from "react";
import { isLoggedIn } from "./utils/isLoggedIn";
import { getUserData } from "./api";
import { UserContext } from "./context/userContext"
import ProtectedRoute from "./utils/auth";

function App() {
  const [user, setUser] = useState({ avatar: '', userName: '' });
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    isLoggedIn() && getUserData().then(data => setUser(data.response))
  }, [userUpdated])

  return (

    <BrowserRouter>
      <UserContext.Provider value={{ user, setUserUpdated }}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-sent" element={<EmailSent />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/verify/:token" element={<EmailVerified />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/update" element={
            <ProtectedRoute>
              <UpdatePage />
            </ProtectedRoute>
          }></Route>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;

// import all your pages and do your routing here




