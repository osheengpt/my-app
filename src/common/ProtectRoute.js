import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks";
import { USER_TYPE } from "../utils/consts";

export default function ProtectRoute() {
  const { auth } = useAuthContext();

  return auth ? (
    <>
      {auth.type === USER_TYPE.FREELANCER ? (
        <Navigate to="/freelancer" />
      ) : (
        <Navigate to="/employer" />
      )}
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
