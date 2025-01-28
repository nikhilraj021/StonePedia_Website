import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { motion } from "framer-motion";
import SubNavbar from "./SubNavbar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const userEmail = localStorage.getItem("userEmail");

  const adminEmails = ["admin@stonepedia.com", "superuser@stonepedia.com"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    signOut(auth)
      .then(() => {
        console.log("User Logged out successfully!!");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const isNotHome = location.pathname !== "/";
  const isAdminOrSupplier =
    adminEmails.includes(userEmail) || location.pathname === "/becomeSupplier";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isNotHome || isHovered
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            {isScrolled || isNotHome || isHovered ? (
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
                alt="stonepedia-logo"
                className="w-40"
              />
            ) : (
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
                alt="stonepedia-logo"
                className="w-40"
              />
            )}
          </Link>

          {isAdminOrSupplier ? (
            <ul className="flex items-center space-x-2 lg:space-x-8 font-semibold text-black text-sm">
              <li
                onClick={handleLogOut}
                className="flex items-center gap-2 bg-orange-500 p-2 rounded-xl hover:text-black"
              >
                <a href="#">Logout</a>
                <span>
                  <LuLogOut size={20} />
                </span>
              </li>
            </ul>
          ) : (
            <ul
              className={`hidden md:flex items-center space-x-2 lg:space-x-8 font-semibold ${
                isScrolled || isNotHome || isHovered
                  ? "text-black"
                  : "text-gray-200"
              } text-sm`}
            >
              <Link to="/">
                <motion.li
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 5 }}
                >
                  <a className="hover:text-orange-500 hover:underline underline-offset-4">
                    HOME
                  </a>
                </motion.li>
              </Link>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
              >
                <a className="hover:text-orange-500 hover:underline underline-offset-4">
                  ABOUT US
                </a>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
              >
                <a className="hover:text-orange-500 hover:underline underline-offset-4">
                  SERVICES
                </a>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
              >
                <a className="hover:text-orange-500 hover:underline underline-offset-4">
                  CONTACT
                </a>
              </motion.li>

              <div className="relative inline-block cursor-pointer">
                <span className=" cursor-pointer">
                  <BsCart3 size={20} />
                </span>
                <span className="absolute -top-4 px-1 py-0.5 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full">
                  1
                </span>
              </div>

              <li
                onClick={handleLogOut}
                className="flex items-center gap-2 bg-orange-500 p-2 rounded-xl hover:text-black"
              >
                <a href="#">Logout</a>
                <span>
                  <LuLogOut size={20} />
                </span>
              </li>
            </ul>
          )}

          <span
            onClick={toggleMenu}
            className={`cursor-pointer md:hidden ${
              isScrolled || isNotHome ? "text-black" : "text-white"
            }`}
          >
            <RxHamburgerMenu size={28} />
          </span>
        </div>

        {location.pathname === "/" && !isScrolled && (
          <SubNavbar
            isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        )}

        <div
          className={`absolute top-14 left-0 md:hidden bg-white shadow-md w-48 px-4 z-50 border-t-2 rounded-br-xl transition-all duration-500 ease-out-in ${
            isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <ul className="flex flex-col items-center space-y-4 my-2">
            {["Home", "About Us", "Services", "Contact"].map((item, index) => (
              <li key={index}>
                <a className="text-gray-700 hover:text-black font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
