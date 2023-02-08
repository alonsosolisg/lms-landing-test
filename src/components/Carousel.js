import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="xs:h-72 xs:w-72 sm:h-128 sm:w-128 md:h-96 md:w-96 lg:h-128 lg:w-128 md:pr-6 xl:pr-0 xl:mt-0 lg:ml-0 2xl:ml-10 md:mt-10 xs:my-14 md:my-0">
      <Swiper
        allowTouchMove={false}
        preventInteractionOnTransition={true}
        draggable={false}
        slidesPerView={1}
        loop={true}
        className="mySwiper xs:h-72 xs:w-72 sm:h-128 sm:w-128 md:h-96 md:w-96 lg:h-128 lg:w-128"
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image src="hoodie.svg" fill alt="hoodie" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="shirtcoffee.svg" fill alt="shirtcoffee" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="hoodietwo.svg" fill alt="hoodietwo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="shirt.svg" fill alt="shirt" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="cap.svg" fill alt="cap" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
