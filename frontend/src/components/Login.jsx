import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";

const Login = () => {
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
                className="w-60 mx-auto my-6 "
              />
            </Link>

            <form action="" className="space-y-2 md:flex flex-col items-center">
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Phone number, username, or email"
              />
              <input
                type="text"
                className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
                placeholder="Password"
              />
              <div className="py-3">
                <button className="bg-gradient-to-r from-yellow-300 to-pink-800 w-60 md:w-72 text-white font-semibold py-1 rounded-md">
                  Log in
                </button>
              </div>
            </form>

            <div className="flex justify-center items-center text-gray-600 py-3">
              <hr className="w-24 mr-3 md:w-28 md:mr-5" />
              <h1 className="text-sm font-semibold text-white">OR</h1>
              <hr className="w-24 ml-3 md:w-28 md:ml-5" />
            </div>

            <div className="flex justify-center items-center gap-4 my-5">
              <a
                href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1002799417%3A1736318843947362&ddm=1"
                className=" p-2 rounded-full bg-opacity-30  hover:bg-white border hover:border-orange-500"
              >
                <FcGoogle size={22} className="" />
              </a>
              <a
                href="https://www.facebook.com/login/"
                className="p-2 rounded-full bg-opacity-30 hover:bg-white border hover:border-blue-500 "
              >
                <IoLogoFacebook size={22} className="text-[#385185]" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                className=" p-2 rounded-full bg-opacity-30 hover:bg-white border hover:border-pink-500"
              >
                <GrInstagram size={22} className="text-pink-700" />
              </a>
            </div>
            {/* text- text-[#385185] */}
            {/* <span className="font-semibold text-[#385185] text-sm">
                  Log in with Facebook
                </span> */}

            <p className="md:my-3 ">
              <Link
                to="/password/reset"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-300"
              >
                Forgot password?
              </Link>
            </p>
          </div>

          <div className="md:border mt-3 py-4 bg-white rounded-md">
            <p>
              Don't have an account? <nbsp />
              <Link to="/signup" className="text-[#0095F6]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
