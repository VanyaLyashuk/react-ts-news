import NewsCard from "../news-card/NewsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import classNames from 'classnames';
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";

interface IProps {
  category: string;
  reversed: boolean;
}

const NewsCarousel = ({category, reversed}: IProps) => {
  const carouselClasses = classNames("mySwiper pt-[50px] min-[370px]:pt-[60px] pb-[36px] xl:pb-[50px]", {"mySwiperReversed": reversed, "mySwiperRegular": !reversed});
  const titleClasses = classNames("absolute z-10 text-[24px] min-[370px]:text-3xl font-bold top-1 min-[370px]:top-[7px] xl:text-4xl before:content-[''] before:bg-[#add8e6] before:w-0 before:h-2 before:left-0 before:bottom-[4px] min-[370px]:before:bottom-[1px] min-[370px]:before:h-3 before:absolute before:z-[-1] before:transition-all before:duration-500 hover:before:w-[101%] focus:before:w-[101%] focus:outline-none", {"left-4": !reversed, "right-4": reversed});
  return (
    <div className="pt-[60px] pb-[54px] border-b-4 border-black lg:pt-[80px] lg:pb-[74px]">
      <div className="container relative m-auto">
        <a className={titleClasses} href="">{category}</a>
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
            },
            1536: {
              spaceBetween: 16,
              slidesPerView: 4,
              slidesPerGroup: 4,
              centeredSlides: false,
              centeredSlidesBounds: true,
            }
          }}
          className={carouselClasses}
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
      </div>
    </div>
  );
};

export default NewsCarousel;
