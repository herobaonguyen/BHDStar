import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper';


SwiperCore.use([Pagination, Navigation]);


export const SpecialBanner = () => {
  return <div className="special-banner">
    <p className="special-banner__header">KHUYẾN MÃI</p>
    <Swiper slidesPerView={3} spaceBetween={25} className="mySwiper" pagination={{
      "clickable": true
    }}
      breakpoints={{

        "200": {
          "slidesPerView": 1,
          "spaceBetween": 20
        },

        "992": {
          "slidesPerView": 2,
          "spaceBetween": 20
        },

        "1200": {
          "slidesPerView": 3,
          "spaceBetween": 20
        }
      }}
    >
      <SwiperSlide className="special-slide" style={{ height: "250px" }}>
        <img src={require('../../Assets/img/Banner/1920x1080-BHDS-LK-movie-week.png')} />
      </SwiperSlide>
      <SwiperSlide className="special-slide" style={{ height: "250px" }}>
        <img src={require('../../Assets/img/Banner/BHDS-LK-DangkiTV-TaiApp.png')} />
      </SwiperSlide>
      <SwiperSlide className="special-slide" style={{ height: "250px" }}>
        <img src={require('../../Assets/img/Banner/Suat-Khuya-Web.jpg')} />
      </SwiperSlide>
      <SwiperSlide className="special-slide" style={{ height: "250px" }}>
        <img src={require('../../Assets/img/Banner/Web-HappyDay.png')} />
      </SwiperSlide>

    </Swiper>

  </div>;
};
