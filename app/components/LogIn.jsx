import React,{useState} from "react";
import {motion } from 'framer-motion'

const LogIn = ({signupHandler}) => {

  const [userData, setUserData] = useState({email:"",password:""});

  const onChangeHandler=(e)=>{
    setUserData((preUserData)=>{
      return {
        ...preUserData,
        [e.target.name]:e.target.value,
      }
    })
  }

  return (
    <motion.div className="w-full flex flex-col items-center justify-start"
      initial={{opacity:0,x:10}}
      animate={{opacity:1,x:0}}
    >
      <h5 className="text-xl font-medium pt-4 text-center">
        LOG IN
      </h5>
      <p className="text-[10px] font-lighter text-gray-500">
        Don't have an account?{" "}
        <span className="cursor-pointer underline" onClick={signupHandler}>Signup</span>
      </p>

      <div className="w-full flex flex-col justify-start items-start px-5 sm:px-6 text-[15px] sm:px-6 md:px-10 pt-6">
        <label className="text-md text-md pb-1">Email Or Phone</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
          onChange={onChangeHandler}
        />

        <label className="text-md text-md pb-1">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
          onChange={onChangeHandler}
        />

        <button className="text-white bg-black text-sm font-semibold px-5 py-1 mt-4">
          Log In
        </button>
      </div>
    </motion.div>
  );
};

export default LogIn;
