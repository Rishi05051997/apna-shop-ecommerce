import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ChangePassword from "./components/Auth/ChangePassword";
import { useAuthContext } from "./context/auth-context";
import axios from "axios"
export default function App() {
  const { login, setShowLoader } = useAuthContext();
  useEffect(() => {
    if (login) {
      axios.defaults.headers.common["Authorization"] = login.token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [login])
  return (
    <div  >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>

    </div>
  );
}
