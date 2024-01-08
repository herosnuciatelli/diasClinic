import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";


export default function Slider({ settings, children }) {
  return <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}</Swiper>;
}
