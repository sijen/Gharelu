import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper/core";
import "./slider.css";

import BaseUrlContext from "../contextApi/BaseUrlContext";

SwiperCore.use([Navigation]);

export default function App() {
  const { baseUrl } = useContext(BaseUrlContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = () => {
    fetch(`${baseUrl}/api/all-service`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setServices(res.Service);
        console.log("res ", services);
      })
      .catch((err) => console.log("error" + err));
  };
  return (
    <div>
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
        {services.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="main-service-container">
                <div className="home-icon">
                  {/* <FaPaintBrush className="brush" /> */}
                  <img
                    src={service.Image}
                    alt="image not found"
                    className="home-icon"
                  />
                </div>
                <div className="service-name-icons">{service.ServiceName}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
