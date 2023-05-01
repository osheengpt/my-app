import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks";

const Home = () => {
  const { auth } = useAuthContext();

  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <h1>Home</h1>;
};

export default Home;
