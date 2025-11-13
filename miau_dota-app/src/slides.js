// Importa Swiper e o CSS principal
import Swiper from "swiper";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Usa os módulos
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

