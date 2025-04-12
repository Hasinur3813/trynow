import React from "react";
import useGlassess from "../../hooks/useGlassess";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
const categories = [
  { id: 1, name: "Men", image: ["/glass1.png", "/glass1.png", "glass1.png"] },
  { id: 2, name: "Women", image: ["/glass1.png", "/glass1.png", "glass1.png"] },
  { id: 3, name: "Baby", image: ["/glass1.png", "/glass1.png", "glass1.png"] },
  {
    id: 4,
    name: "Young Fashion",
    image: ["/glass1.png", "/glass1.png", "glass1.png"],
  },
];
const CategoriesSection = () => {
  const { glassess } = useGlassess();
  console.log(glassess);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle>Eyeglasses Cetegories</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 grid-rows-1 md:grid-rows-2 gap-4 mt-10">
          {/* Featured Item */}
          <div className="border rounded-md row-span-1 md:row-span-2 col-span-2 bg-mint p-4 flex items-center justify-center">
            Featured
          </div>

          {categories.map((category) => (
            <div
              className="rounded-md shadow-md bg-white p-2 col-span-5"
              key={category.id}
            >
              <p className="text-base my-2 font-semibold">{category.name}</p>
              <div className="flex items-center justify-between gap-2">
                {category.image.map((image) => (
                  <div
                    className={`p-2 rounded ${
                      category.name === "Men" ? "bg-[#e9f8ff]" : "bg-[#f7f7f7]"
                    }`}
                    key={category.id}
                  >
                    <img
                      className="hover:transform-3d"
                      src={image}
                      alt={category.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
