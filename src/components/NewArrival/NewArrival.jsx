import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SectionCarousel from "../shared/SectionCarousel/SectionCarousel";

const NewArrival = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle>New Arrival</SectionTitle>

        <div className="mt-10">
          <SectionCarousel dataToShow={"new_arrival"} />
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
