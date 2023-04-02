import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext  from "./contexts/AuthContext";
import LoginPage from "./pages/Login-SignUpPages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Subsctiptions from "./pages/SubscriptionsPage";
import { useState } from "react";
import Plan1Page from "./pages/plans/Plan1Page";
import Plan2Page from "./pages/plans/Plan2Page";
import Plan3Page from "./pages/plans/Plan3Page";
import HomePage from "./pages/HomePage/HomePage";




export default function App() {
  
  const lsAuth = JSON.parse(localStorage.getItem("auth"))
  const [auth, setAuth] = useState(lsAuth);
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/subscriptions" element={<Subsctiptions />}/>
            <Route path="/subscriptions/1" element={<Plan1Page />} />
            <Route path="/subscriptions/2" element={<Plan2Page />} />
            <Route path="/subscriptions/3" element={<Plan3Page />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </AuthContext.Provider>
  );
}