import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase"; // Import your Firebase auth instance

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Check the current authenticated user

  if (!user) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" replace />;
  }

  // Render child components for authenticated users
  return children;
};

export default ProtectedRoute;
