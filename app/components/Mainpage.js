"use client";
import React from "react";
import Image from 'next/image'
import video1 from "../content/video1.mp4";
import ReactPlayer from "react-player";
import xprimegif from "../content/resizedxprime.gif"
// import video1 from './content/'

// import { useState } from "react"
const Mainpage = () => {
  return (
    <div className="w-screen h-[100vh]  flex justify-center items-center">
      {/* const [data, setData] = useState([]); */}
      <div className="max-w-[800px] max-sm:h-auto grid grid-cols-2 gap-4 my-16 justify-start items-center p-0 place-items-center max-sm:m-0 max-sm:flex max-sm:flex-col max-sm:flex-wrap max-sm:justify-center max-sm:items-center">
       <div className="flex-0.5 justify-self-end max-w-[400px] max-h-[400px] xl:max-w-[600px] xl:max-h-[600px] "> 
        {/* <ReactPlayer url={video1} playing={true} loop={true} controls={true}
        
         className="max-sm:w-[150px] max-sm:h-[200px]"
        /> */}
          <Image
        src={xprimegif} // Replace with the actual path to your GIF in the public folder
        alt="My Animation"
        
      />
        </div>
        <div className="flex max-w-96 justify-center items-center justify-self-start max-sm:w-auto m-[-2px]">
          <p className="text-center text-xl xl:text-2xl sm:text-left px-4">
            {" "}
            It’s is not about mere possession of luxury but a reflection of
            refined taste that cannot be just bought into.{" "}
            <p className=" font-extrabold">#PrimeTime.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;