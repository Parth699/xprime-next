import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import img1 from "../asset/img1.png";
import img2 from "../asset/2.png";
import img3 from "../asset/3.png";
import img4 from "../asset/4img.png";
import blackFlowet from "../content/black_flower.gif";
import "./Cards.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Cards = () => {
  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);
  return (

    <div className="relative mt-12 pb-16">
      <div className="flex justify-center items-center m-8">
        <h1 data-aos="fade-up" className="text-3xl my-5">
          Cards
        </h1>
      </div >

      {/* rotating flower  */}
      <div className="flex absolute z-[-6] justify-between w-screen overflow-hidden max-sm:hidden ">
        <Image
          src={blackFlowet} // Replace with the actual path to your GIF in the public folder
          alt="My Animation"
          width={500}
          className=" max-sm:hidden h-[500px] translate-x-[-50%]"
          height={500}

        />
        <Image
          src={blackFlowet} // Replace with the actual path to your GIF in the public folder
          alt="My Animation"
          width={500}
          className=" max-sm:hidden mt-[120px]  translate-x-[50%]"
          height={500}

        />
      </div>
      {/* rotating flower  end */}

      <div className="flex justify-center items-center">

        <div data-aos="fade-up" className="grid grid-cols-2 place-items-center gap-12 max-sm:grid-cols-1 z-[10]">
          <div class="relative  h-72 w-72 max-sm:w-80">
            <Image
              src={img1}
              alt="Your Image"
              height={400}
              width={400}
              class="object-cover w-full h-full brightness-50 hover:brightness-100 transition-all duration-800 ease-in-out transform"
            />
            <div class=" inset-0 bg-black bg-opacity-0  flex items-center justify-center">
              <p class="text-black text-xl font-bold">HINGES</p>
            </div>
          </div>


          <div class="relative group h-72 w-72 max-sm:w-80 sepia-0">
            <Image
              src={img2}
              alt="Your Image"
              height={400}
              width={400}
              class="object-cover w-full h-full brightness-50 hover:brightness-100 transition-all duration-800 ease-in-out transform"
            />
            {/* absolute, group-hover:bg-opacity-70 ,color white  */}
            <div class=" inset-0 bg-black bg-opacity-0  flex items-center justify-center">
              <p class="text-black text-xl font-bold">HINGES</p>
            </div>
          </div>

          <div class="relative group h-72 w-72 max-sm:w-80">
            <Image
              src={img3}
              alt="Your Image"
              height={400}
              width={400}
              class="object-cover w-full h-full brightness-50 hover:brightness-100 transition-all duration-800 ease-in-out transform"
            />
            <div class=" inset-0 bg-black bg-opacity-0  flex items-center justify-center">
              <p class="text-black text-xl font-bold">HINGES</p>
            </div>
          </div>

          <div class="relative group h-72 w-72 max-sm:w-80">
            <Image
              src={img4}
              alt="Your Image"
              height={400}
              width={400}
              class="object-cover w-full h-full brightness-50 hover:brightness-100 transition-all duration-800 ease-in-out transform"
            />
            <div class=" inset-0 bg-black bg-opacity-0  flex items-center justify-center">
              <p class="text-black text-xl font-bold">HINGES</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;