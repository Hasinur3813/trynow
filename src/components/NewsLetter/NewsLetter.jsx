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
        {/* Newsletter */}
        <div className="bg-black py-6 px-6 md:px-10 flex flex-col md:flex-row md:justify-between items-center gap-4 rounded-full w-full">
          <p className="text-xl font-semibold text-white text-center md:text-left w-full md:max-w-sm">
            Join Our Newsletter
          </p>
          <div className="bg-white w-full flex items-center justify-between rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-sm"
            />
            <button
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Offer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-center sm:text-left justify-center sm:justify-start"
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
