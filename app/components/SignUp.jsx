import React,{useState} from "react";
import {motion} from 'framer-motion'

const SignUp = ({loginHandler}) => {

  const [userData, setUserData] = useState({name:"",email:"",phone:"",companyName:""})

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
      initial={{opacity:0,x:-10}}
      animate={{opacity:1,x:0}}
    >
      <h5 className="text-xl font-medium pt-5 text-center">
        CREATE A NEW ACCOUNT
      </h5>
      <p className="text-[10px] font-lighter text-gray-500">
        Already Registered?{" "}
        <span className="cursor-pointer underline" onClick={loginHandler}>Login</span>
      </p>

      <div className="w-full flex flex-col justify-start items-start px-5 sm:px-6 text-[15px] sm:px-6 md:px-10 pt-2">
        <label className="text-md text-md pb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
          onChange={onChangeHandler}
        />

        <label className="text-md text-md pb-1">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
          onChange={onChangeHandler}
        />

        <label className="text-md text-md pb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
          onChange={onChangeHandler}
        />

        <label className="text-md text-md pb-1">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={userData.companyName}
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
          onChange={onChangeHandler}
        />

        <label className="text-md text-md pb-1">Business Card</label>
        <input
          type="file"
          name="businessCard"
          // value=""
          className="w-full border-2 border-gray-500 px-3 py-[1px] text-[14px] outline-none mb-3"
        />

        <button className="text-white bg-black text-sm font-semibold px-5 py-1 mt-4">
          Request for Access
        </button>
      </div>
    </motion.div>
  );
};

export default SignUp;
