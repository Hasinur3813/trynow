import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Countdown from "./components/Countdown";

const FlashSell = () => {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4">
        <SectionTitle>Flash Sell</SectionTitle>

        {/* deal of the day */}
        <Countdown />
      </div>
    </section>
  );
};

export default FlashSell;
