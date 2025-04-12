import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaEye, FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import RatingStars from "../RatingStars/RatingStars";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SectionCarousel = ({ dataToShow = "all_products" }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [glasses, setglasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/glasses.json");
      const glasses = await res.json();
      const filteredGlasses = glasses?.filter((glass) =>
        glass.tags.includes(dataToShow)
      );
      setglasses(dataToShow === "all_products" ? glasses : filteredGlasses);
    };

    fetchData();
  }, [dataToShow]);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // When the viewport is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When the viewport is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When the viewport is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {glasses?.map((glass) => (
          <SwiperSlide key={glass.id}>
            <div className="rounded-md space-y-2 p-2 flex flex-col  border border-gray-300 group group">
              {/* image container */}
              <div className="bg-iceblue rounded-t-full flex justify-center items-end min-h-60 h-full group-hover:bg-[#e9f8fd] transition-colors duration-300 relative">
                {/* badge */}
                {glass.discountPercent && (
                  <button className="px-5 py-2 absolute left-0 top-10 uppercase bg-black txt-lg rounded-md text-white shadow-2xl shadow-[#59b8d7]">
                    ${glass.discountPercent}% off
                  </button>
                )}

                {/* product control */}
                <div className="absolute right-3 bottom-3 hidden flex-col gap-2 group-hover:flex">
                  {[FaEye, FaHeart, FaShoppingCart, ImLoop].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-[#59b8d7] cursor-pointer hover:text-white transition duration-200 ease-in-out"
                    >
                      <Icon size={18} />
                    </button>
                  ))}
                </div>

                <img
                  src={glass.image}
                  alt={glass.name}
                  className="w-2/3 mx-auto"
                />
              </div>

              <p className="text-base">{glass.name}</p>
              <span
                className={`text-sm font-semibold ${
                  glass.stock ? "text-[#6dbf87] " : "text-red-700"
                }`}
              >
                {glass.stock ? "In Stock" : "Out Of Stock"}
              </span>
              <RatingStars rating={glass.rating} reviews={glass.reviews} />
              <p className="text-[#42bced] font-semibold">
                <del className="text-gray-400">${glass.originalPrice}</del> $
                {glass.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <button
        ref={prevRef}
        className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 cursor-pointer text-black p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 cursor-pointer text-black p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SectionCarousel;
