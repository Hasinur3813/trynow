import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SectionCarousel from "../shared/SectionCarousel/SectionCarousel";

const DiscountedPrice = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle>Discounted Price</SectionTitle>

        <div className="mt-10">
          <SectionCarousel dataToShow={"discounted_offer"} />
        </div>
      </div>
    </section>
  );
};

export default DiscountedPrice;
