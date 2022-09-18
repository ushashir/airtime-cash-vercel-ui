import React, { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Auth from './components/auth';
// pages
import LandingPage from "./pages/landingPage";
import LoginPage from './pages/login';
import SignupPage from "./pages/signup";
import UpdatePage from "./pages/updatePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/update" element={<UpdatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import all your pages and do your routing here