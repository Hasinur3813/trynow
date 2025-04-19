import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import glass from "../../assets/images/hero-glass.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function HeroArea() {
  const heroSliderPrev = useRef(null);
  const heroSliderNext = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      heroSliderPrev.current &&
      heroSliderNext.current
    ) {
      swiperRef.current.params.navigation.prevEl = heroSliderPrev.current;
      swiperRef.current.params.navigation.nextEl = heroSliderNext.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="bg-[#effaff]">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: heroSliderPrev.current,
              nextEl: heroSliderNext.current,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {[1, 2, 3].map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="py-14">
                  <div className="flex flex-col-reverse sm:flex-row  justify-center items-center gap-8">
                    {/* left content */}
                    <div className="space-y-2 sm:w-1/3">
                      <span className="text-[#95c9dd]">Coming Soon April</span>
                      <h1 className="uppercase  sm:leading-10 md:leading-12 lg:leading-18 text-black 2xl:text-6xl text-lg sm:text-3xl md:text-4xl  lg:text-5xl font-bold ">
                        New fashion & modern eyeglassess
                      </h1>
                      <button
                        type="button"
                        className="flex bg-black text-white px-7 py-2 rounded-md text-base items-center gap-2 cursor-pointer group"
                      >
                        Discover Models{" "}
                        <FaChevronRight
                          size={14}
                          className="mt-1 group-hover:translate-x-2 duration-300 transition-transform"
                        />
                      </button>
                    </div>

                    {/* right content */}
                    <div>
                      <img src={glass} alt="glass" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows */}
          <button
            ref={heroSliderPrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 cursor-pointer text-black p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={heroSliderNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 cursor-pointer text-black p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
