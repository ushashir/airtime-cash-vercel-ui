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
import { RecoilRoot } from "recoil";
import { useState, useEffect } from "react";
import { hasToken } from "./utils/isLoggedIn";
import { getUserData } from "./api";
import { UserContext, BankContext } from "./context/userContext"
import ProtectedRoute from "./utils/auth";
import Layout from "./pages/Admin-dashboard/Layout/layout";
import Overview from "./pages/Admin-dashboard/overview/overview";
import Transaction from "./pages/Admin-dashboard/transactions/transaction";


function App() {
  const [user, setUser] = useState({ avatar: "", userName: "" });
  const [userUpdated, setUserUpdated] = useState(false);
  const [logged, setLogged] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0)
  const [updateWallet, setUpdateWallet] = useState(false);
    
  
  useEffect(() => {
        getUserData().then((res) => {
            const balance = res.response.wallet;
            setWalletBalance(balance)
        })
    }, [updateWallet])

  useEffect(() => {
    hasToken() && getUserData().then(data => setUser(data.response))
  }, [userUpdated, logged])

  return (
    <>
      <RecoilRoot>
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
              <BankContext.Provider value={{walletBalance, setUpdateWallet}}>
                <Dashboard />
              </BankContext.Provider>
            </ProtectedRoute>
          }></Route>
      
//admin
       <Route
                exact
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Routes>
                        <Route exact path="/" element={<Overview />} />{" "}
                        <Route
                          exact
                          path="/transactions"
                          element={<Transaction />}
                        />{" "}
                      </Routes>
                    </Layout>
                  </ProtectedRoute>
                }
              ></Route>

        </Routes>
          </UserContext.Provider>
        </BrowserRouter>
          </RecoilRoot>
      </>

  );
}

export default App;

// import all your pages and do your routing here
