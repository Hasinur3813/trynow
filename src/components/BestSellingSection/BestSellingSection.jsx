import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SectionCarousel from "../shared/SectionCarousel/SectionCarousel";

const BestSellingSection = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle>Best Selling</SectionTitle>

        <div className="mt-10">
          <SectionCarousel dataToShow={"best_selling"} />
        </div>
      </div>
    </section>
  );
};

export default BestSellingSection;
