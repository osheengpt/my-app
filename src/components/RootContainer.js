import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "../common/ProtectRoute";
import PostedJobsContextProvider from "../contexts/PostedJobsContext";
import Navbar from "./Navbar";
import FreelancerHome from "./FreelancerHome";
import EmployerHome from "./EmployerHome";
import PostJob from "./PostJob";
import Login from "./Login";
import NotFound from "./NotFound";
import "./RootContainer.css";

function RootContainer() {
  return (
    <div className="app">
      <Navbar />
      <PostedJobsContextProvider>
        <Routes>
          <Route path="/" element={<ProtectRoute />}>
            <Route path="/freelancer" element={<FreelancerHome />} />
            <Route path="/employer" element={<EmployerHome />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PostedJobsContextProvider>
    </div>
  );
}

export default RootContainer;
