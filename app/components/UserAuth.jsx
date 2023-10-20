import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import bgImg from "../asset/login-bg-img.png";
import reveal_video from "../asset/Delicate Unveiling Logo_1080p.mp4";
import { motion } from "framer-motion";

const UserAuth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [x, setX] = useState("85.2%");

  const loginHandler=() => {
    setIsSignUp(false);
    setX("0%");
  };

  const signupHandler=() => {
    setIsSignUp(true);
    setX("85.2%");
  };



  return (
    <div className="absolute top-0 w-[100vw] h-[100vh] flex justify-center items-center  pt-[20.5px] bg-black login__bg">
      <div className="container w-full sm:w-[90%] max-w-[1030px] h-full sm:h-[90%] sm:max-h-[570px] flex justify-center items-start gap-6 bg-slate-100 p-6 shadow-lg">
        <div className="sm-max:hidden flex w-[60%] h-full bg-green-900">
          <video
            autoPlay={true}
            loop
            muted
            height={"100%"}
            width={"100%"}
            cover
            style={{ objectFit: "cover" }}
          >
            <source src={reveal_video} />
          </video>
        </div>
        <div className="container w-full max-w-[380px] sm:w-[40%] flex flex-col justify-start items-center sm:px-0 md:px-4">
          <div className="relative w-[95%] sm:w-full flex justify-around items-center border border-black rounded-full p-1 mt-4 transition-all">
            <button
              className={`text-md z-[1] ${
                isSignUp ? "text-black" : "text-white"
              }`}
              onClick={loginHandler}
            >
              LOG IN
            </button>
            <button
              className={`text-md z-[1] ${
                isSignUp ? "text-white" : "text-black"
              }`}
              onClick={signupHandler}
            >
              SIGN UP
            </button>
            <motion.div
              animate={{ x }}
              transition={{
                duration: "0.25",
                ease: "easeOut",
                type: "spring",
              }}
              className={`absolute top-0 ${
                isSignUp ? "left-0" : "left-0"
              } h-full w-[54%] rounded-full bg-gray-900`}
            />
          </div>

          {isSignUp ? <SignUp loginHandler={loginHandler} /> : <LogIn signupHandler={signupHandler} />}
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
