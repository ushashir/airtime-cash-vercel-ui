import React, { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Auth from './components/auth/Index';
// pages
import LandingPage from "./pages/landingPage/Index.jsx";
import LoginPage from './pages/login/Index';
import SignupPage from "./pages/signup/Index.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import all your pages and do your routing here