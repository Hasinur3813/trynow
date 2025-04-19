import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight, FaEye, FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import RatingStars from "../RatingStars/RatingStars";
import { Link } from "react-router";
import { isMobile } from "react-device-detect";

const SectionCarousel = ({ dataToShow = "all_products" }) => {
  const [glasses, setGlasses] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef(null);
  const [activeCardId, setActiveCardId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/glasses.json");
      const data = await res.json();
      const filtered = data.filter((glass) => glass.tags.includes(dataToShow));
      setGlasses(dataToShow === "all_products" ? data : filtered);
    };

    fetchData();
  }, [dataToShow]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 2500);

    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {glasses?.map((glass) => (
            // card container
            <div
              className="flex-[0_0_100%]  sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] box-border p-2"
              key={glass.id}
            >
              <div className="rounded-md space-y-2 p-2 flex flex-col border border-gray-300 group">
                <div
                  onClick={() => isMobile && setActiveCardId(glass.id)}
                  className="bg-iceblue rounded-t-full flex justify-center items-end min-h-60 h-full group-hover:bg-[#e9f8fd] transition-colors duration-300 relative"
                >
                  {glass.discountPercent && (
                    <button className="px-5 py-2 absolute left-0 top-10 uppercase bg-black txt-lg rounded-md text-white shadow-2xl shadow-[#59b8d7]">
                      ${glass.discountPercent}% off
                    </button>
                  )}

                  {/* control menu */}
                  <div
                    className={`absolute right-3 bottom-3 flex-col gap-2 transition-all duration-300 ${
                      isMobile
                        ? activeCardId === glass.id
                          ? "flex"
                          : "hidden"
                        : "hidden group-hover:flex"
                    }`}
                  >
                    <Link to={`glass/${glass.id}`} state={glass}>
                      {" "}
                      <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#59b8d7] cursor-pointer hover:text-white transition duration-200 ease-in-out">
                        <FaEye size={18} />
                      </button>
                    </Link>
                    {[FaHeart, FaShoppingCart, ImLoop].map((Icon, idx) => (
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
                    glass.stock ? "text-[#6dbf87]" : "text-red-700"
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
            </div>
          ))}
        </div>
      </div>

      {/* Custom arrows */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 cursor-pointer text-black p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 cursor-pointer text-black p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SectionCarousel;
