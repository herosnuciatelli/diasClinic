import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';


export default function Slider({ settings, children }) {
  return <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}</Swiper>;
}
