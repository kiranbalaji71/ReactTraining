import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  return localStorage.getItem("login") === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
