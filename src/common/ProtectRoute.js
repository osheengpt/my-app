import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks";

export default function ProtectRoute() {
  const { auth } = useAuthContext();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
