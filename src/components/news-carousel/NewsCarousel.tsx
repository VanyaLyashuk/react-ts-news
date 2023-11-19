import NewsCard from "../news-card/NewsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";

const NewsCarousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={8}
        slidesPerView="auto"
        centeredSlides={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        breakpoints={{
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
            centeredSlidesBounds: true,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
            centeredSlidesBounds: true,
          },
          1024: {
            spaceBetween: 16,
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
            centeredSlidesBounds: true,
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default NewsCarousel;
