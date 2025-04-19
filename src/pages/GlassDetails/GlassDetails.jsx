import { useEffect, useState } from "react";
import RatingStars from "../../components/shared/RatingStars/RatingStars";
import { Link, useLocation } from "react-router";
import React360Viewer from "react-360-view";

const ProductDetails = () => {
  const [glass, setGlass] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const glass = location?.state;
    setGlass(glass);
  }, [location]);

  if (!glass) {
    return <h3 className="text-center py-10 font-semibold ">Loading...</h3>;
  }
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        {/* back to home */}
        <Link to={"/"}>
          <button
            type="button"
            className="bg-tahiti text-white cursor-pointer font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            Home
          </button>
        </Link>
        <div className="max-w-5xl bg-white mx-auto mt-10 shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="md:w-1/2 p-6 select-none overflow-hidden touch-none flex items-center justify-center">
            <React360Viewer
              amount={10}
              imagePath="/images/glass/"
              fileName="glass-{index}.png"
              autoplay={false}
              loop={true}
              dragSpeed={50}
              reverse={true}
            />
          </div>

          {/* Right Info */}
          <div className="md:w-1/2 p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#101c2c]">
                {glass.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {glass.category}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <RatingStars rating={glass.rating} reviews={glass.reviews} />
              <span className="text-sm text-muted-foreground">
                ({glass.reviews} reviews)
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-[#24c700]">
                  ${glass.price}
                </span>
                {glass.isOnSale && (
                  <>
                    <span className="line-through text-muted-foreground">
                      ${glass.originalPrice}
                    </span>
                    <span className="text-red-500 text-sm font-semibold">
                      {glass.discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-muted-foreground">{glass.description}</p>
            </div>

            <div>
              <p className="text-sm">
                <span className="font-semibold">Stock:</span> {glass.stock}{" "}
                available
              </p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {glass.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#a7c957] text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag.replace(/_/g, " ")}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-4 cursor-pointer bg-[#24c700] hover:bg-green-700 text-white px-6 py-3 text-base font-semibold rounded-xl shadow">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
