import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

import img1 from "../asset/11.jpg";
import img2 from "../asset/12.jpg";
import img3 from "../asset/13.jpg";
import Image from "next/image";

const ProductSlider = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "black",
        "--swiper-pagination-color": "#fff",
      }}
      // loop={true}
      slidesPerView={4}
      // centeredSlides={false}
      spaceBetween={10}
      navigation={true}
      mousewheel={true}
      modules={[Pagination, Navigation, Mousewheel]}
    >
      <SwiperSlide>
        <Image src={img1} width={180} height={180} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img1} width={180} height={180} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img1} width={180} height={180} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img1} width={180} height={180} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img1} width={180} height={180} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img1} width={180} height={180} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
