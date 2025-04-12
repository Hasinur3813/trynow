import React from "react";
import { CiDiscount1, CiDollar } from "react-icons/ci";
import { FaTruck } from "react-icons/fa6";

const offers = [
  {
    icon: <FaTruck className="text-[#4ab6e1] text-3xl" />,
    text: "Free delivery for orders over $70",
  },
  {
    icon: <CiDiscount1 className="text-[#f5a623] text-3xl" />,
    text: "Daily Mega Discounts",
  },
  {
    icon: <CiDollar className="text-[#6dbf87] text-3xl" />,
    text: "Best price on the market",
  },
];

const NewsLetter = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* newsletter */}
        <div className="bg-black py-5 px-20 flex justify-between items-center rounded-full w-full">
          <p className="text-xl font-semibold text-white max-w-sm w-full">
            Join Our Newsletter
          </p>
          <div className="bg-white w-full rounded-full p-2 flex justify-between items-center">
            <input type="email" className="focus:border-0 focus:outline-0" />
            <button
              className="bg-black text-white cursor-pointer px-4 py-1 rounded-full text-base font-semibold"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Offer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-4  p-4 justify-center"
            >
              {offer.icon}
              <p className="font-semibold text-gray-700">{offer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
