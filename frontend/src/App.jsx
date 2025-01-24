import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Category from "./components/category/Category";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const AppWrapper = () => {
  const location = useLocation();

  return (
    <div>
      {/* Show Navbar only on protected pages */}
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Navbar />
      )}

      {/* ToastContainer for notifications */}
      <ToastContainer />

      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
