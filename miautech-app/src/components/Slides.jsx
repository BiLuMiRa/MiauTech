"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function Slides() {
  return (
    <div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/imgs/miaudota/campanha1.png" alt="Campanha 1" />
          </div>

          <div className="swiper-slide">
            <img src="/imgs/miaudota/campanha2.png" alt="Campanha 2" />
          </div>

          <div className="swiper-slide">
            <img src="/imgs/miaudota/campanha3.png" alt="Campanha 3" />
          </div>
        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
