"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import nextIcon from "../asset/next.png";
import img1 from '../asset/11.jpg'
import img2 from '../asset/13.jpg'
import img3 from '../asset/15.jpg'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const ShowCase = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      
    <div className="sm:container sm:max-w-[70%] mx-auto w-full max-h-screen h-[40vh] sm:h-[50vh] lg:h-[60vh] xl:h-[70vh] relative flex justify-end items-center p-0 sm:p-5 mb-10 sm:mb-4">
      <div className="w-2/3 sm:w-1/3 absolute top-auto bottom-[0%] left-[50%] sm:bottom-auto sm:top-[50%] sm:left-[5%] translate-x-[-50%] sm:translate-x-[0px] sm:translate-y-[-50%] translate-y-[33%] p-3 sm:p-5 text-center bg-slate-200/90 sm:rounded-md z-10">
        <p className=" tracking-wider text-sm sm:text-base md:text-xl lg:text-2xl ">
          It’s is not about mere possession of luxury but a reflection of
          refined taste that cannot be just bought into.
        </p>
      </div>
      <div className="w-full sm:w-[80%] h-full relative bg-slate-200 sm:rounded-md overflow-hidden">
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, Navigation, Pagination]}
          centeredSlides={true}
          loop={true}
          lazy={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          }}
          pagination={{ clickable: false }}
          className="h-full group"
        >
          <SwiperSlide className="flex justify-center items-center object-center">
            <Image src={img1} alt="image" fill className="object-cover object-bottom " />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2} alt="image" fill className="object-cover object-center " />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img3} alt="image" fill className="object-cover object-bottom " />
          </SwiperSlide>
          <div className="slider-prev absolute flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 sm:bottom-[10px] sm:top-auto top-[50%] bottom-auto translate-y-[-50%]  sm:translate-y-[0px]  left-[-40px] group-hover:left-0 ml-0 sm:ml-2 transition-all cursor-pointer z-10 ">
          <Image src={nextIcon} alt="previous_icon" className="rotate-180 p-1" />
          </div>
          <div className="slider-next absolute flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 sm:bottom-[10px] sm:top-auto top-[50%] translate-y-[-50%]  sm:translate-y-[0px] right-[-40px] group-hover:right-0 mr-0 sm:mr-2 transition-all cursor-pointer z-10">
            <Image src={nextIcon} alt="next_icon" className="text-slate-400 p-1" />
          </div>
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default ShowCase;