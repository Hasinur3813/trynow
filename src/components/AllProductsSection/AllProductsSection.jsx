import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SectionCarousel from "../shared/SectionCarousel/SectionCarousel";

const AllProductsSection = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle>All Products</SectionTitle>

        <div className="mt-10">
          <SectionCarousel dataToShow={"flash_sale"} />
        </div>
      </div>
    </section>
  );
};

export default AllProductsSection;
