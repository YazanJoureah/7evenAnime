import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Carousel.css";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import {
  RxStarFilled,
  RxArrowTopRight,
  RxArrowLeft,
  RxArrowRight,
} from "react-icons/rx";

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
          <div className="card-container">
            <div
              className="image"
              style={{
                backgroundImage: `url(${item.images.jpg.large_image_url})`,
              }}
            >
              <div className="content">
                <div className="title-wrap">
                  <span className="type">{item.type}</span>

                  <strong className="title">{item.title}</strong>
                </div>
                <div className="badges">
                  {item.genres.map((badg) => (
                    <span className="badge" key={badg.mal_id}>
                      {badg.name}
                    </span>
                  ))}
                </div>

                <div className="desc">
                  {`${item.synopsis.slice(0, 150)}......`}
                </div>
                <div className="cards-footer">
                  <div className="info">
                    <span>
                      <strong>Score: </strong>
                      {item.score}
                      <RxStarFilled size={14} color="gold" />
                    </span>

                    <span>
                      <strong>Season: </strong>
                      {`${item.season} ${item.year}`}
                    </span>
                  </div>

                  <button className="show-details">
                    <RxArrowTopRight size={24} /> <span> Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
