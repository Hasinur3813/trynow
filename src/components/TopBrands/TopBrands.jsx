import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const images = [
  "/images/boss.png",
  "/images/carrera.jpeg",
  "/images/dragon.jpeg",
  "/images/gucci.jpeg",
  "/images/police.png",
  "/images/rayban.png",
  "/images/titan.jpeg",
];

const TopBrands = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle>Top Brands</SectionTitle>
        <div className="py-10">
          <Marquee speed={40} gradient={false}>
            {images.map((src, index) => (
              <div key={index} className="mx-6">
                <img
                  src={src}
                  alt={`glass-${index}`}
                  className="h-24 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
