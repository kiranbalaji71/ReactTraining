import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  return localStorage.getItem("login") === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
