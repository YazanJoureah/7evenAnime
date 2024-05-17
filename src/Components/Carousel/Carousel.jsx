import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Carousel.css";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import CaroselCards from "../Cards/CaroselCards";

export default function Carousel(items) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      modules={[EffectCoverflow]}
      className="swiper"
    >
      {items.items?.map((item, index) => (
        <SwiperSlide key={index} className="card">
          <CaroselCards item={item} />
        </SwiperSlide>
      ))}

      <div className="slider-control">
        <div className="swiper-button-prev slider-arrow">
          <RxArrowLeft />
        </div>
        <div className="swiper-button-next slider-arrow">
          <RxArrowRight />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}
