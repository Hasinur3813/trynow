import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Countdown from "./components/Countdown";
import SectionCarousel from "../shared/SectionCarousel/SectionCarousel";

const FlashSell = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle>Flash Sell</SectionTitle>

        {/* deal of the day */}
        <Countdown />

        <div className="mt-10">
          <SectionCarousel dataToShow={"flash_sale"} />
        </div>
      </div>
    </section>
  );
};

export default FlashSell;
