import React from "react";
import useGlassess from "../../hooks/useGlasses";
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

const featuredImg = {
  bg: "/f-bg.jpeg",
  img1: "/fi1.jpeg",
  img2: "/fi2.jpeg",
  img3: "/fi3.jpeg",
};
const CategoriesSection = () => {
  const { glassess } = useGlassess();
  console.log(glassess);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle>Eyeglasses Cetegories</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 grid-rows-1 md:grid-rows-2 gap-4 mt-10">
          {/* Featured Item */}
          <div
            className="rounded-md overflow-hidden relative row-span-1 md:row-span-2 col-span-2 flex flex-col p-2 items-center justify-start shadow-lg"
            style={{
              backgroundImage: `url(${featuredImg.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-[#e9f8ff] opacity-70"></div>

            <div className="relative flex flex-col justify-center z-10">
              <h3 className="text-lg text-center font-bold mb-5 tracking-wide opacity-70">
                Eyeglasses
              </h3>
              <img
                src={featuredImg.img1}
                alt="featured image"
                className="rounded-md mb-4 w-2/3 mx-auto"
              />
              <div className="flex justify-center gap-4">
                <img
                  src={featuredImg.img2}
                  alt="image"
                  className="w-20 h-20 rounded-md"
                />
                <img
                  src={featuredImg.img3}
                  alt="image"
                  className="w-20 h-20 rounded-md"
                />
              </div>
            </div>
          </div>

          {categories.map((category) => (
            <div
              className="rounded-md shadow-md bg-white p-2 col-span-5"
              key={category.id}
            >
              <p className="text-lg my-2 font-semibold">{category.name}</p>
              <div className="flex items-center justify-between gap-3">
                {category.image.map((image, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      category.name === "Men" ? "bg-[#e9f8ff]" : "bg-[#f7f7f7]"
                    }`}
                  >
                    <img
                      className="hover:scale-110 duration-300 transition-transform"
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
