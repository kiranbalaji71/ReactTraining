import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const refreshToken = localStorage.getItem("refreshToken") || "false";
  return refreshToken === "false" ? <Navigate to="/signin" /> : <Outlet />;
};

export default PrivateRoute;
