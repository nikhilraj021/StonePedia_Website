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

const AppWrapper = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Navbar />
      )}

      {/* ToastContainer for notifications */}
      <ToastContainer
        // position="top-right"
        // autoClose={3000}
        // hideProgressBar={false}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
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
