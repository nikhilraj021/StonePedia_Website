import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, restricted }) => {
  const authToken = localStorage.getItem("authToken");

  if (restricted && authToken) {
    // If the user is logged in and trying to access login or signup, redirect them to home
    return <Navigate to="/" replace />;
  }

  if (!authToken && !restricted) {
    // If the user is not logged in and trying to access protected routes, redirect them to login
    return <Navigate to="/login" replace />;
  }

  return children; // Render children if conditions are satisfied
};

export default ProtectedRoute;
