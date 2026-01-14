"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slides() {
  const slides = [
    { id: "1", image: "/imgs/miaudota/campanha1.png", alt: "Campanha 1" },
    { id: "2", image: "/imgs/miaudota/campanha2.png", alt: "Campanha 2" },
    { id: "3", image: "/imgs/miaudota/campanha3.png", alt: "Campanha 3" },
    { id: "4", image: "/imgs/miaudota/campanha4.png", alt: "Campanha 4" },
  ];

  return (
    <div>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay:2500,
          disableOnInteraction: false,
        }}
        >
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {slides.map((campanha) => (
          <SwiperSlide key={campanha.id} className="swiper-slide">
            <img src={campanha.image} alt={campanha.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
