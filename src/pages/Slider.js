import { Swiper, SwiperSlide } from "swiper/react";
import { FaPaintBrush, FaChair } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { MdPlumbing } from "react-icons/md";

import SwiperCore, { Navigation } from "swiper/core";
import "./slider.css";

SwiperCore.use([Navigation]);

export default function App() {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="main-service-container">
            <div className="home-icon">
              <FaPaintBrush className="brush" />
            </div>
            <div className="service-name-icons">Painter</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-service-container">
            <div className="home-icon">
              <GiElectric className="brush" />
            </div>
            <div className="service-name-icons">Electrician</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-service-container">
            <div className="home-icon">
              <MdPlumbing className="brush" />
            </div>
            <div className="service-name-icons">Plumber</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-service-container">
            <div className="home-icon">
              <FaChair className="brush" />
            </div>
            <div className="service-name-icons">Furniture</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-service-container">
            <div className="home-icon">
              <FaPaintBrush className="brush" />
            </div>
            <div className="service-name-icons">Painter</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-service-container">
            <div className="home-icon">
              <FaChair className="brush" />
            </div>
            <div className="service-name-icons">Furniture</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
