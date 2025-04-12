// components/RatingStars.tsx
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating, reviews }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-[#42bced]" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-[#42bced]" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      {reviews !== undefined && (
        <span className="text-sm text-gray-600 ml-2">({reviews})</span>
      )}
    </div>
  );
};

export default RatingStars;
