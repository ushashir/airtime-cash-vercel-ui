import React, { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Auth from './components/Auth';
// pages
import LandingPage from "./pages/landingPage";
import LoginPage from './pages/login';
import SignupPage from "./pages/signup";
import PageNotFound from "./pages/notfound";
import UpdatePage from "./pages/updateUser";
import Dashboard from "./pages/dashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/auth" element={<Auth />}></Route>

        <Route path="/update" element={<UpdatePage />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;

// import all your pages and do your routing here