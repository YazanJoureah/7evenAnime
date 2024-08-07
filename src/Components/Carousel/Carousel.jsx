import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Carousel.css";
import { EffectCoverflow } from "swiper/modules";
import AnimeCards from "../Cards/AnimeCard/AnimeCards";

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
        <SwiperSlide key={index} className="SwiperSlide">
          <AnimeCards item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
