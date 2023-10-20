import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import img1 from "../asset/11.jpg";
import img2 from "../asset/12.jpg";
import img3 from "../asset/13.jpg";
import img4 from "../asset/14.jpg";
import img5 from "../asset/15.jpg";

import tbl1 from "../asset/Table 1.png";
import tbl2 from "../asset/Table 2.png";
import tbl3 from "../asset/Table 3.png";

import diagram1 from "../asset/diagram-1.png";
import diagram2 from "../asset/diagram-2.png";
import diagram3 from "../asset/diagram-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import ProductSlider from "./ProductSlider";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [];

  return (
    <div className="container max-w-[1130px] w-full sm:w-[90%] md:w-[80%] mx-auto flex flex-col justify-start items-center max-sm:px-6 py-6">
      <h2 className="sm:hidden mt-0 mt-4 text-2xl text-black font-normal tracking-widest">
        RAILWAY HINGES
      </h2>
      <div className="w-full  flex flex-col sm:flex-row justify-center items-start gap-8 ">
        <div className="basis-1/2 h-full  w-full flex flex-col justify-start items-start mt-6">
          <div className="h-auto   w-full flex flex-col sm:flex-row">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                height: "auto",
                margin: "0 0 0 0",
                aspectRatio: "56/44",
              }}
              // loop={true}
              direction={"vertical"}
              // freeMode={true}
              slidesPerView={1}
              spaceBetween={10}
              // navigation={false}
              thumbs={{ swiper: thumbsSwiper }}
              // pagination={{
              //     clickable:true,
              // }}
              mousewheel={true}
              scrollbar={{
                hide: false,
              }}
              modules={[Pagination, Thumbs, FreeMode, Scrollbar, Mousewheel]}
              // className="mySwiper2"
            >
              <SwiperSlide className="" style={{ height: "fit-content" }}>
                <div className="w-[92%] h-fit rounded-2xl overflow-hidden">
                  <Image src={img1} objectFit="cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="" style={{ height: "fit-content" }}>
                <div className="w-[92%] h-fit rounded-2xl overflow-hidden">
                  <Image src={img1} objectFit="cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: "fit-content" }}>
                <div className="w-[92%] h-fit rounded-2xl overflow-hidden">
                  <Image
                    src={img1}
                    objectFit="cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: "fit-content" }}>
                <div className="w-[92%] h-fit rounded-2xl overflow-hidden">
                  <Image
                    src={img1}
                    objectFit="cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="flex flex-col w-auto h-auto justify-start pl-1 sm:pl-[0.6rem] md:pl-[1rem]">
              <Swiper
                onSwiper={setThumbsSwiper}
                // loop={true}
                direction="vertical"
                //   spaceBetween={10}
                slidesPerView={7}
                // freeMode={true}
                // watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-full w-full"
              >
                <SwiperSlide>
                  <Image
                    src={img1}
                    width={70}
                    height={70}
                    className="rounded-sm curp"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img1}
                    width={70}
                    height={70}
                    className="rounded-sm cursor-pointer"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img1}
                    width={70}
                    height={70}
                    className="rounded-sm cursor-pointer"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img1}
                    width={70}
                    height={70}
                    className="rounded-sm cursor-pointer"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="flex flex-wrap gap-6  md:gap-6 xl:gap-16 mt-16 pl-2">
            <Image src={img1} width={70} height={70} className="rounded-md" />
            <Image src={img1} width={70} height={70} className="rounded-md" />
            <Image src={img1} width={70} height={70} className="rounded-md" />
            <Image src={img1} width={70} height={70} className="rounded-md" />
            <Image src={img1} width={70} height={70} className="rounded-md" />
            <Image src={img1} width={70} height={70} className="rounded-md" />
          </div>
        </div>
        <div className="basis-1/2 text-slate-600">
          <h2 className="max-sm:hidden mt-0 mb-3 text-4xl text-black font-bolder tracking-widest">
            RAILWAY HINGES
          </h2>
          <p className="pt-4">
            Range : <span className="text-black font-semibold">Hinges</span>
          </p>
          <h3 className="text-[20px] pt-4 pb-2 text-gray-500 tracking-wide">
            DESCRIPTION :
          </h3>
          <p className="text-[14px]">
            Brass railway hinges are hardware components commonly used in
            woodworking and furniture making to attach doors or lids to the main
            body of a piece, such as cabinets, chests, or boxes. These hinges
            are often crafted from solid brass, which gives them a durable and
            attractive appearance
          </p>

          <h3 className="pt-4 pb-2 text-[20px] text-gray-500 tracking-wide">
            DESCLAIMER :
          </h3>
          <p className="text-[14px]">
            Xprime reserves the right at its sole discretion, to
            change/modify/alter any product specification at any time without
            notice, where improvement can be effected in design, development and
            dimensions.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-8">
        <div className="basis-1/2 w-full sm:max-w-[240px] mx-auto w-full flex flex-col justify-start items-center mt-16">
          <h3 className=" text-[16px] self-start text-gray-500 mb-8 tracking-wide">
            PRODUCT DIMENSIONS :
          </h3>
          <div className="max-w-[240px] w-full flex flex-col items-center justify-start">
            <Image src={diagram1} className="" />
            <Image src={diagram2} className="mt-24" />
            <Image src={diagram3} className="mt-24" />
          </div>
        </div>
        <div className="basis-1/2 w-full sm:max-w-[350px] mx-auto w-full flex flex-col justify-start items-center mt-16">
          <h3 className=" text-[16px] self-start text-gray-500 mb-8 tracking-wide">
            SIZES :
          </h3>
          <div className="max-w-[350px] w-full flex flex-col items-center justify-start">
            <Image src={tbl1} className="" />
            <Image src={tbl2} className="mt-16" />
            <Image src={tbl3} className="mt-16" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-12 text-gray-500 font-semibold">
        <h1 className="text-center text-xl md:text-lg mb-4 font-bold">
          YOU MAY ALSO BE SEARCHING FOR THIS
        </h1>
        <div className="w-full flex justify-center items-center mt-6 ">
          <ProductSlider />
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <ProductSlider />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
