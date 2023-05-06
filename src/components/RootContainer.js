import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "../common/ProtectRoute";
import Navbar from "./Navbar";
import FreelancerHome from "./FreelancerHome";
import EmployerHome from "./EmployerHome";
import Login from "./Login";
import NotFound from "./NotFound";
import "./RootContainer.css";

function RootContainer() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route element={<ProtectRoute />}>
          <Route path="/freelancer" element={<FreelancerHome />} />
          <Route path="/employer" element={<EmployerHome />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RootContainer;
