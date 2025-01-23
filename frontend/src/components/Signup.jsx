import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/stone.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex justify-center items-center h-full bg-black bg-opacity-50">
        <div className="text-center m-3 md:px-8 md:w-[430px] w-full">
          <div className="md:border bg-white bg-opacity-20 p-6 rounded-lg">
            <Link to="/">
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
                alt="logo"
                className="w-40 md:w-60 mx-auto"
              />
            </Link>

            <p className="text-lg px-6 mb-4 font-semibold text-gray-200">
              Sign up to see awesome marbles and granites..
            </p>

            <form action="" className="space-y-2 md:flex flex-col items-center">
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Mobile Number or Email"
              />
              <input
                type="password"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Password"
              />
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Username"
              />

              <p className="text-xs text-white px-8 py-1">
                By signing up, you agree to our <nbsp />
                <span className="text-gray-300">
                  Terms, Privacy Policy
                </span>{" "}
                <nbsp />
                and <span className="text-gray-300">Cookies Policy.</span>
              </p>
              {/* text-[#00376B] */}

              <div className="md:py-3">
                <button className="bg-gradient-to-r from-yellow-300 to-pink-800 hover:bg-gradient-to-r hover:from-pink-800 hover:to-yellow-300 w-60 md:w-72 text-white font-semibold py-1 rounded-md">
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="md:border mt-3 py-4 bg-white rounded-lg">
            <p>
              Have an account? <nbsp />
              <Link to="/login" className="text-[#0095F6]">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
