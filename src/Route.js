import React from "react";
import { Routes, Route } from "react-router-dom";
import Data from "./components/Data";
import Login from './components/Login'
import Signup from './components/Signup'
function Routee() {
  return (
      <div>
          <Routes>
      <Route path="/" element={<Data />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
  );
}

export default Routee;
